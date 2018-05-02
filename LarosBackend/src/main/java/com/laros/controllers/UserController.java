package com.laros.controllers;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laros.entities.User;
import com.laros.repositories.UserRepository;

@RefreshScope
@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*", allowedHeaders="*")//http://192.168.0.65:4200
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable Long id) {
		return userRepository.findOne(id);
	}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id) {
		userRepository.delete(id);
		return true;
	}
	
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
}
