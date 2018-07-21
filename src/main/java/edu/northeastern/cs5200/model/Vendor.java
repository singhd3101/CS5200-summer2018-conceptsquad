package edu.northeastern.cs5200.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;


@Entity
public class Vendor extends Person{

	private String type;
	@OneToMany(mappedBy="vendor")
	private List<Event> eventsAdded;
	
	public void eventsAdded(Event event) {
		this.eventsAdded.add(event);
		if(event.getVendor() != this) {
			event.setVendor(this);
		}
	}
	@Override
	public String toString() {
		return "Vendor [type=" + type + ", eventsAdded=" + eventsAdded + "]";
	}
	public List<Event> getEventsAdded() {
		return eventsAdded;
	}

	public void setEventsAdded(List<Event> eventsAdded) {
		this.eventsAdded = eventsAdded;
	}

	public Vendor(int id, String firstName, String lastName, String userName, String password, Date dob) {
		super(id, firstName, lastName, userName, password, dob);
		// TODO Auto-generated constructor stub
	}

	public Vendor(int id, String firstName, String lastName, String userName, String password, Date dob, String type) {
		super(id, firstName, lastName, userName, password, dob);
		this.type = type;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}
