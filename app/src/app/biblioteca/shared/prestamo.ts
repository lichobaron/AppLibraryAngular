import { Libro } from './libro';
export class Prestamo {
    id: number;
    fechaPrestamo: string;
    fechaVencimiento: string;
    fechaDevolucion: string;
    persona: string;
    libro: Libro;
}