package edu.northeastern.cs5200.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Seats;
import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.SeatsRepository;

@RestController
public class SeatsService {

	@Autowired
	SeatsRepository seatsRepository;
	
	@GetMapping("/api/seats")
	public List<Seats> findAllSeats() {
		return (List<Seats>) seatsRepository.findAll();
	}
	
	@PostMapping("api/seats")
	public Seats createSeats(@RequestBody Seats seat) {
		return seatsRepository.save(seat);
	}
}
