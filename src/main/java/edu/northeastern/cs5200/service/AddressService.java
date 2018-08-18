package edu.northeastern.cs5200.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.northeastern.cs5200.model.Address;
import edu.northeastern.cs5200.repositories.AddressRepository;

@RestController
public class AddressService {

	@Autowired
	AddressRepository addressRepository;
	
	@PostMapping("/api/address")
	public Address createAddress(@RequestBody Address address) {
		return addressRepository.save(address);
	}
	
	@GetMapping("/api/address/{addressId}")
	public Optional<Address> findAddressById(@PathVariable("addressId") int id) {
		return addressRepository.findById(id);
	}
	
	@GetMapping("/api/address")
	public List<Address> findAllAddress(){
			return (List<Address>) addressRepository.findAll();
	}
	
	@PutMapping("/api/address/{addressId}")
	public Address updateAddress(@PathVariable("addressId") int id, @RequestBody Address newAddress) {
		
		Optional<Address> optional = addressRepository.findById(id);
		if(optional.isPresent()) {
			Address address = optional.get();
			/*if(newAddress.getPrimaryAdd() != null) {
				address.setPrimaryAdd(newAddress.getPrimaryAdd());
			}*/
			if(newAddress.getCity() != null) {
				address.setCity(newAddress.getCity());
			}
			if(newAddress.getPerson() != null) {
				address.setPerson(newAddress.getPerson());
			}
			if(newAddress.getState() != null) {
				address.setState(newAddress.getState());
			}
			if(newAddress.getStreet1() != null) {
				address.setStreet1(newAddress.getStreet1());
			}
			if(newAddress.getStreet2() != null) {
				address.setStreet2(newAddress.getStreet2());
			}
			if(newAddress.getZip() != 0) {
				address.setZip(newAddress.getZip());
			}
			
			return addressRepository.save(address);
			
		}
		return null;
	}
	
	@DeleteMapping("/api/address/{addressId}")
	public void deleteAddress(@PathVariable("addressId") int id) {
		addressRepository.deleteById(id);
	}
}
