package edu.northeastern.cs5200.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Seats {

	@Id
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	private String seatNUmber;
	@ManyToOne
	@JsonIgnore
	private MovieBooking mbooking;
	
	@ManyToOne
	@JsonIgnore
	private Showtime showtime;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSeatNUmber() {
		return seatNUmber;
	}
	public void setSeatNUmber(String seatNUmber) {
		this.seatNUmber = seatNUmber;
	}
	public MovieBooking getMbooking() {
		return mbooking;
	}
	public void setMbooking(MovieBooking mbooking) {
		this.mbooking = mbooking;
	}
	public Showtime getShowtime() {
		return showtime;
	}
	public void setShowtime(Showtime showtime) {
		this.showtime = showtime;
	}

	
}
