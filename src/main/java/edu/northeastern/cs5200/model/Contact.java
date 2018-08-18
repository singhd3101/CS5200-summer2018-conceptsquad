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
	//private String email;
	private long phone;
//	private Boolean primaryContact;
/*	@ManyToOne
	@JsonIgnore
	private Person person;
*/	
	@OneToOne
	@JsonIgnore
	private Person person;
	
	
	public Contact() {}
	
	public Contact(int id, 
			//String email, 
			long phone, 
			//Boolean primaryContact, 
			Person person) {
		super();
		this.id = id;
		//this.email = email;
		this.phone = phone;
	//	this.primaryContact = primaryContact;
		this.person = person;
	}
	
	@Override
	public String toString() {
		return "Contact [id=" + id + 
				//", email=" + email + 
				", phone=" + phone + 
				//", primaryContact=" + primaryContact + 
				", person=" + person + "]";
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	/*public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}*/
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
	/*public Boolean getPrimaryContact() {
		return primaryContact;
	}
	public void setPrimaryContact(Boolean primaryContact) {
		this.primaryContact = primaryContact;
	}*/
	
}
