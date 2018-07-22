package edu.northeastern.cs5200.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import edu.northeastern.cs5200.model.Event;
import edu.northeastern.cs5200.model.Vendor;
import edu.northeastern.cs5200.repositories.EventRepository;
import edu.northeastern.cs5200.repositories.VendorRepository;

@RestController
public class VendorService {

	@Autowired
	VendorRepository vendorRepository;
	
	@Autowired
	EventRepository eventRepository;
	
	@GetMapping("/api/vendor")
	public Iterable<Vendor> findAllVendor() {
		
		return vendorRepository.findAll();
	}

	@GetMapping("/api/vendor/{vendorId}/eventsAdded")
	public Iterable<Event> findEventsAdded(
			@PathVariable("vendorId") int vendorId) {
		Optional<Vendor> ovendor = vendorRepository.findById(vendorId);
		return ovendor.get().getEventsAdded();
	}
	
	
	@PutMapping("/api/vendor/{vendorId}/eventsAdded/{eventId}")
	public void eventsAdded(
			@PathVariable("vendorId") int vendorId,
			@PathVariable("eventId") int eventId) {
		Optional<Vendor> ovendor = vendorRepository.findById(vendorId);
		Optional<Event> oevent   = eventRepository.findById(eventId);
		if(ovendor.isPresent() && oevent.isPresent()) {
			Event event = oevent.get();
			Vendor vendor = ovendor.get();
			event.setVendor(vendor);
			eventRepository.save(event);
			
			vendor.eventsAdded(event);
			vendorRepository.save(vendor);
		}
	}
}
