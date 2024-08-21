import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
// Importar Category seria usado para puxar direto do banco de dados, mas mudei de ideia para agilizar
import { Category } from '../../interfaces/Category';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.css',
})
export class MenuCategoriesComponent {
  @Output() categoryClick = new EventEmitter<{
    category: string;
    subcategory: string;
  }>();

  categories = [
    { name: 'Entradas', img: '/entrada.png', subcategories: ['Entradas'] },
    {
      name: 'Principais',
      img: '/principal.png',
      subcategories: ['Principais', 'Prato Infantil'],
    },
    {
      name: 'Sobremesas',
      img: '/sobremesa.png',
      subcategories: ['Sobremesas'],
    },
    { name: 'Bebidas', img: '/bebida.png', subcategories: ['Bebidas'] },
  ];

  selectedIndex: number = 0; // Inicialmente, o primeiro item é ativo

  selectCategory(index: number): void {
    this.selectedIndex = index; // Atualiza o índice do item selecionado
    this.categoryClick.emit({
      category: this.categories[index].name,
      subcategory: this.categories[index].subcategories[0],
    });
  }
}
