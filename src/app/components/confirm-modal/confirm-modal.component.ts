import { CommonModule } from '@angular/common';
import { Product } from './../../interfaces/Product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RequestNotificationComponent } from '../request-notification/request-notification.component';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule, RequestNotificationComponent],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css',
})
export class ConfirmModalComponent {
  constructor(private productsService: ProductsService) {}

  @Output() close = new EventEmitter<void>();
  @Output() productRemoved = new EventEmitter<Product>(); // New event emitter for the added product
  @Input() product!: Product;

  showNotification: boolean = false;
  disableModal: boolean = false;

  onModalClick(event: MouseEvent): void {
    // Close the modal if the click is outside of the modal-content
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  onRemove(): void {
    this.disableModal = true;
    this.productsService.remove(this.product).subscribe((response) => {
      this.showNotification = true;
      this.productRemoved.emit(response);
      setTimeout(() => {
        this.showNotification = false;
      }, 1000);
      setTimeout(() => {
        this.onCancel();
      }, 2000);
    });
    this.disableModal = true;
  }
  onCancel(): void {
    this.close.emit();
  }
}
