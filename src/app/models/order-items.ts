import { Pizza } from './pizza';

export class OrderItems {
  pizza: Pizza[];
  subTotal: number;
  tax: number;
  total: number;
}