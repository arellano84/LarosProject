package com.laros.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laros.entities.Role;
import com.laros.repositories.RoleRepository;

@RefreshScope
@RestController
@RequestMapping("/role")
@CrossOrigin(origins="*", allowedHeaders="*")//http://192.168.0.65:4200
public class RoleController {

	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping("/roles")
	public List<Role> getRoles() {
		return roleRepository.findAll();
	}
	
	@GetMapping("/role/{id}")
	public Role getRole(@PathVariable Long id) {
		return roleRepository.findOne(id);
	}
	
	@DeleteMapping("/role/{id}")
	public boolean deleteRole(@PathVariable Long id) {
		roleRepository.delete(id);
		return true;
	}
	
	@PutMapping("/role")
	public Role updateRole(@RequestBody Role role) {
		return roleRepository.save(role);
	}
	
	@PostMapping("/role")
	public Role createRole(@RequestBody Role role) {
		return roleRepository.save(role);
	}

	public RoleRepository getRoleRepository() {
		return roleRepository;
	}

	public void setRoleRepository(RoleRepository roleRepository) {
		this.roleRepository = roleRepository;
	}
	
}
