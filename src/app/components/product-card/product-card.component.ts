import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() cardClick = new EventEmitter<Product>();
  @Output() removeClick = new EventEmitter<Product>();

  onCardClick() {
    this.cardClick.emit(this.product);
  }
  onRemoveClick() {
    this.removeClick.emit(this.product);
  }
}
