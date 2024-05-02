import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-app',
  standalone: true,
  imports: [CardComponent, ListItemComponent, CommonModule, ButtonModule],
  template: `
    <app-card (addItem)="addItem()">
      <app-list-item *ngFor="let item of displayItems" [item]="item" (remove)="removeItem($event)"></app-list-item>
    </app-card>
  `,
  styles: [``]
})
export class CardAppComponent implements OnInit {
  
  ngOnInit(): void {
    this.addInitialItems();
  }

  addInitialItems() {
    for (let i = 0; i < 3; i++) {
      this.addItem();
    }
  }

  items  = [
    "Sed faucibus odio laoreet felis convallis, eu mattis nisl vestibulum.",
    "Etiam consequat erat vitae lacus suscipit porta.",
    "Nulla eget elit convallis odio porttitor vestibulum.",
    "Pellentesque ut nunc vel lorem malesuada congue et ac leo.",
    "Vivamus nec diam at ipsum euismod laoreet."
  ];

  displayItems: string[] = [];

  addItem() {
    if (this.displayItems.length < this.items.length) {
      const remainingItems = this.items.filter(item => !this.displayItems.includes(item));
      const randomIndex = Math.floor(Math.random() * remainingItems.length);
      const randomItem = remainingItems[randomIndex];
      this.displayItems.push(randomItem);
    }  
  }

  removeItem(itemToRemove: string) {
    this.displayItems = this.displayItems.filter(item => item !== itemToRemove);
  }
}
