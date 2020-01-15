import { Component } from '@angular/core';
import { DataService  } from './services/data.service';
import { Pizza } from './models/pizza';
import { OrderItems } from './models/order-items';
import { MenuItems } from './models/menu-items';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza-Store';
  order: OrderItems;
  
  constructor(public dataService: DataService) {
    this.order = <OrderItems>{ pizza: [], subTotal: 0, tax: 0, total: 0 };
  }

  private recalculateOrderTotal() {
    let price: number = 0;
    this.order.pizza.map(x => {
      price += x.base.price;
      x.toppings.map(t => {
        price += t.price;
      });
    });

    this.order.subTotal = price;
    this.order.tax =  price * (environment.tax_rate / 100);
    this.order.total = price + this.order.tax;

  }

  orderPizza(pizza: Pizza) {
    this.order.pizza.push(pizza);
    this.recalculateOrderTotal();
  }


}
