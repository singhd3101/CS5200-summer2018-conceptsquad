package edu.northeastern.cs5200.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Movie;
import edu.northeastern.cs5200.model.MovieBooking;
import edu.northeastern.cs5200.model.Seats;
import edu.northeastern.cs5200.model.Showtime;
import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.MovieBookingRepository;
import edu.northeastern.cs5200.repositories.SeatsRepository;
import edu.northeastern.cs5200.repositories.ShowtimeRepository;

@RestController
public class SeatsService {

	@Autowired
	SeatsRepository seatsRepository;
	
	@Autowired
	MovieBookingRepository movieBookingRepository;
	
	@Autowired
	ShowtimeRepository showtimeRepository;
	
	@GetMapping("/api/seats")
	public List<Seats> findAllSeats() {
		return (List<Seats>) seatsRepository.findAll();
	}
	
	@PostMapping("api/seats")
	public Seats createSeats(@RequestBody Seats seat) {
		return seatsRepository.save(seat);
	}
	
	@PostMapping("api/seats/{showtimeId}/booking/{bookingId}")
	public Seats createSeatsForShowtime(@RequestBody Seats seat,
			@PathVariable("showtimeId") String showtimeId, @PathVariable("bookingId") int bookingId) {
		Optional<MovieBooking> moptional = movieBookingRepository.findById(bookingId);

		Optional<Showtime> soptional = showtimeRepository.findById(showtimeId);
		
			seat.setMbooking(moptional.get());
			seat.setShowtime(soptional.get());
			return seatsRepository.save(seat);

		
	}
}

