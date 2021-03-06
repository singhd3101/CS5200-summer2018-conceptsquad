package edu.northeastern.cs5200.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	private String paymentId;
	
	@OneToOne
	@JoinColumn(name = "hist_id")
    private Booking historicalBooking;
	
	@OneToOne(mappedBy="historicalBooking")
	@JsonIgnore
    private Booking currentBooking;
	
	@ManyToOne
	@JsonIgnore
	private Customer customer;
	
	private String status = "Active";
	
	
	public Booking() {}
	
	public Booking(int noOfTickets, Date date, float totalCost, Booking historicalBooking, String paymentId, Customer customer) {
		this.noOfTickets = noOfTickets;
		this.date = date;
		this.totalCost = totalCost;
		this.historicalBooking = historicalBooking;
		this.customer = customer;
		this.status = "Active";
		this.paymentId = paymentId;
	}

	@Override
	public String toString() {
		return "id: " + id +
				"noOfTickets: "+ noOfTickets +
				"date: " + date + 
				"totalCost: " + totalCost +
				"historicalBooking: " + historicalBooking + 
				"customer: " + customer +
				"status: " + status +
				"paymentID" + paymentId;
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

	public Booking getCurrentBooking() {
		return currentBooking;
	}

	public void setCurrentBooking(Booking currentBooking) {
		this.currentBooking = currentBooking;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	
	

}
