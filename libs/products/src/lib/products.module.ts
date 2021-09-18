import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CardModule } from 'primeng/card';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    TagModule,
    TabViewModule
  ],
  declarations: [
    ProductsListComponent,
    ProductItemComponent
  ],
  exports: [
    ProductsListComponent,
    ProductItemComponent
  ]
})
export class ProductsModule {}
