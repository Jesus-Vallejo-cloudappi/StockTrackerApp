import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSentimentGuard } from '../core/guards/stock-sentiment.guard';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';

const routes: Routes = [
  { path: '', component: StockSearchComponent},
  {
    path: 'sentiment/:symbol', component: StockSentimentComponent, canActivate: [StockSentimentGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
