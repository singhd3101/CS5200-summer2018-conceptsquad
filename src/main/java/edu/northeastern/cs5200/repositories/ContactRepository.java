package edu.northeastern.cs5200.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

	@Query("select c from Contact c where c.person.id = :id")
	Optional<Contact> findByPersonId(@Param("id") int id);

}
