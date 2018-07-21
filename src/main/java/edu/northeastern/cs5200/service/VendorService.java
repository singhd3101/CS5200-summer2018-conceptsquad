package edu.northeastern.cs5200.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Vendor;
import edu.northeastern.cs5200.repositories.VendorRepository;

@RestController
public class VendorService {

	@Autowired
	VendorRepository vendorRepository;
	
	@GetMapping("/api/vendor")
	public Iterable<Vendor> findAllVendor() {
		
		return vendorRepository.findAll();
	}
}
