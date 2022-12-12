import { SearchResult } from "./searchResult";

export class SearchResponse {
    constructor(count:number, result:SearchResult[]){
        this.count = count;
        this.result = result;
    }
    count:  number;
    result: SearchResult[];
}  