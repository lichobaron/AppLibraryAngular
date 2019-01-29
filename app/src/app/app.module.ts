import { RestClientService } from './services/rest-client.service';
import { LibroService } from './services/libro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LibroListComponent } from './biblioteca/libro-list/libro-list.component';
import { LibroViewComponent } from './biblioteca/libro-view/libro-view.component';
import { LibroEditComponent } from './biblioteca/libro-edit/libro-edit.component';
import { LibroAddComponent } from './biblioteca/libro-add/libro-add.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PrestamoService } from './services/prestamo.service';
import { LibroPrestamoListComponent } from './biblioteca/libro-prestamo-list/libro-prestamo-list.component';
import { LibroPrestamoComponent } from './biblioteca/libro-prestamo/libro-prestamo.component';


@NgModule({
  declarations: [
    AppComponent,
    LibroListComponent,
    LibroViewComponent,
    LibroEditComponent,
    LibroAddComponent,
    LoginComponent,
    MenuComponent,
    LibroPrestamoListComponent,
    LibroPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibroService,
              PrestamoService,
              RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
