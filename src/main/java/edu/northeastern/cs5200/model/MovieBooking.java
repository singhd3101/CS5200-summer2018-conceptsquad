package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MovieBooking extends Booking{
	
	@ManyToOne
	@JsonIgnore
	private Movie movie;

	@OneToMany(mappedBy="mbooking", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Seats> bookingsMade = new ArrayList<Seats>();
	
	public void bookedSeats(Seats seatBooking) {
		this.bookingsMade.add(seatBooking);
		if(((Seats) bookingsMade).getMbooking() != this) {
			((Seats) bookingsMade).setMbooking(this);
		}
	}
	
	public MovieBooking() {}
	
	public MovieBooking(int noOfTickets, Date date, float totalCost,
			Booking historicalBooking, String paymentId, Customer customer) {
		super(noOfTickets, date, totalCost, historicalBooking, paymentId, customer);
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
		if(!movie.getMoviesBooked().contains(this)) {
			movie.getMoviesBooked().add(this);
		}
	}
}