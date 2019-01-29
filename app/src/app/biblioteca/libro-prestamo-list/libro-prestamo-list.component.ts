import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../shared/libro';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from '../shared/prestamo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-prestamo-list',
  templateUrl: './libro-prestamo-list.component.html',
  styleUrls: ['./libro-prestamo-list.component.css']
})
export class LibroPrestamoListComponent implements OnInit {

  idDelLibro: number;
  idDelPrestamo: number;
  prestamos: Prestamo[];
  mostrarDevolucion: boolean = true;
  devolucion: string;

  constructor(private service: PrestamoService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.idDelLibro = +params['id']);
    this.service.listarPrestamos(this.idDelLibro)
      .subscribe(prestamos => this.prestamos = prestamos);
  }

  devolverLibro(id: number){
    this.mostrarDevolucion=false;
    this.idDelPrestamo= id;
  }

  registrarDevolucion(){
    if(this.devolucion == null){
      window.alert('digite una fecha de devolución')
    }
    else{
      this.service.finalizarPrestamo(this.idDelPrestamo, this.devolucion).subscribe(data => {
        console.log("OK");
      }, error => {
        console.error(error);
      });
    }
    this.service.listarPrestamos(this.idDelLibro)
      .subscribe(prestamos => this.prestamos = prestamos);
    this.mostrarDevolucion = true;
    window.location.reload();
  }
}
