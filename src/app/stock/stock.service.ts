import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './models/quote';
import { SearchResponse } from './models/searchResponse';
import { SentimentResponse } from './models/sentimentResponse';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly API_KEY: string = 'bu4f8kn48v6uehqi3cqg';
  private readonly BASE_URL: string = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) {}

  getQuote(symbol: string): Observable<Quote> {
    return this.http.get<Quote>(`${this.BASE_URL}/quote`, {
      params: {
        token: this.API_KEY,
        symbol
      }
    })
  }

  search(q: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.BASE_URL}/search`, {
      params: {
        token: this.API_KEY,
        q
      }
    })
  }

  getInsiderSentiment(symbol: string): Observable<SentimentResponse> {
    let currentDate: Date = new Date();
    let to: string = currentDate.toISOString().split("T")[0];
    let passDate: Date = new Date(currentDate.setMonth(currentDate.getMonth()-3));
    let from: string = passDate.toISOString().split("T")[0];    
    return this.http.get<SentimentResponse>(`${this.BASE_URL}/stock/insider-sentiment`, {
      params: {
        token: this.API_KEY,
        symbol,
        from,
        to
      }
    })
  }
}
