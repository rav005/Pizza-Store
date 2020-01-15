import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItems } from 'src/app/models/menu-items';
import { Pizza } from 'src/app/models/pizza';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  pizzas: MenuItems[];
  @Input()
  topings: MenuItems[];
  @Output()
  orderPizza: EventEmitter<Pizza> = new EventEmitter<Pizza>();


  selectedPizza: MenuItems;
  selectedToppings: MenuItems[];
  errorMsg: string;

  constructor() { 
    this.selectedToppings = [];
    this.errorMsg = "";
  }

  ngOnInit() {
  }

  public selectPizza(item: MenuItems) {
    this.selectedPizza = item;
    this.errorMsg = "";
  }

  public selectTopings(item: MenuItems) {
    if (!this.toppingSelected(item)) {
      this.selectedToppings.push(item);
    } else {
      this.selectedToppings = this.selectedToppings.filter(x => x.id != item.id);
    }
    this.errorMsg = "";
  }

  public toppingSelected(item: MenuItems): boolean {
    return (this.selectedToppings.find(x => x.id == item.id) != null ? true : false);
  }

  public getPizzaTotal(): number {
    let p: number = 0; 
    p += (this.selectedPizza) ? this.selectedPizza.price: 0;
    this.selectedToppings.map(x => { p += x.price });
    return p;
  }

  public addPizza(): void {
    if (this.selectedPizza == null) {
      this.errorMsg = "Pizza Size not selected!";
    }

    if (this.selectedToppings.length == 0) {
      this.errorMsg = "No toppings selected";
    }

    if (this.selectedPizza != null && this.selectedToppings.length > 0) {
      let p: Pizza = <Pizza>{ base: this.selectedPizza, toppings: this.selectedToppings };
      this.orderPizza.emit(p);

      this.selectedPizza = null;
      this.selectedToppings = [];
    }
  }

}