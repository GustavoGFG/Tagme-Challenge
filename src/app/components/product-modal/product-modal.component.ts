import { RequestNotificationComponent } from './../request-notification/request-notification.component';
import { CategoryService } from './../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, RequestNotificationComponent],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css',
})
export class ProductModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<Product>(); // New event emitter for the added product
  @Output() productUpdated = new EventEmitter<Product>(); // New event emitter for the added product
  @Input() product!: Product;

  selectedCategory: string = '';
  message: string = '';
  showNotification: boolean = false;
  disableModal: boolean = false;
  categories: Category[] = [];
  filteredSubcategories: Category[] = [];

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
      // Define subcategories for subcategories select
      this.filteredSubcategories = this.categories.filter(
        (category) => category.title === this.product.category,
      );
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    // Redefine subcategories for subcategories select
    this.filteredSubcategories = this.categories.filter(
      (category) => category.title == event.target.value,
    );
  }

  onSubmit(): void {
    this.disableModal = true;
    // Update Product if Product is defined
    if (this.product.id) {
      this.productsService.update(this.product).subscribe((response) => {
        this.message = 'Produto atualizado com sucesso!';
        this.showNotification = true;
        this.productUpdated.emit(response);
        setTimeout(() => {
          this.showNotification = false;
        }, 1000);
        setTimeout(() => {
          this.onCancel();
        }, 2000);
      });
      // Add Product if Product is not defined
    } else {
      this.productsService.add(this.product).subscribe((response) => {
        this.message = 'Produto adicionado com sucesso!';
        this.showNotification = true;
        this.productAdded.emit(response); // Emit the event with the new product data
        setTimeout(() => {
          this.showNotification = false;
        }, 1000);
        setTimeout(() => {
          this.onCancel();
          this.disableModal = false;
        }, 2000);
      });
    }
  }

  onModalClick(event: MouseEvent): void {
    // Close the modal if the click is outside of the modal-content
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  onCancel(): void {
    this.close.emit();
  }
}
