import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductsService) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
    })
  }
}
