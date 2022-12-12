import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StockData } from 'src/app/stock/models/stockData';

@Injectable({
  providedIn: 'root'
})
export class StockSentimentGuard implements CanActivate {
  readonly localStorageStockData: string = "stockData";

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let symbol: string = route.paramMap.get('symbol') || "";
    let localStorageData: string = localStorage.getItem(this.localStorageStockData) || "";
    let stockData: Array<StockData> = new Array;

    if (localStorageData) stockData = JSON.parse(localStorageData);

    if (!stockData.find(x => x.searchResult!.symbol === symbol)) {
      this.router.navigate(['/']);
      return false;
    }
    else{      
      return true;
    }    
  }  
}