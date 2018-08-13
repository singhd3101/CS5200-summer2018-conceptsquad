package edu.northeastern.cs5200.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Payment {
	
	@Id
	@Column(name="ID")
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	
	private float amount;
	private String status;
	private Date payDate;
	
	@OneToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "booking_id", nullable = false)
	private Booking booking;
	
	public Payment() {}
	
	public Date getPayDate() {
		return payDate;
	}

	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
}
