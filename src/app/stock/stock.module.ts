import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { SharedModule } from '../shared/shared.module';
import { StockItemComponent } from './stock-item/stock-item.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';

@NgModule({
  declarations: [StockSearchComponent, StockItemComponent, StockSentimentComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockRoutingModule
  ]
})
export class StockModule { }
