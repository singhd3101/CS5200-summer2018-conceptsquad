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

import edu.northeastern.cs5200.model.Contact;
import edu.northeastern.cs5200.repositories.BookingRepository;
import edu.northeastern.cs5200.repositories.ContactRepository;

@RestController
public class ContactService {

	@Autowired
	ContactRepository contactRepository;
	
	@Autowired
	BookingRepository bookingRepository;
	
	@PostMapping("/api/contact")
	public Contact createContact(@RequestBody Contact contact) {
		return contactRepository.save(contact);
	}
	
	@GetMapping("/api/contact/{contactId}")
	public Optional<Contact> findContactById(@PathVariable("contactId") int id) {
		return contactRepository.findById(id);
	}
	
	@GetMapping("/api/contact/person/{perosnId}")
	public Optional<Contact> findContactByPersonId(@PathVariable("perosnId") int id) {
		return contactRepository.findByPersonId(id);
	}
	
	@GetMapping("/api/contact")
	public List<Contact> findAllContact(){
			return (List<Contact>) contactRepository.findAll();
	}
	
	@PutMapping("/api/contact/{contactId}")
	public Contact updateContact(@PathVariable("contactId") int id, @RequestBody Contact newContact) {
		
		Optional<Contact> optional = contactRepository.findById(id);
		if(optional.isPresent()) {
			Contact contact = optional.get();
			/*if(newContact.getPrimaryContact() != null) {
				contact.setPrimaryContact(newContact.getPrimaryContact());
			}*/
			/*if(newContact.getEmail() != null) {
				contact.setEmail(newContact.getEmail());
			}*/
			if(newContact.getPerson() != null) {
				contact.setPerson(newContact.getPerson());
			}
			if(newContact.getPhone() != 0) {
				contact.setPhone(newContact.getPhone());
			}
			
			
			return contactRepository.save(contact);
			
		}
		return null;
	}
	
	@DeleteMapping("/api/contact/{contactId}")
	public void deleteContact(@PathVariable("contactId") int id) {
		contactRepository.deleteById(id);
	}
}
