package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Theatre {
	
	@Id
	private int id;
	
	private String name;
	

	@ManyToMany(mappedBy="hostingTheatres", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Movie> movieshosted = new ArrayList<Movie>();

	public void hostMovie(Movie movie) {
		this.movieshosted.add(movie);
		if(!movie.getHostingTheatres().contains(this)) {
			movie.getHostingTheatres().add(this);
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

	public List<Movie> getMovieshosted() {
		return movieshosted;
	}

	public void setMovieshosted(List<Movie> movieshosted) {
		this.movieshosted = movieshosted;
	}
	
	

}
