package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Event;


public interface EventRepository  extends CrudRepository<Event, Integer>{

	@Query(value="select e.* from booking b, event e where b.id = :bookid and b.event_id = e.id", nativeQuery=true)
	Event findEventByBookingId(@Param("bookid")int id);

}