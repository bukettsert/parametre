import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { NgModule } from '@angular/core';
import { AKartiComponent } from './components/a-karti/a-karti.component';
import { KartListComponent } from './ui/kart-list/kart-list.component';
import { CardAppComponent } from './card-app/card-app.component';
import { QueryPanelComponent } from './query-panel/query-panel.component';

export const routes: Routes = [
    { path: 'task-manager', component: TaskManagerComponent },
    { path: 'card-real', component: CardAppComponent },
    { path: 'card-list', component: KartListComponent },
    { path: 'query-panel', component: QueryPanelComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }