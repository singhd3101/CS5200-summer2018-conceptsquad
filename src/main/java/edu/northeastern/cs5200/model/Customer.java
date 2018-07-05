package edu.northeastern.cs5200.model;

import java.sql.Date;

public class Customer extends Person {

	private int booking;
	private boolean registered;
	
	public Customer(int id, String firstName, String lastName, String userName, String password, Date dob) {
		super(id, firstName, lastName, userName, password, dob);
		// TODO Auto-generated constructor stub
	}
	public Customer(int id, String firstName, String lastName, String userName, String password, Date dob, int booking,
			boolean registered) {
		super(id, firstName, lastName, userName, password, dob);
		this.booking = booking;
		this.registered = registered;
	}
	public int getBooking() {
		return booking;
	}
	public void setBooking(int booking) {
		this.booking = booking;
	}
	public boolean isRegistered() {
		return registered;
	}
	public void setRegistered(boolean registered) {
		this.registered = registered;
	}
	
	
	
}
