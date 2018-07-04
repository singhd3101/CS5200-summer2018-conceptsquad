package edu.northeastern.cs5200.Model;


public class Contact {

	private int id;
	private boolean primary;
	private int phone;
	private String email;
	private Person person;
	
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Contact(int id, boolean primary, int phone, String email, Person person) {
		super();
		this.id = id;
		this.primary = primary;
		this.phone = phone;
		this.email = email;
		this.person = person;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isPrimary() {
		return primary;
	}
	public void setPrimary(boolean primary) {
		this.primary = primary;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	
	
}
