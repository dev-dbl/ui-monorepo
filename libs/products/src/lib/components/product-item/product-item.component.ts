import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@dbl-dev/products';
import { CartService } from '@dbl-dev/orders';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addCartItem({ productId: product.id, quantity: 1 });
  }
}
