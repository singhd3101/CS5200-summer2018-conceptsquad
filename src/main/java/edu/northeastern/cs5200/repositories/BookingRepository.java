package edu.northeastern.cs5200.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer>{

	@Query(value="select * from booking where dtype='MovieBooking' and customer_id=:id", nativeQuery=true)
	List<Booking> findAllMovieBooking(@Param("id") int id);
	
	@Query(value="select * from booking where dtype='EventBooking' and customer_id=:id", nativeQuery=true)
	List<Booking> findAllEventBooking(@Param("id") int id);

}

