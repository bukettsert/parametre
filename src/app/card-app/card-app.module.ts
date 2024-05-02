import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { CardAppComponent } from "./card-app.component";
import { CardModule } from "primeng/card";


@NgModule({
    imports:[
        BrowserModule,
        CardModule,
        ListItemComponent,
        CardComponent,
        CardAppComponent
    ],
    declarations: [
        
    ],
    bootstrap:[
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class CardAppModule { }