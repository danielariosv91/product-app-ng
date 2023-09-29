import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public searchInputProduct = new FormControl('');
  public products: Product[] = [];
  public editorials: any = [];
  public selectedOProduct?: Product;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      let editorials: any = [];

      this.products = products;
      products.map(item => editorials.push(item.editorial));

     this.editorials = new Set(editorials);
    });
  }

  searchProduct() {
    const value: string = this.searchInputProduct.value || '';

    this.productService.getSearchQuery(value)
      .subscribe(products => this.products = products)
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedOProduct = undefined;
      return;
    }

    const product: Product = event.option.value;
    this.searchInputProduct.setValue(product.name);

    this.selectedOProduct = product;
  }
}
