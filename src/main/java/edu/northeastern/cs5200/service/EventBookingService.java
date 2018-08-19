package edu.northeastern.cs5200.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.EventBooking;
import edu.northeastern.cs5200.repositories.EventBookingRepository;

@RestController
public class EventBookingService {
	
	@Autowired
	EventBookingRepository eventBookingRepository;
	
	@GetMapping("/api/eventbooking")
	public List<EventBooking> findAllBooking(){
		return (List<EventBooking>) eventBookingRepository.findAll();
	}

}



