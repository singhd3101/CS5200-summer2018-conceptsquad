package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer>{

}

