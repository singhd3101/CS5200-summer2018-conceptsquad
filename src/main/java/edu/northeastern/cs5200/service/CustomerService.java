package edu.northeastern.cs5200.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Booking;
import edu.northeastern.cs5200.model.Customer;
import edu.northeastern.cs5200.repositories.CustomerRepository;

@RestController
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	@GetMapping("/api/customer")
	public Iterable<Customer> findAllCustomer() {
		return customerRepository.findAll();
	}
	
	@GetMapping("/api/customer/{custId}")
	public Customer findCustomerById(@PathVariable("custId") int id) {
		Optional<Customer> optional = customerRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/customer/{custId}/booking")
	public List<Booking> findBookingByCustomerId(@PathVariable("custId") int id) {
		Optional<Customer> optional = customerRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get().getBookings();
		}
		return null;
	}
}
