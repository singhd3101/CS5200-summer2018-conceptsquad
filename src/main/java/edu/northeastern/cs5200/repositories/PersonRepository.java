package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Person;

public interface PersonRepository extends CrudRepository <Person, Integer>{

	@Query("SELECT person FROM Person person WHERE person.UserName=:u")
	public Iterable<Person> findPersonByUsername(@Param("u") String usrnm);
	
	@Query("SELECT p FROM Person p WHERE p.UserName=:username AND p.Password=:password")
	public Iterable<Person> findPersonByCredentials(
			@Param("username") String username, 
			@Param("password") String password);
}
