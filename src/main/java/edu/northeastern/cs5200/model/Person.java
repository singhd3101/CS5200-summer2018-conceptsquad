package edu.northeastern.cs5200.model;

import java.sql.Date;

public class Person {

	private int id;
	private String FirstName;
	private String LastName;
	private String UserName;
	private String Password;
	private Date Dob;

	public Person(int id, String firstName, String lastName, String userName, String password, Date dob) {
		super();
		this.id = id;
		FirstName = firstName;
		LastName = lastName;
		UserName = userName;
		Password = password;
		Dob = dob;
	}
	public int getId() {
		return id;
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
	
}
