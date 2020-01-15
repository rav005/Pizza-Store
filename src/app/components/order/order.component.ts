import { Component, OnInit, Input } from '@angular/core';
import { OrderItems } from 'src/app/models/order-items';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  order: OrderItems;
  
  showSuccess: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public placeOrder(): void {
    this.showSuccess = true;
  }

  public close(): void {
    window.location.reload();
  }
}