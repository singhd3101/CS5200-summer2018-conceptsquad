/**
 * Booking table struc - id,no of tickets, dat of event/movie, total cost, historicalbooking, customerid, 
 * extended by movie booking and event booking with fields - movie/event id
 */
package edu.northeastern.cs5200.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Booking {

	@Id
	@Column(name="ID")
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	
	private int noOfTickets;
	private Date date;
	private float totalCost;
	
	@OneToOne
	@JoinColumn(name = "hist_id")
    private Booking historicalBooking;
	
	@OneToOne(mappedBy="historicalBooking")
    private Booking currentBooking;
	
	@ManyToOne
	@JsonIgnore
	private Customer customer;
	
	

	public Booking(int noOfTickets, Date date, float totalCost, Booking historicalBooking, Customer customer) {
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

	public Booking getHistoricalBooking() {
		return historicalBooking;
	}

	public void setHistoricalBooking(Booking historicalBooking) {
		this.historicalBooking = historicalBooking;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}