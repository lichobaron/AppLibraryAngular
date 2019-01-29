import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from '../shared/prestamo';

@Component({
  selector: 'app-libro-prestamo',
  templateUrl: './libro-prestamo.component.html',
  styleUrls: ['./libro-prestamo.component.css']
})
export class LibroPrestamoComponent implements OnInit {

  libros: Libro[] = [];
  libroSeleccionado: Libro = new Libro;
  mostrarPrestamo: boolean = true;
  prestamo: Prestamo = new Prestamo();
  constructor(private service: PrestamoService) { }

  ngOnInit() {
    this.service.listarLibros()
      .subscribe(libros => this.libros = libros);
  }

  prestarLibro(libro: Libro){
    this.mostrarPrestamo = false;
    this.libroSeleccionado = libro;
  }

  registrarPrestamo(){
    if(this.prestamo.persona == null|| !!this.prestamo.fechaVencimiento== null || !this.prestamo.fechaPrestamo == null){
      window.alert('prestamo mal formado')
    }
    else{
      this.service.insertarPrestamo(this.prestamo, this.libroSeleccionado.id).subscribe(data => {
        console.log("OK");
      }, error => {
        console.error(error);
      });
    }
    this.mostrarPrestamo = true;
  }

}
