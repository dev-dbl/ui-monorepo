import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from '@dbl-dev/orders';

@Component({
  selector: 'orders-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  cartCount = 0;

  constructor() { }

  ngOnInit(): void {
  // private cartService: CartService
  //   this.cartCount = this.cartService.getCart().items.length;
  }
}
