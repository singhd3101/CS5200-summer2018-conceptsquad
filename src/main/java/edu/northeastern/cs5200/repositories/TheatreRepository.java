package edu.northeastern.cs5200.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Theatre;

public interface TheatreRepository extends CrudRepository<Theatre, Integer>{

	@Query("SELECT t FROM Theatre t WHERE t.showtimeId = :id")
	public Optional<Theatre> findByShowtimeId(int id);

}
