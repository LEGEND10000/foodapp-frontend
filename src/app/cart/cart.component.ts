import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Pizza', price: 10.99, quantity: 1 },
    { id: 2, name: 'Burger', price: 8.99, quantity: 2 },
  ];

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
