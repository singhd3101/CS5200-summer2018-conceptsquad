package edu.northeastern.cs5200.model;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;


@Entity
@DiscriminatorValue("Vendor")
public class Vendor extends Person{

	
	@OneToMany(mappedBy="vendor")
	private List<Event> eventsAdded;
	
	public Vendor(){
		super.setAccess(2);
	}
	
	public void eventsAdded(Event event) {
		this.eventsAdded.add(event);
		if(event.getVendor() != this) {
			event.setVendor(this);
		}
	}
	@Override
	public String toString() {
		return "Vendor [eventsAdded=" + eventsAdded + "]";
	}
	public List<Event> getEventsAdded() {
		return eventsAdded;
	}

	public void setEventsAdded(List<Event> eventsAdded) {
		this.eventsAdded = eventsAdded;
	}


	
}
