import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Libro } from '../biblioteca/shared/libro';
import { Prestamo } from '../biblioteca/shared/prestamo';

@Injectable()
export class PrestamoService {

  constructor(private http: HttpClient) { }

  accederPrestamos(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/prestamos/auth', {
      withCredentials: true
    });   
  }

  listarLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:8080/prestamos/libros', {
      withCredentials: true
    });
  }

  listarPrestamos(id:number): Observable<Prestamo[]> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get<Prestamo[]>('http://localhost:8080/prestamos/prest', {
      params: params,
      withCredentials: true
    });
  }

  insertarPrestamo(prestamo: Prestamo, id: number): Observable<Prestamo> {
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.post<Prestamo>('http://localhost:8080/prestamos/prest', prestamo, {
      params: params,
      withCredentials: true
    });
  }

  finalizarPrestamo(id: number, fechaDevolucion: string): Observable<Prestamo>{
    const params = new HttpParams()
    .set('fechaDevolucion',fechaDevolucion );
    return this.http.put<Prestamo>('http://localhost:8080/prestamos/prest/'+id, null, {
      params: params,
      withCredentials: true
    });
  }

}
