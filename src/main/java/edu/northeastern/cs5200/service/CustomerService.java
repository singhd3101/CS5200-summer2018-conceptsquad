package edu.northeastern.cs5200.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Customer;
import edu.northeastern.cs5200.repositories.CustomerRepository;

@RestController
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	@GetMapping("/api/customer")
	public Iterable<Customer> findAllVendor() {
		
		return customerRepository.findAll();
	}
}
