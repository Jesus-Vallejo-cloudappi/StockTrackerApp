import { Quote } from "./quote";
import { SearchResult } from "./searchResult";

export class StockData {
    constructor(quote?:Quote,  searchResult?: SearchResult){
        this.quote = quote;
        this.searchResult = searchResult;
    }
    quote?: Quote;
    searchResult?: SearchResult;
}  