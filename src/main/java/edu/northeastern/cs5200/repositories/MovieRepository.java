package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Movie;

public interface MovieRepository extends CrudRepository<Movie, Integer>{

	@Query(value="select m.* from booking b, movie m where b.id = :bookid and b.movie_id = m.id", nativeQuery=true)
	Movie findMovieByBookingId(@Param("bookid")int id);

}
