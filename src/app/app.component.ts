import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { RequestNotificationComponent } from './components/request-notification/request-notification.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductsService } from './services/products.service';

import { MenuSubCategoriesComponent } from './components/menu-sub-categories/menu-sub-categories.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedAccessibilityComponent } from './components/shared-accessibility/shared-accessibility.component';
import { Product } from './interfaces/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    RouterOutlet,
    FormsModule,
    HeaderComponent,
    HeroComponent,
    SharedAccessibilityComponent,
    MenuCategoriesComponent,
    MenuSubCategoriesComponent,
    ProductModalComponent,
    RequestNotificationComponent,
    ConfirmModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isModalOpen: boolean = false;
  isConfirmModalOpen: boolean = false;
  selectedCategory: string = 'Entradas';
  selectedSubcategory: string = 'Entradas';
  product: Product = this.createEmptyProduct();

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
    this.filterProducts();
  }

  handleOpenModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  handleOpenConfirmModal(isOpen: boolean) {
    this.isConfirmModalOpen = isOpen;
  }

  handleProductAdded(newProduct: Product): void {
    this.products.push(newProduct); // Add the new product to the existing list
    this.filterProducts();
  }
  handleProductUpdated(updatedProduct: Product): void {
    this.products = this.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    );
    this.filterProducts();
  }
  handleProductRemoved(removedProduct: Product): void {
    this.products = this.products.filter(
      (product) => product.id !== removedProduct.id,
    );
    this.filterProducts();
  }

  handleProductSelected(product: Product) {
    this.product = product;
    this.isModalOpen = true;
  }
  handleCategorySelected(event: { category: string; subcategory: string }) {
    this.selectedCategory = event.category;
    this.selectedSubcategory = event.subcategory;
    this.filterProducts();
  }
  filterProducts() {
    this.filteredProducts = this.products.filter(
      (product) => product.subcategory === this.selectedSubcategory,
    );
  }
  handleProductToRemove(product: Product) {
    this.product = product;
    this.isConfirmModalOpen = true;
  }
  handleCloseModal() {
    this.isModalOpen = false;
    this.resetProduct();
  }

  handleCloseConfirmModal() {
    this.isConfirmModalOpen = false;
    this.resetProduct();
  }

  createEmptyProduct(): Product {
    return {
      title: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      subcategory: '',
    };
  }

  resetProduct() {
    this.product = this.createEmptyProduct();
  }

  title = 'tagme-menu-digital';
}
