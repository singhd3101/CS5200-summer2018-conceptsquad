package edu.northeastern.cs5200.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Movie;
import edu.northeastern.cs5200.model.Showtime;
import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.MovieRepository;
import edu.northeastern.cs5200.repositories.ShowtimeRepository;
import edu.northeastern.cs5200.repositories.TheatreRepository;

@RestController
public class ShowtimeService {

	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	ShowtimeRepository showtimeRepository;
	
	@PostMapping("api/showtime/movie/{movieId}")
	public Showtime createShowtimeForMovie(@RequestBody Showtime showtime, 
		@PathVariable("movieId") int movieId){
		Optional<Movie> moptional = movieRepository.findById(movieId);

		Optional<Showtime> optional = showtimeRepository.findById(showtime.getId());
		if(!optional.isPresent()) {
			
			showtime.addMovie(moptional.get()); 
			moptional.get().addShowtimes(showtime);
			movieRepository.save(moptional.get());
			return showtimeRepository.save(showtime);

			}
			
		
		return null;
		
	}
}
