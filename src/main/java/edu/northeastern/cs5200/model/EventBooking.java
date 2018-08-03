package edu.northeastern.cs5200.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class EventBooking extends Booking{

	@ManyToOne
	@JsonIgnore
	private Event event;
	
	public EventBooking( ) {}

	public EventBooking(int noOfTickets, Date date, float totalCost,
			Booking historicalBooking, Customer customer) {
		super(noOfTickets, date, totalCost, historicalBooking, customer);
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
		if(!event.getEventsBooked().contains(this)) {
			event.getEventsBooked().add(this);
		}
	}
}
