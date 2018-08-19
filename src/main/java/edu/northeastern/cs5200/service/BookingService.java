package edu.northeastern.cs5200.service;

import java.util.Calendar;
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

import edu.northeastern.cs5200.model.Booking;
import edu.northeastern.cs5200.model.Customer;
import edu.northeastern.cs5200.model.Event;
import edu.northeastern.cs5200.model.EventBooking;
import edu.northeastern.cs5200.model.Movie;
import edu.northeastern.cs5200.model.MovieBooking;
import edu.northeastern.cs5200.model.Person;
import edu.northeastern.cs5200.model.Showtime;
import edu.northeastern.cs5200.repositories.BookingRepository;
import edu.northeastern.cs5200.repositories.CustomerRepository;
import edu.northeastern.cs5200.repositories.EventBookingRepository;
import edu.northeastern.cs5200.repositories.EventRepository;
import edu.northeastern.cs5200.repositories.MovieBookingRepository;
import edu.northeastern.cs5200.repositories.MovieRepository;
import edu.northeastern.cs5200.repositories.PersonRepository;

@RestController
public class BookingService {

	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	EventBookingRepository eventBookingRepository;
	
	@Autowired
	MovieBookingRepository movieBookingRepository;

	@Autowired
	CustomerRepository customerRepository;
	
	@GetMapping("/api/booking")
	public List<Booking> findAllBooking(){
		return (List<Booking>) bookingRepository.findAll();
	}
	
	@GetMapping("/api/moviebooking/{custId}")
	public List<Booking> findAllMovieBookingByCustId(@PathVariable("custId") int id){
		return (List<Booking>) bookingRepository.findAllMovieBooking(id);
	}
	
	@GetMapping("/api/eventbooking/{custId}")
	public List<Booking> findAllEventBookingByCustId(@PathVariable("custId") int id){
		return bookingRepository.findAllEventBooking(id);
	}
	
	@GetMapping("/api/booking/{bookingId}")
	public Optional<Booking> findBookingById(@PathVariable("bookingId") int id) {
		return bookingRepository.findById(id);
	}
	
	@GetMapping("/api/moviebooking/{bId}/movie")
	public Movie findMovieBookingId(@PathVariable("bId") int id){
		return (Movie) movieRepository.findMovieByBookingId(id);
	}
	
	@GetMapping("/api/eventbooking/{bId}/event")
	public Event findEventByBookingId(@PathVariable("bId") int id){
		return (Event) eventRepository.findEventByBookingId(id);
	}
	
	@DeleteMapping("/api/booking/{bookingId}")
	public void deleteBooking(@PathVariable("bookingId") int id) {
		bookingRepository.deleteById(id);
	}
	
	@PostMapping("/api/moviebooking")
	public MovieBooking createMovieBooking(@RequestBody MovieBooking booking) {
		return movieBookingRepository.save(booking);
	}
	
	@PostMapping("/api/eventbooking")
	public EventBooking createEventBooking(@RequestBody EventBooking booking) {
		return eventBookingRepository.save(booking);
	}
	
	@PutMapping("/api/cancelbooking/{bookingId}")
	public void cancelBooking(@PathVariable("bookingId") int id) {
		Optional<Booking> optional = bookingRepository.findById(id);
		if(optional.isPresent()) {
			Booking booking = optional.get();
			booking.setStatus("Cancelled");
			bookingRepository.save(booking);
		}
	}
	
	@PutMapping("/api/mbooking/{bookingId}")
	public void updateMovieBooking(@PathVariable("bookingId") int id, @RequestBody MovieBooking book) {
		Optional<MovieBooking> optional = movieBookingRepository.findById(id);
		if(optional.isPresent()) {
			MovieBooking booking = optional.get();
			book.setCustomer(booking.getCustomer());
			
			Calendar cal = Calendar.getInstance(); 
			cal.setTime(book.getDate()); 
			cal.add(Calendar.DATE, 1);
			book.setDate(cal.getTime());
			book.setHistoricalBooking(booking);
			book.setMovie(booking.getMovie());
			movieBookingRepository.save(book);
			
			booking.setStatus("Cancelled");
			bookingRepository.save(booking);
		}
	}
	
	@PutMapping("/api/ebooking/{bookingId}")
	public void updateEventBooking(@PathVariable("bookingId") int id, @RequestBody EventBooking book) {
		Optional<EventBooking> optional = eventBookingRepository.findById(id);
		if(optional.isPresent()) {
			EventBooking booking = optional.get();
			book.setCustomer(booking.getCustomer());
			
			Calendar cal = Calendar.getInstance(); 
			cal.setTime(book.getDate()); 
			cal.add(Calendar.DATE, 1);
			book.setDate(cal.getTime());
			book.setHistoricalBooking(booking);
			book.setEvent(booking.getEvent());
			eventBookingRepository.save(book);
			
			booking.setStatus("Cancelled");
			bookingRepository.save(booking);
		}
	}
	
	
	@PostMapping("api/moviebooking/{movieId}/user/{username}")
	public MovieBooking createMovieBooking(@RequestBody MovieBooking movieBooking, 
		@PathVariable("movieId") int movieId, @PathVariable("username") String username){
		
		Optional<Movie> moptional = movieRepository.findById(movieId);
		movieBooking.setMovie(moptional.get());
		
		List<Customer> c =  customerRepository.findCustomerByUsername(username);
		if(c.isEmpty()) {
		
			Customer newCustomer = new Customer();
			newCustomer.setUserName(username);
			customerRepository.save(newCustomer);
			movieBooking.setCustomer(newCustomer);
			
		}
		else {
			movieBooking.setCustomer(c.get(0));
		}

		return movieBookingRepository.save(movieBooking);
	}
}
