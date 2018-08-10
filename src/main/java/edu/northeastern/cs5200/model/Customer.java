package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
@DiscriminatorValue("Customer")
public class Customer extends Person {

	private int booking;
	private Boolean registered;
	
	@OneToMany(mappedBy = "customer")
	private List<Booking> bookings = new ArrayList<>();
	
	public Customer(){
		super.setAccess(1);
	}
	
	public int getBooking() {
		return booking;
	}
	public void setBooking(int booking) {
		this.booking = booking;
	}
	public Boolean getRegistered() {
		return registered;
	}
	public void setRegistered(Boolean registered) {
		this.registered = registered;
	}
	public List<Booking> getBookings() {
		return bookings;
	}
	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
	
	

}
