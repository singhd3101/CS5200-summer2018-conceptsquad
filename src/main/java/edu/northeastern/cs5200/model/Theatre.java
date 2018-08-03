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
	
	@ManyToMany(mappedBy="hostingTheatres", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Movie> movieshosted;

}
