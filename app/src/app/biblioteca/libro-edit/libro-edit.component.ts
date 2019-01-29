import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../shared/libro';
import { Observable } from 'rxjs/Observable';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent implements OnInit {

  idDelLibro: number;
  libro: Libro = new Libro();

  constructor(
    private route: ActivatedRoute,
    private service: LibroService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.idDelLibro = +params['id']);
    this.service.obtenerLibro(this.idDelLibro).subscribe(libro => this.libro = libro);
  }

  initLibro(libroAsig:Libro, libroValue:Libro){
    libroAsig.id =  libroValue.id;
    libroAsig.nombre = libroValue.nombre;
    libroAsig.isbn = libroValue.isbn;
    libroAsig.autores = libroValue.autores;
  }

  editarLibro(libro:Libro) {
    this.service.editarLibro(libro).subscribe();
  }

}
