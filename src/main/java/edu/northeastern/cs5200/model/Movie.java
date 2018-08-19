package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Movie {

	@Id
	private int id;

	private String name;

	private float rating;

	private float duration;

	@ManyToMany
	@JoinTable(name="Movie2Theatre", 
	joinColumns=@JoinColumn(name="MOVIE_ID", referencedColumnName="ID"),
	inverseJoinColumns=@JoinColumn(name="THEATRE_ID", referencedColumnName="ID"))
	@JsonIgnore
	private List<Theatre> hostingTheatres = new ArrayList<Theatre>();

	public void addTheatre(Theatre theatre) {
		this.hostingTheatres.add(theatre);
		if(!theatre.getMovieshosted().contains(this)) {
			theatre.getMovieshosted().add(this);
		}
	}	
	
	public List<Showtime> getAvailableShowtimes() {
		return availableShowtimes;
	}

	public void setAvailableShowtimes(List<Showtime> availableShowtimes) {
		this.availableShowtimes = availableShowtimes;
	}

	@OneToMany(mappedBy="movie", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<MovieBooking> moviesBooked = new ArrayList<MovieBooking>();

	@ManyToMany(mappedBy="availableMovies", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Showtime> availableShowtimes;
	
	public void addShowtimes(Showtime showtime) {
		this.availableShowtimes.add(showtime);
		if(!showtime.getAvailableMovies().contains(this)) {
			showtime.getAvailableMovies().add(this);
		}
	}	
	
	public void bookedMovie(MovieBooking movieBooking) {
		this.moviesBooked.add(movieBooking);
		if(movieBooking.getMovie() != this) {
			movieBooking.setMovie(this);
		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public float getDuration() {
		return duration;
	}

	public void setDuration(float duration) {
		this.duration = duration;
	}

	public List<Theatre> getTheatreId() {
		return hostingTheatres;
	}

	public void setTheatreId(List<Theatre> hostingTheatres) {
		this.hostingTheatres = hostingTheatres;
	}

	public List<Theatre> getHostingTheatres() {
		return hostingTheatres;
	}

	public void setHostingTheatres(List<Theatre> hostingTheatres) {
		this.hostingTheatres = hostingTheatres;
	}

	public List<MovieBooking> getMoviesBooked() {
		return moviesBooked;
	}

	public void setMoviesBooked(List<MovieBooking> moviesBooked) {
		this.moviesBooked = moviesBooked;
	}	

}
