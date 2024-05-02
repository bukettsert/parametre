import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  template: `
    <p-card>
      <ng-content></ng-content>
      <button pButton type="button" label="Ekle" (click)="addItem.emit()"></button>
    </p-card>
  `,
  styles: [`
    p-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})

export class CardComponent {
  @Output() addItem = new EventEmitter<void>();
}
