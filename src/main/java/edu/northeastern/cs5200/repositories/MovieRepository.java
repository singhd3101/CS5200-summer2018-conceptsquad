package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Movie;

public interface MovieRepository extends CrudRepository<Movie, Integer>{

}
