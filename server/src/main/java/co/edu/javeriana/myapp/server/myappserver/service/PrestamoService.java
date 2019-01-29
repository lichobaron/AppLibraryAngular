package co.edu.javeriana.myapp.server.myappserver.service;

import co.edu.javeriana.myapp.server.myappserver.model.Libro;
import co.edu.javeriana.myapp.server.myappserver.model.LibroRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Prestamo;
import co.edu.javeriana.myapp.server.myappserver.model.PrestamoRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController()
@RequestMapping("/prestamos")
public class PrestamoService {

	@Autowired
	private LibroRepository repository;
	
	@Autowired
	private PrestamoRepository repositoryP;
	
	@PreAuthorize("hasRole('ROLE_ENCARG')")
	@RequestMapping(value = "/auth", produces = "application/json")
	public String test() {
		return "{\"value\": \"success\"}";
	}
	
	@PreAuthorize("hasRole('ROLE_ENCARG')")
	@RequestMapping(value = "/libros", produces = "application/json", method = RequestMethod.GET)
	public Iterable<Libro> findAll() {
		System.out.println("Consultando todos los libros en los prestamos");
		return repository.findAll();
	}
	
	@PreAuthorize("hasRole('ROLE_ENCARG')")
	@RequestMapping(value = "/prest", produces = "application/json", method = RequestMethod.GET)
	public Iterable<Prestamo> findAllPrestamos(String id) {
		Iterable<Prestamo> prestamos = repositoryP.findAll();
		List<Prestamo> prestamosById = new ArrayList<Prestamo>();
		for(Prestamo p: prestamos) {
			if(p.getLibro().getId()==Long.parseLong(id)) {
				prestamosById.add(p);
			}
		}
		Iterable<Prestamo> l = prestamosById;
		System.out.println("Consultando todos los prestamos del libro "+ id +" en los prestamos");
		return l;
	}
	
	@PreAuthorize("hasRole('ROLE_ENCARG')")
	@RequestMapping(value = "/prest", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	void add(@RequestBody Prestamo prestamo, String id) {
		Optional<Libro> libro = repository.findById(Long.parseLong(id));
		prestamo.setLibro(libro.get());
		System.out.println("Insertando un nuevo prestamos en el libro "+ id);
		repositoryP.save(prestamo);
	}
	
	@PreAuthorize("hasRole('ROLE_ENCARG')")
	@RequestMapping(value = "/prest/{id}", method = RequestMethod.PUT)
	void modify(@PathVariable("id") Long id, String fechaDevolucion) {
		Optional<Prestamo> prestamo = repositoryP.findById(id);
		prestamo.get().setFechaDevolucion(fechaDevolucion);
		System.out.println("Finalizando el prestamo "+ id);
		repositoryP.save(prestamo.get());
	}
	
}
