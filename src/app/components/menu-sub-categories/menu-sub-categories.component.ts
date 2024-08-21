import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductCardComponent } from './../product-card/product-card.component';

@Component({
  selector: 'app-menu-sub-categories',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './menu-sub-categories.component.html',
  styleUrl: './menu-sub-categories.component.css',
})
export class MenuSubCategoriesComponent {
  @Input() products: Product[] = [];

  @Input() isModalOpen: boolean = false;
  @Output() cardClick = new EventEmitter<Product>();
  @Output() openModalEvent = new EventEmitter<boolean>();

  // Remove confirmation modal
  @Input() isConfirmModalOpen: boolean = false;
  @Output() removeClick = new EventEmitter<Product>();
  @Output() openConfirmModalEvent = new EventEmitter<boolean>();

  @Input() product!: Product;

  openModal = (product: Product) => {
    this.cardClick.emit(product);
    this.isModalOpen = true;
    this.openModalEvent.emit(this.isModalOpen);
  };
  openConfirmModal = (product: Product) => {
    this.removeClick.emit(product);
    this.isConfirmModalOpen = true;
    this.openConfirmModalEvent.emit(this.isConfirmModalOpen);
  };
}
