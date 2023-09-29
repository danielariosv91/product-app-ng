import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: Product | undefined;

  onAddCart(product: Product | undefined) {
    console.log(product)
  }
}
