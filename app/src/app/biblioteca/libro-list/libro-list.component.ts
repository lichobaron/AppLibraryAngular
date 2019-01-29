import { Libro } from './../shared/libro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libroSeleccionado: Libro = new Libro();
  libros: Libro[];
  hideView: boolean = true;
  constructor(private service: LibroService, private router: Router) { }

  ngOnInit() {
    this.service.listarLibros()
      .subscribe(libros => this.libros = libros);
    this.hideView = true;
  }

  verLibro(libro: Libro){
    this.libroSeleccionado= libro;
    this.hideView = false;
  }

  borrarLibro(libro:Libro){
    this.service.borrarLibro(libro)
      .subscribe();
    this.service.listarLibros()
      .subscribe(libros => this.libros = libros);
    window.location.reload();
  }

}
