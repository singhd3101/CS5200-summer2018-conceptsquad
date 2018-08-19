package edu.northeastern.cs5200.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Movie;
import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.MovieRepository;
import edu.northeastern.cs5200.repositories.TheatreRepository;

@RestController
public class MovieService {
	
	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	TheatreRepository theatreRepository;
	
	@GetMapping("/api/movie")
	public List<Movie> findAllMovies() {
		return (List<Movie>) movieRepository.findAll();
	}
	
	@GetMapping("/api/movie/{movieId}")
	public Movie findMovieById(@PathVariable("movieId") int id) {
		Optional<Movie> optional = movieRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@PostMapping("api/movie")
	public Movie createMovie(@RequestBody Movie movie) {
		return movieRepository.save(movie);
	}


	@PostMapping("api/movie/theatre/{theatreId}")
	public Movie createMovieInTheatre(@RequestBody Movie movie, 
		@PathVariable("theatreId") int theatreId){
		Optional<Theatre> toptional = theatreRepository.findById(theatreId);

		Optional<Movie> optional = movieRepository.findById(movie.getId());
		if(!optional.isPresent()) {
			
			movie.addTheatre(toptional.get());
			toptional.get().hostMovie(movie);
			theatreRepository.save(toptional.get());
			return movieRepository.save(movie);
			}
			
		
		return null;
		
	}
	
	@PutMapping("/api/movie/{movieId}")
	public Movie updateMovie(@PathVariable("movieId") int id, @RequestBody Movie newMovie) {
		Optional<Movie> optional = movieRepository.findById(id);
		if(optional.isPresent()) {
			Movie movie = optional.get();
			if(newMovie.getName() != null) {
				movie.setName(newMovie.getName());
			}
			if(!newMovie.getHostingTheatres().isEmpty()) {
				movie.setHostingTheatres(newMovie.getHostingTheatres());
			}
			if(!newMovie.getMoviesBooked().isEmpty()) {
				movie.setMoviesBooked(newMovie.getMoviesBooked());
			}
			return movieRepository.save(movie);
		}
		return null;
	}
	
	@DeleteMapping("/api/movie/{movieId}")
	public void deleteMovie(@PathVariable("movieId") int id) {
		movieRepository.deleteById(id);
	}

}
