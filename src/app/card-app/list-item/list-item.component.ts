import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="list-item">
      {{ item }}
      <button pButton type="button" label="Sil" (click)="remove.emit(item)"></button>
    </div>
  `,
  styles: [`
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin: 5px 0;
      border-bottom: 1px solid #eee;
    }
    button{
      margin-left: 35px;
    }
  `]
})

export class ListItemComponent {
  @Input() item?: string;
  @Output() remove = new EventEmitter<string>();
}
