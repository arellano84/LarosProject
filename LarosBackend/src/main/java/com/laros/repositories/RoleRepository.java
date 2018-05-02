package com.laros.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.laros.entities.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long>{
	
	@Query("SELECT r FROM Role r ")
	List<Role> findAll();

}
