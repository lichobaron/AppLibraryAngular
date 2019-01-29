import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from '../services/libro.service';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private libroService: LibroService, private prestamoService: PrestamoService, private router: Router) { }

  ngOnInit() {
  }

  solicitarAccesoCrud(){
    this.libroService.accederCrud().subscribe(data => {
      this.router.navigate(['/biblioteca/libro-list']);
    }, error => {
      window.alert("No cuenta con los permisos para modificar el CRUD");
    });
  }

  solicitarAccesoPrestamos(){
    this.prestamoService.accederPrestamos().subscribe(data => {
      this.router.navigate(['/biblioteca/libro-prestamo']);
    }, error => {
      window.alert("No cuenta con los permisos para realizar prestamos");
    });
  }

}
