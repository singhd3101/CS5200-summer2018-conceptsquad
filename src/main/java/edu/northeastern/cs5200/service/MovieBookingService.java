package edu.northeastern.cs5200.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.MovieBooking;
import edu.northeastern.cs5200.repositories.MovieBookingRepository;

@RestController
public class MovieBookingService {
	
	@Autowired
	MovieBookingRepository movieBookingRepository;
	
	@GetMapping("/api/moviebooking")
	public List<MovieBooking> findAllBooking(){
		return (List<MovieBooking>) movieBookingRepository.findAll();
	}

}
