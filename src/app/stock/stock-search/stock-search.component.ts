import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { forkJoin, map, take } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { StockData } from '../models/stockData';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent {
  stockForm: FormGroup;
  stockData: Array<StockData> = new Array;
  readonly localStorageStockData: string = "stockData";
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private stockService: StockService, private loadingService: LoadingService){
    this.stockForm = this.formBuilder.group({
      symbol: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), this.noWhitespaceValidator]]
    });   
  }

  ngOnInit() {
    this.getStockData();
  }

  getStockData() {
    let localStorageData = localStorage.getItem(this.localStorageStockData);
    if (localStorageData) this.stockData = JSON.parse(localStorageData);    
  }

  noWhitespaceValidator(control: FormControl) {
    return control.value && control.value.match(/\s/g) ? {'whitespace': true} : null;
  }

  searchStock(){
    let stockSymbol = this.stockForm.value.symbol?.toUpperCase();

    if(!this.validateStockExist(stockSymbol)){
      this.errorMessage = "";
      this.loadingService.setLoading(true);
      forkJoin([
        this.stockService.getQuote(stockSymbol),
        this.stockService.search(stockSymbol)]
      ).pipe(
        map(([quote, searchResponse]) => {
          if(searchResponse.count > 0){
            this.stockData = [...this.stockData, new StockData(quote, searchResponse.result[0])];
            localStorage.setItem(this.localStorageStockData, JSON.stringify(this.stockData));
            this.stockForm.reset();
          }        
          else{
            this.errorMessage = "No Data found";
          }
          this.loadingService.setLoading(false);
        })
      ).subscribe();
    }
  }

  validateStockExist(stockSymbol: string){
    this.errorMessage = "Symbol is repeated";
    return this.stockData.find(x => x.searchResult?.symbol === stockSymbol.toUpperCase()) ? true : false
  }

  removeSymbol(symbol: string) {
    let index: number = this.stockData.findIndex(x => x.searchResult?.symbol === symbol);
    if (index >= 0) {
      this.stockData.splice(index, 1);
      localStorage.setItem(this.localStorageStockData, JSON.stringify(this.stockData));
    }
  }
}
