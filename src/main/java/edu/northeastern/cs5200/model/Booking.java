/**
 * Booking table struc - id,no of tickets, dat of event/movie, total cost, historicalbooking, customerid, 
 * extended by movie booking and event booking with fields - movie/event id
 */
package edu.northeastern.cs5200.model;

import java.util.Date;
import java.util.List;

public class Booking {
	
	private int id;
	private int noOfTickets;
	private Date date;
	private float totalCost;
	private int historicalBooking = 0;
	private Customer customer;
	
	//manyToOne with customer
	private List<Customer> customerList;
	
	public Booking(int noOfTickets, Date date, float totalCost, int historicalBooking, Customer customer) {
		this.noOfTickets = noOfTickets;
		this.date = date;
		this.totalCost = totalCost;
		this.historicalBooking = historicalBooking;
		this.customer = customer;
	}
	
	@Override
	public String toString() {
		return "id: " + id +
				"noOfTickets: "+ noOfTickets +
				"date: " + date + 
				"totalCost: " + totalCost +
				"historicalBooking: " + historicalBooking + 
				"customer: " + customer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNoOfTickets() {
		return noOfTickets;
	}

	public void setNoOfTickets(int noOfTickets) {
		this.noOfTickets = noOfTickets;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public float getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(float totalCost) {
		this.totalCost = totalCost;
	}

	public int getHistoricalBooking() {
		return historicalBooking;
	}

	public void setHistoricalBooking(int historicalBooking) {
		this.historicalBooking = historicalBooking;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Customer> getCustomerList() {
		return customerList;
	}

	public void setCustomerList(List<Customer> customerList) {
		this.customerList = customerList;
	}
	
}
