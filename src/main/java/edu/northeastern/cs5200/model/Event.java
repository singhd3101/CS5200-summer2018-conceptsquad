package edu.northeastern.cs5200.model;

public class Event {

	private String name;
	private String type;
	private String description;
	private String venue;
	private int capacity;
	private double price;
	private Vendor vendor;
	
	public Event() {
		super();
	}
	
	@Override
	public String toString() {
		return "Name: " + name +
				" Type: " + type +
				" Description: " + description +
				" Venue: " + venue + 
				" Capacity: " + capacity +
				" Price: " + price ;
	}
	
	public Event(String name, String type, String description, String venue, int capacity, double price,
			Vendor vendor) {
		super();
		this.name = name;
		this.type = type;
		this.description = description;
		this.venue = venue;
		this.capacity = capacity;
		this.price = price;
		this.vendor = vendor;
	}
	
	public Event(String name, String type, String description, String venue, int capacity, double price) {
		this.name = name;
		this.type = type;
		this.description = description;
		this.venue = venue;
		this.capacity = capacity;
		this.price = price;
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
	
	
}
