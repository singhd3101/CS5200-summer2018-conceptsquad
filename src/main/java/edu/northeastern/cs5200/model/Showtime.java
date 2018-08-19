package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Showtime {

	@Id
	private String id;
	
	@ManyToMany
	@JoinTable(name="Showtime2Movie", 
	joinColumns=@JoinColumn(name="SHOWTIME_ID", referencedColumnName="ID"),
	inverseJoinColumns=@JoinColumn(name="MOVIE_ID", referencedColumnName="ID"))
	@JsonIgnore
	private List<Movie> availableMovies = new ArrayList<Movie>();
	
	public void addMovie(Movie movie) {
		this.availableMovies.add(movie);
		if(!movie.getAvailableShowtimes().contains(this)) {
			movie.getAvailableShowtimes().add(this);
		}
	}	
	private Date startTime;


	@OneToMany(mappedBy="showtime", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Seats> seatsBooked = new ArrayList<Seats>();
	
	public void bookedSeats(Seats seatBooking) {
		this.seatsBooked.add(seatBooking);
		if(seatBooking.getShowtime() != this) {
			seatBooking.setShowtime(this);
		}
	}
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public List<Movie> getAvailableMovies() {
		return availableMovies;
	}


	public void setAvailableMovies(List<Movie> availableMovies) {
		this.availableMovies = availableMovies;
	}


	public Date getStartTime() {
		return startTime;
	}


	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
}
