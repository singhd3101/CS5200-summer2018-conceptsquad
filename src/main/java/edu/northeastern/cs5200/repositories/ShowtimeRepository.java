package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Showtime;

public interface ShowtimeRepository extends CrudRepository<Showtime, String>{

}
