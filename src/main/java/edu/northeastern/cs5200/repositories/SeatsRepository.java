package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.northeastern.cs5200.model.Seats;

public interface SeatsRepository extends JpaRepository<Seats, Integer>{

}
