package edu.northeastern.cs5200.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Customer;
import edu.northeastern.cs5200.model.Seats;

public interface SeatsRepository extends JpaRepository<Seats, Integer>{

	@Query("SELECT seatNumber FROM Seats seats WHERE seats.showtime.id=:s")
	public List<Seats> findSeatsByShowtime(@Param("s") String shwtime);
}
