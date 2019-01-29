import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../shared/libro';

@Component({
  selector: 'app-libro-view',
  templateUrl: './libro-view.component.html',
  styleUrls: ['./libro-view.component.css']
})
export class LibroViewComponent implements OnInit {

  @Input() libro: Libro;

  constructor(
    private route: ActivatedRoute // Recibir los datos que vienen como parametro enla ruta
  ) { }

  ngOnInit() {
    this.libro = new Libro();
  }
}
