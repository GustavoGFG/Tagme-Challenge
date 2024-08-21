import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isModalOpen: boolean = false;
  @Output() openModalEvent = new EventEmitter<boolean>();

  openModal = () => {
    this.isModalOpen = true;
    this.openModalEvent.emit(this.isModalOpen);
  };
}
