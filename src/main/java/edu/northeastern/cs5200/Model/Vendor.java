package edu.northeastern.cs5200.Model;

import java.sql.Date;

public class Vendor extends Person{

	private String type;

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
