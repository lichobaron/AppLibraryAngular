import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../shared/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.css']
})
export class LibroAddComponent implements OnInit {

  libro: Libro = new Libro();

  constructor(
    private route: ActivatedRoute,
    private service: LibroService
  ) { }

  ngOnInit() {
  }

  agregarLibro(){
    if(this.libro.nombre== null || !this.libro.isbn == null || !this.libro.autores == null){
      window.alert('libro mal formado')
    }
    else{
      this.libro.prestamos = []
      this.service.insertarLibro(this.libro).subscribe(data => {
        console.log("OK");
      }, error => {
        console.error(error);
      });
    }
  }

}
