package co.edu.javeriana.myapp.server.myappserver.service;

import co.edu.javeriana.myapp.server.myappserver.model.Libro;
import co.edu.javeriana.myapp.server.myappserver.model.LibroRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Prestamo;
import co.edu.javeriana.myapp.server.myappserver.model.PrestamoRepository;
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
@RequestMapping("/biblio")
public class CrudService {
	
	@Autowired
	private LibroRepository repository;
	
	@Autowired
	private PrestamoRepository repositoryP;
	
	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/auth", produces = "application/json", method = RequestMethod.GET)
	public String test() {
		return "{\"value\": \"success\"}";
	}
	
	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/libros", produces = "application/json", method = RequestMethod.GET)
	public Iterable<Libro> findAll() {
		System.out.println("Consultando todos los libros en el CRUD");
		return repository.findAll();
	}
	
	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/libros/{id}")
	Optional<Libro> find(@PathVariable("id") Long id) {
		System.out.println("Consultando el libro "+ id +" en el CRUD");
		return repository.findById(id);
	}
	
	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/libros/{id}", method = RequestMethod.DELETE)
	void delete(@PathVariable("id") Long id) {
		Optional<Libro> libro = repository.findById(id);
		Iterable<Prestamo> prestamos = repositoryP.findAll();
		for(Prestamo p:prestamos) {
			if(p.getLibro().getId()==id) {
				repositoryP.delete(p);
			}
		}
		System.out.println("Eliminando el libro "+ id +" en el CRUD");
		repository.delete(libro.get());
	}
	
	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/libros", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	void add(@RequestBody Libro libro) {
		System.out.println("Insertando el libro "+ libro.getId() +" en el CRUD");
		repository.save(libro);
	}

	@PreAuthorize("hasRole('ROLE_BIBLIO')")
	@RequestMapping(value = "/libros/{id}", method = RequestMethod.PUT)
	void modify(@PathVariable("id") Long id, String nombre, String isbn, String autores) {
		Optional<Libro> libro = repository.findById(id);
		libro.get().setNombre(nombre);
		libro.get().setISBN(isbn);
		libro.get().setAutores(autores);
		System.out.println("Modificando el libro "+ id +" en el CRUD");
		repository.save(libro.get());
	}
}
