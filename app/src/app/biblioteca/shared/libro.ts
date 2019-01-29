import { Prestamo } from './prestamo';
export class Libro {
    id: number;
    nombre: string;
    autores: string;
    prestamos: Prestamo[];
    isbn: number;
}
