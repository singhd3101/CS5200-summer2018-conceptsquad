package edu.northeastern.cs5200.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Theatre {
	
	@Id
	@GeneratedValue
	(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private int showtimeId;
	
	@ManyToMany(mappedBy="hostingTheatres", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Movie> movieshosted;

	public int getShowtimeId() {
		return showtimeId;
	}

	public void setShowtimeId(int showtimeId) {
		this.showtimeId = showtimeId;
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

	public List<Movie> getMovieshosted() {
		return movieshosted;
	}

	public void setMovieshosted(List<Movie> movieshosted) {
		this.movieshosted = movieshosted;
	}
	
	

}
