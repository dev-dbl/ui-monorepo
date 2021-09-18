import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule
  ],
  declarations: [
    CartBadgeComponent
  ],
  exports: [
    CartBadgeComponent
  ]
})
export class OrdersModule {
  constructor(private cartService: CartService) {
    cartService.initCartLocal();
  }
}
