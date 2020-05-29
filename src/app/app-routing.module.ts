import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {
        //component: LoginComponent
        path: '',
        loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule)
    },

    { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },

    { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) },

    { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
