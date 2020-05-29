import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModule } from 'src/app/add/add.module';
import { EditModule } from 'src/app/edit/edit.module';
import { GridComponent } from './grid.component';
import { from } from 'rxjs';

const routes: Routes =
    [
        { path: '', component: GridComponent },
        { path: 'add', loadChildren: () => import('src/app/add/add.module').then(m => m.AddModule) },
        { path: 'edit/:id', loadChildren: () => import('src/app/edit/edit.module').then(m => m.EditModule) }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
