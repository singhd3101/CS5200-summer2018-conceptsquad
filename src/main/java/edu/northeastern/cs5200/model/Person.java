package edu.northeastern.cs5200.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Person {

	@Id
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String FirstName;
	private String LastName;
	private String UserName;
	private String Password;
	private Date Dob;
	private int access;
	
	/*@OneToMany(mappedBy="person")
	private List<Address> addresses;
	
	@OneToMany(mappedBy="person")
	private List<Contact> contacts;
	*/
	
	@OneToOne(mappedBy="person")
	private Address addresses;
	
	@OneToOne(mappedBy="person")
	private Contact contacts;
	
	@Override
	public String toString() {
		return "Person [id=" + id + ", FirstName=" + FirstName + ", LastName=" + LastName + ", UserName=" + UserName
				+ ", Password=" + Password + ", Dob=" + Dob + ", addresses=" + addresses + ", contacts=" + contacts
				+ ", access= " + access + "]";
	}
	
	
	/*public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
	
	public void contacts(Contact contact) {
		this.contacts.add(contact);
		if(contact.getPerson() != this) {
			contact.setPerson(this);
		}
	}

	public void addresses(Address address) {
		this.addresses.add(address);
		if(address.getPerson() != this) {
			address.setPerson(this);
		}
	}

	public List<Address> getAddresses() {
		return addresses;
	}
	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}*/
	
	
	
	public int getId() {
		return id;
	}
	public Address getAddresses() {
		return addresses;
	}


	public void setAddresses(Address addresses) {
		this.addresses = addresses;
	}


	public Contact getContacts() {
		return contacts;
	}


	public void setContacts(Contact contacts) {
		this.contacts = contacts;
	}


	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Date getDob() {
		return Dob;
	}
	public void setDob(Date dob) {
		Dob = dob;
	}

	public int getAccess() {
		return access;
	}

	public void setAccess(int access) {
		this.access = access;
	}
	
	
}
