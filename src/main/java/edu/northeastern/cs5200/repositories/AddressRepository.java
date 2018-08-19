package edu.northeastern.cs5200.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Address;
import edu.northeastern.cs5200.model.Contact;

public interface AddressRepository extends JpaRepository<Address, Integer>{

	@Query("select a from Address a where a.person.id = :id")
	Optional<Address> findByPersonId(@Param("id") int id);

}
