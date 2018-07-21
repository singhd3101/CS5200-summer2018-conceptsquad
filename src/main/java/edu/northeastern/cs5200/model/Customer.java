package edu.northeastern.cs5200.model;

import java.sql.Date;

import javax.persistence.Entity;

@Entity
public class Customer extends Person {

	private int booking;
	private Boolean registered;
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
	
	

}
