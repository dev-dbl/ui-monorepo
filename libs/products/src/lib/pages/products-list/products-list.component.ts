import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService, Product, Category, CategoriesService } from '@dbl-dev/products';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  categories: Category[];
  // products: Product[];
  productsMap: Map<string, Product[]> = new Map<string, Product[]>();

  constructor(private categoriesService: CategoriesService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this._load();
    // this._loadCategories();
    // this._loadProducts();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private async _load() {
    const prods: Product[] = await this.productsService.getProducts().toPromise();
    const cats: Category[] = await this.categoriesService.getCategories().toPromise();
    for (const category of cats) {
      this.productsMap.set(category.id, prods.filter(p => {
        return p.category.id === category.id;
      }));
    }
    this.categories = cats;
  }

  private _loadCategories() {
    this.subs.add(this.categoriesService.getCategories().subscribe(res => {
      this.categories = res;
    }));
  }

  private _loadProducts() {
    // this.subs.add(this.productsService.getProducts().subscribe(res => {
    //   this.products = res;
    // }));
  }
}
