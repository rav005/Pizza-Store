import { Injectable } from '@angular/core';
import { MenuItems } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pizza: MenuItems[];
  private toppings: MenuItems[];
  

  constructor() { 
    this.pizza = [
      <MenuItems>{ id: 1, name: "Small Pizza", price: 5},
      <MenuItems>{ id: 2, name: "Medium Pizza", price: 7},
      <MenuItems>{ id: 3, name: "Large Pizza", price: 8},
      <MenuItems>{ id: 4, name: "Extra Large Pizza", price: 9}
    ];

    this.toppings = [
      <MenuItems>{ id: 5, name: "Tomato", price: 1},
      <MenuItems>{ id: 6, name: "Onions", price: 0.5},
      <MenuItems>{ id: 7, name: "Bell Peppers", price: 1},
      <MenuItems>{ id: 8, name: "Mushrooms", price: 1.2},
      <MenuItems>{ id: 9, name: "Pineapple", price: 0.75},
      <MenuItems>{ id: 10, name: "Sausage", price: 1},
      <MenuItems>{ id: 11, name: "Pepperoni", price: 2},
      <MenuItems>{ id: 12, name: "BBQ Chiken", price: 3},
    ];

  }

  public getPizza(): MenuItems[] {
    return this.pizza;
  }

  public getToppings(): MenuItems[] {
    return this.toppings;
  }

}
