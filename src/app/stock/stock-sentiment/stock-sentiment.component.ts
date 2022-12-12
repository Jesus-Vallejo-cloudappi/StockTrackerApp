import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import { SentimentResponse } from '../models/sentimentResponse';
import { StockData } from '../models/stockData';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.scss']
})
export class StockSentimentComponent {
  sentimentResponse: SentimentResponse = new SentimentResponse();
  symbol: string = '';
  name: string = '';
  readonly localStorageStockData: string = "stockData";
  errorMessage: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private stockService: StockService,
    private loadingService: LoadingService){}

  ngOnInit(){
    this.symbol = this.route.snapshot.paramMap.get('symbol') || "";

    this.route.queryParams
      .subscribe(params => {
        this.name = params['name'];
      });

    if(!this.name){
      let localStorageData: string = localStorage.getItem(this.localStorageStockData) || "";
      let stockData: Array<StockData> = new Array;
  
    if (localStorageData) stockData = JSON.parse(localStorageData);
      let informationFound = stockData.find(x => x.searchResult!.symbol === this.symbol);
      this.name = informationFound!.searchResult!.description;
    }

    this.loadingService.setLoading(true);
    this.errorMessage = "";
    this.stockService.getInsiderSentiment(this.symbol)
      .subscribe(sentiment => {
        this.sentimentResponse = sentiment;
        this.loadingService.setLoading(false);
      }, error => {
        this.loadingService.setLoading(false);
        this.errorMessage = "No Data found";
      });
  }

  goHome() {
    this.router.navigate(['./']);
  }

}
