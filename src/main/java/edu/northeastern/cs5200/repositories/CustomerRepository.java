package edu.northeastern.cs5200.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Customer;
import edu.northeastern.cs5200.model.Person;

public interface CustomerRepository  extends CrudRepository <Customer, Integer>{

	@Query("SELECT customer FROM Customer customer WHERE customer.UserName=:u")
	public List<Customer> findCustomerByUsername(@Param("u") String usrnm);

}
