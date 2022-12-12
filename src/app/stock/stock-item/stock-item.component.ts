import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockData } from '../models/stockData';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {
  @Input() data:StockData = new StockData();
  @Output() removeSymbolEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeSymbolEvent.emit(symbol)
  }
}
