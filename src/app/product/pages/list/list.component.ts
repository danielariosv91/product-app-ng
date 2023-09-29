import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products)
  }
}
