import { RecordArray, RecordValue, RecordObject } from './recorder';
import { Product, currentProduct } from "./types";

declare global {
    interface Window {
      store: {
        goods: Array< Array< Product > >;
        products: RecordArray<Product>;
        product: RecordObject<currentProduct>;
      };
    }
}