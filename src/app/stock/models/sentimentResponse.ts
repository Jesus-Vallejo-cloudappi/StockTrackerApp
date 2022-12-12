import { SentimenData } from "./sentimentData";

export class SentimentResponse {
    constructor(data?: Array<SentimenData>, symbol?: string){
        this.data = data;
        this.symbol = symbol;
    }
    data?: Array<SentimenData>;
    symbol?: string;
}  