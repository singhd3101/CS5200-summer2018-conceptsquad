package edu.northeastern.cs5200.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Contact {

	@Id
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	private long phone;
	
	@OneToOne
	@JsonIgnore
	private Person person;
	
	
	public Contact() {}
	
	public Contact(int id, long phone, Person person) {
		super();
		this.id = id;
		this.phone = phone;
		this.person = person;
	}
	
	@Override
	public String toString() {
		return "Contact [id=" + id + ", phone=" + phone +", person=" + person + "]";
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	
}
