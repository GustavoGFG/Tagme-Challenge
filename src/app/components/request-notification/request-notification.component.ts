import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-request-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-notification.component.html',
  styleUrl: './request-notification.component.css',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          bottom: '-50px',
        }),
      ),
      state(
        '*',
        style({
          opacity: 1,
          bottom: '20px',
        }),
      ),
      transition('void => *', [animate('500ms ease-in')]),
      transition('* => void', [animate('500ms ease-out')]),
    ]),
  ],
})
export class RequestNotificationComponent implements OnInit {
  @Input() message: string = '';
  isVisible: boolean = false;
  isAnimated: boolean = false;

  ngOnInit(): void {
    this.showNotification();
  }

  showNotification(): void {
    this.isVisible = true;
    setTimeout(() => {
      this.isAnimated = true;
    }, 50);

    setTimeout(() => {
      this.isAnimated = false;
      setTimeout(() => {
        this.isVisible = false;
      }, 300);
    }, 3000);
  }
}
