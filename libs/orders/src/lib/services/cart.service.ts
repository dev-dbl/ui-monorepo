import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

export const CART_KEY = 'cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.getCart());

  constructor() { }

  initCartLocal() {
    if (this.getCart())
      return;

    this.clearCart();
  }

  getCart(): Cart {
    const cartJson: string | null = localStorage.getItem(CART_KEY);
    if (cartJson)
      return JSON.parse(cartJson);
    else {
      return { items: [] };
    }
  }

  clearCart() {
    const clearCart = {
      items: []
    };
    this.saveCart(clearCart);
  }

  addCartItem(cartItem: CartItem, overwrite?: boolean): Cart {
    const cart: Cart = this.getCart();
    const foundItem = cart.items.find(i => i.productId === cartItem.productId);
    if (foundItem) {
      cart.items.map(item => {
        if (item.productId === cartItem.productId) {
          if (overwrite)
            item.quantity = cartItem.quantity
          // else
          //   item.quantity += cartItem.quantity
        }

        return item;
      })
    } else
      cart.items.push(cartItem);

    this.saveCart(cart);
    return cart;
  }

  removeCartItem(productId: string): Cart {
    const cart: Cart = this.getCart();

    cart.items = cart.items.filter(i => i.productId !== productId);

    this.saveCart(cart);
    return cart
  }

  private saveCart(cart: Cart) {
    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJson);
    this.cart$.next(cart);
  }
}
