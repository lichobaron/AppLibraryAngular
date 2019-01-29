import { LibroViewComponent } from './biblioteca/libro-view/libro-view.component';
import { LibroListComponent } from './biblioteca/libro-list/libro-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroEditComponent } from './biblioteca/libro-edit/libro-edit.component';
import { LibroAddComponent } from './biblioteca/libro-add/libro-add.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LibroPrestamoComponent } from './biblioteca/libro-prestamo/libro-prestamo.component';
import { LibroPrestamoListComponent } from './biblioteca/libro-prestamo-list/libro-prestamo-list.component';


const routes: Routes = [
  { path: 'biblioteca/libro-list', component: LibroListComponent },
  { path: 'biblioteca/menu', component: MenuComponent },
  { path: 'biblioteca/libro-edit/:id', component: LibroEditComponent },
  { path: 'biblioteca/libro-add', component: LibroAddComponent },
  { path: 'biblioteca/libro-prestamo', component: LibroPrestamoComponent },
  { path: 'biblioteca/libro-prestamo-list/:id', component: LibroPrestamoListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
