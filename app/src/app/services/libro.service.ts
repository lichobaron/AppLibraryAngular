import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Libro } from '../biblioteca/shared/libro';

@Injectable()
export class LibroService {
  constructor(private http: HttpClient) { }

  accederCrud(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/biblio/auth', {
      withCredentials: true
    });   
  }

  listarLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:8080/biblio/libros', {
      withCredentials: true
    });
  }

  insertarLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>('http://localhost:8080/biblio/libros', libro, {
      withCredentials: true
    });
  }

  editarLibro(libro: Libro) {
    const params = new HttpParams()
      .set('nombre', libro.nombre)
      .set('isbn', libro.isbn.toString())
      .set('autores', libro.autores);
    return this.http.put<Libro>('http://localhost:8080/biblio/libros/'+libro.id, null, {
      params: params,
      withCredentials: true
    });
  }

  borrarLibro(libro: Libro):  Observable<{}> {
    let url =  'http://localhost:8080/biblio/libros/'+libro.id;
    return this.http.delete(url, {
      withCredentials: true
    });
  }

  obtenerLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>('http://localhost:8080/biblio/libros/'+id, {
      withCredentials: true
    });
  }

}
