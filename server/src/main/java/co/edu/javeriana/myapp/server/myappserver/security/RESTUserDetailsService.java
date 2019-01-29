package co.edu.javeriana.myapp.server.myappserver.security;

import co.edu.javeriana.myapp.server.myappserver.model.User;
import co.edu.javeriana.myapp.server.myappserver.model.User_E;
import co.edu.javeriana.myapp.server.myappserver.model.User_ERepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class RESTUserDetailsService implements UserDetailsService {
	Map<String, User> users = new HashMap<>();
	
	@Autowired
	private User_ERepository repository;

	public RESTUserDetailsService() {
		super();
		
	}
	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		Iterable<User_E> usersPer = repository.findAll();
		for(User_E user:usersPer) {
			users.put(user.getUsername(), new User(user.getUsername(), user.getPassword(), user.getRol()));
		}

		System.out.println("*** Retrieving user");
		return users.get(username);
	}	

}
