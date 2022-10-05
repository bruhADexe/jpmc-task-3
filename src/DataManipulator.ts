import { ServerRespond } from './DataStreamer';

export interface Row {
  stock: string,
  top_ask_price: number,
  timestamp: Date,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    const price_abc = (serverResponse[0].top_ask.price + serverRespond[0].top_bid.price) / 2;
    const price_def = (serverResponse[1].top_ask.price + serverRespond[1].top_bid.price) / 2;
    const ration = price_abc / price_def;
    const upper_bound = 1 + 0.05
    const lower_bound = 1 - 0.05
    return serverResponds.map((el: any) => {
      return {
        price_abc : number,
        price_def : number,
        raatio : number,
        timestamp: Date,
        upper_bound : number,
        lower_bound : number,
        trigger_alert : number | undefined,
      };
    })
  }
}
