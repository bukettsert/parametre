import { Component, NgModule, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AKartiComponent } from '../../components/a-karti/a-karti.component';
import { BKartiComponent } from '../../components/b-karti/b-karti.component';
import { CKartiComponent } from '../../components/c-karti/c-karti.component';

@Component({
  selector: 'app-kart-list',
  templateUrl: './kart-list.component.html',
  styleUrls: ['./kart-list.component.scss']
})
export class KartListComponent{
  

}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    KartListComponent,
    AKartiComponent,
    BKartiComponent,
    CKartiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [KartListComponent]
})
export class CardsModule { }

