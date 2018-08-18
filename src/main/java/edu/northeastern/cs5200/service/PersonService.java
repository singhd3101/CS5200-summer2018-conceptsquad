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
			System.out.println("in person service");
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
	
	@PutMapping("/api/person/{personId}/personAddresses")
	public void personAddresses(@PathVariable("personId") int personId, @RequestBody Address newAddress) {
		Optional<Person> operson = personRepository.findById(personId);
		if(operson.isPresent()) {
			Person person = operson.get();
			Optional<Address> oaddress = addressRepository.findByPersonId(personId);
			if(oaddress.isPresent()) {
				Address address = oaddress.get();
				if(newAddress.getStreet1() != null) {
					address.setStreet1(newAddress.getStreet1());
				}
				if(newAddress.getStreet2() != null) {
					address.setStreet2(newAddress.getStreet2());
				}
				if(newAddress.getCity() != null) {
					address.setCity(newAddress.getCity());
				}
				if(newAddress.getState() != null) {
					address.setState(newAddress.getState());
				}
				if(newAddress.getZip() != 0) {
					address.setZip(newAddress.getZip());
				}
				addressRepository.save(address);
			}
		}
	}
	
	@PutMapping("/api/person/{personId}/personContacts")
	public void personContacts(@PathVariable("personId") int personId, @RequestBody Contact newContact) {
		Optional<Person> operson = personRepository.findById(personId);
		if(operson.isPresent()) {
			Person person = operson.get();
			Optional<Contact> ocontact = contactRepository.findByPersonId(personId);
			if (ocontact.isPresent()) {
				Contact contact = ocontact.get();
				if(newContact.getPhone() != 0) {
					contact.setPhone(newContact.getPhone());
				}
				contactRepository.save(contact);
			}
		}
	}
	
	@GetMapping("/api/person/{personId}/contactsAdded")
	public Contact findContactsAdded(@PathVariable("personId") int personId) {
		Optional<Person> operson = personRepository.findById(personId);
		if(operson.isPresent()) {
			return operson.get().getContacts();
		}
		return null;
	}
}
