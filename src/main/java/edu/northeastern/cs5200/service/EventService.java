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

import edu.northeastern.cs5200.model.Event;
import edu.northeastern.cs5200.repositories.EventRepository;
import edu.northeastern.cs5200.repositories.VendorRepository;

@RestController
public class EventService {

	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	VendorRepository vendorRepository;
	
	@PostMapping("/api/event")
	public Event createEvent(@RequestBody Event event) {
		return eventRepository.save(event);
	}
	
	@GetMapping("/api/event/{eventId}")
	public Optional<Event> findEventById(@PathVariable("eventId") int id) {
		return eventRepository.findById(id);
	}
	
	@GetMapping("/api/event")
	public List<Event> findAllEvent(){
			return (List<Event>) eventRepository.findAll();
	}
	
	@PutMapping("/api/event/{eventId}")
	public Event updatePerson(@PathVariable("eventId") int id, @RequestBody Event newEvent) {
		
		Optional<Event> optional = eventRepository.findById(id);
		if(optional.isPresent()) {
			Event event = optional.get();
			if(newEvent.getCapacity() != 0) {
				event.setCapacity(newEvent.getCapacity());
			}
			if(newEvent.getDescription() != null) {
				event.setDescription(newEvent.getDescription());
			}
			if(newEvent.getEventDate()!= null) {
				event.setEventDate(newEvent.getEventDate());
			}
			if(newEvent.getName() != null) {
				event.setName(newEvent.getName());
			}
			if(newEvent.getPrice() != 0) {
				event.setPrice(newEvent.getPrice());
			}
			if(newEvent.getType() != null) {
				event.setType(newEvent.getType());
			}
			if(newEvent.getVenue() != null) {
				event.setVenue(newEvent.getVenue());
			}
			if(newEvent.getVendor() != null) {
				
				event.setVendor(newEvent.getVendor());
			}
			return eventRepository.save(event);
			
		}
		return null;
	}
	
	@DeleteMapping("/api/event/{eventId}")
	public void deleteEvent(@PathVariable("eventId") int id) {
		eventRepository.deleteById(id);
	}
}
