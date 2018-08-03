package edu.northeastern.cs5200.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Booking;
import edu.northeastern.cs5200.repositories.BookingRepository;

@RestController
public class BookingService {

	@Autowired
	BookingRepository bookingRepository;

	@GetMapping("/api/booking")
	public List<Booking> findAllBooking(){
		return (List<Booking>) bookingRepository.findAll();
	}
	
	@GetMapping("/api/booking/{bookingId}")
	public Optional<Booking> findBookingById(@PathVariable("bookingId") int id) {
		return bookingRepository.findById(id);
	}
	
	@DeleteMapping("/api/booking/{bookingId}")
	public void deleteBooking(@PathVariable("bookingId") int id) {
		bookingRepository.deleteById(id);
	}

}
