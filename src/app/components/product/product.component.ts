import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;

  counter = 0;

  get currImage() {
    return this.product.images[this.counter];
  }

  get nextImage() {
    return this.product.images[this.counter + 1];
  }
}
