package edu.northeastern.cs5200.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MovieBooking extends Booking{
	
	@ManyToOne
	@JsonIgnore
	private Movie movie;

	public MovieBooking(int noOfTickets, Date date, float totalCost,
			Booking historicalBooking, Customer customer) {
		super(noOfTickets, date, totalCost, historicalBooking, customer);
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	
	

}
