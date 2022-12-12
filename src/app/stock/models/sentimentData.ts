export class SentimenData {
    constructor(symbol:string, year: number, month: number, change: number, mspr: number){
        this.symbol = symbol;
        this.year = year;
        this.month = month;
        this.change = change;
        this.mspr = mspr;
    }
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
}  