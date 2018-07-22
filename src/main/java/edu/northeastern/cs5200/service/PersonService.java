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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Address;
import edu.northeastern.cs5200.model.Contact;
import edu.northeastern.cs5200.model.Person;
import edu.northeastern.cs5200.repositories.AddressRepository;
import edu.northeastern.cs5200.repositories.ContactRepository;
import edu.northeastern.cs5200.repositories.PersonRepository;

@RestController
public class PersonService {

	@Autowired
	PersonRepository personRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	ContactRepository contactRepository;
	
	@PostMapping("api/person")
	public Person createPerson(@RequestBody Person person) {
		return personRepository.save(person);
	}
	
	@GetMapping("/api/person/{personId}")
	public Optional<Person> findPersonById(@PathVariable("personId") int id) {
		return personRepository.findById(id);
	}
	
	@GetMapping("/api/person")
	public List<Person> findAllUser(
			@RequestParam(name="username", required=false) String username,
			@RequestParam(name="password", required=false) String password
			) {
		if(username != null && password != null) {
			return (List<Person>) personRepository.findPersonByCredentials(username, password);
		} 	else if(username != null) {
			return (List<Person>) personRepository.findPersonByUsername(username);
		}
			return (List<Person>) personRepository.findAll();
	}
	
	@PutMapping("/api/person/{personId}")
	public Person updatePerson(@PathVariable("personId") int id, @RequestBody Person newPerson) {
		
		Optional<Person> optional = personRepository.findById(id);
		if(optional.isPresent()) {
			Person person = optional.get();
			if(newPerson.getFirstName() != null) {
				person.setFirstName(newPerson.getFirstName());
			}
			if(newPerson.getLastName() != null) {
				person.setLastName(newPerson.getLastName());
			}
			if(newPerson.getUserName() != null) {
				person.setUserName(newPerson.getUserName());
			}
			if(newPerson.getPassword() != null) {
				person.setPassword(newPerson.getPassword());
			}
			if(newPerson.getDob() != null) {
				person.setDob(newPerson.getDob());
			}
			return personRepository.save(person);
			
		}
		return null;
	}
	
	@DeleteMapping("/api/person/{personId}")
	public void deletePerson(@PathVariable("personId") int id) {
		personRepository.deleteById(id);
	}
	
	@PutMapping("/api/person/{personId}/personAddresses/{addressId}")
	public void personAddresses(
			@PathVariable("personId") int personId,
			@PathVariable("addressId") int addressId) {
		Optional<Person> operson = personRepository.findById(personId);
		Optional<Address> oaddress   = addressRepository.findById(addressId);
		if(operson.isPresent() && oaddress.isPresent()) {
			Person person = operson.get();
			Address address = oaddress.get();
			address.setPerson(person);
			addressRepository.save(address);
			
			person.addresses(address);
			personRepository.save(person);
		}
	}
	
	@GetMapping("/api/person/{addressId}/addressesAdded")
	public Iterable<Address> findAddressesAdded(
			@PathVariable("personId") int personId) {
		Optional<Person> operson = personRepository.findById(personId);
		return operson.get().getAddresses();
	}
	
	@PutMapping("/api/person/{personId}/personContacts/{contactId}")
	public void personContacts(
			@PathVariable("personId") int personId,
			@PathVariable("contactId") int contactId) {
		Optional<Person> operson = personRepository.findById(personId);
		Optional<Contact> ocontact   = contactRepository.findById(contactId);
		if(operson.isPresent() && ocontact.isPresent()) {
			Person person = operson.get();
			Contact contact = ocontact.get();
			contact.setPerson(person);
			contactRepository.save(contact);
			
			person.contacts(contact);
			personRepository.save(person);
		}
	}
	
	@GetMapping("/api/person/{personId}/contactsAdded")
	public Iterable<Contact> findContactsAdded(
			@PathVariable("personId") int personId) {
		Optional<Person> operson = personRepository.findById(personId);
		return operson.get().getContacts();
	}
}
