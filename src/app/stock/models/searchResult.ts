export class SearchResult {
    constructor(description:string, displaySymbol:string, symbol:string, type:string){
        this.description = description;
        this.displaySymbol = displaySymbol;
        this.symbol = symbol;
        this.type = type;
    }
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
}  