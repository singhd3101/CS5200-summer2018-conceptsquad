package edu.northeastern.cs5200.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Event {

	@Id
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String type;
	private String description;
	private String venue;
	private int capacity;
	private double price;
	
	@ManyToOne
	@JsonIgnore
	private Vendor vendor;
	private Date eventDate;
	
	@OneToMany(mappedBy="event", cascade=CascadeType.ALL)
	private List<EventBooking> eventsBooked = new ArrayList<EventBooking>();
	
	public Event() {
		super();
	}
	
	@Override
	public String toString() {
		return "Event [id=" + id + ", name=" + name + ", type=" + type + ", description=" + description + ", venue="
				+ venue + ", capacity=" + capacity + ", price=" + price + ", vendor=" + vendor + ", eventDate="
				+ eventDate + "]";
	}
	
	public Event(int id, String name, String type, String description, String venue, int capacity, double price,
			Vendor vendor, Date eventDate) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.venue = venue;
		this.capacity = capacity;
		this.price = price;
		this.vendor = vendor;
		this.eventDate = eventDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getEventDate() {
		return eventDate;
	}

	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Vendor getVendor() {
		return vendor;
	}
	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public List<EventBooking> getEventsBooked() {
		return eventsBooked;
	}

	public void setEventsBooked(List<EventBooking> eventsBooked) {
		this.eventsBooked = eventsBooked;
	}
	
	
}
