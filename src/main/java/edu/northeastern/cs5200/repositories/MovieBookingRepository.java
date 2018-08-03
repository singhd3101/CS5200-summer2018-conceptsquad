package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.MovieBooking;

public interface MovieBookingRepository extends CrudRepository<MovieBooking, Integer> {

}
