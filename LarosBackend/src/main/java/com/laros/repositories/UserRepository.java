package com.laros.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.laros.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
//	@Query("SELECT u FROM User u WHERE u.id = ?1 ")
//    List<User> findByIdUsuario(Long id);
	
	@Query("SELECT u FROM User u ")
	List<User> findAll();

}
