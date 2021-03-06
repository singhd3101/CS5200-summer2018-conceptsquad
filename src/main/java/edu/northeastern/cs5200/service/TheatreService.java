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

import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.TheatreRepository;

@RestController
public class TheatreService {
	
	@Autowired
	TheatreRepository theatreRepository;
	
	@GetMapping("/api/theatre")
	public List<Theatre> findAllTheatres() {
		return (List<Theatre>) theatreRepository.findAll();
	}
	
	@GetMapping("/api/theatre/{theareId}")
	public Theatre findTheatreById(@PathVariable("theatreId") int id) {
		Optional<Theatre> optional = theatreRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
/*	@GetMapping("/api/theatre/show/{showtimeId}")
	public Theatre findTheatreByShowtimeId(@PathVariable("showtimeId") int id) {
		Optional<Theatre> optional = theatreRepository.findByShowtimeId(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}*/
	
	@GetMapping("/api/theatre/name/{theatreName}")
	public Theatre findTheatreByName(@PathVariable("theatreName") String name) {
		Optional<Theatre> optional = theatreRepository.findByName(name);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@PostMapping("api/theatre")
	public Theatre createTheatre(@RequestBody Theatre theatre) {
		Optional<Theatre> optional = theatreRepository.findById(theatre.getId());
		if(!optional.isPresent()) {
			
			return theatreRepository.save(theatre);
			}

		return null;
		
	}
	
	@DeleteMapping("/api/theatre/{theatreId}")
	public void deleteTheatre(@PathVariable("theatreId") int id) {
		theatreRepository.deleteById(id);
	}
	
	@PutMapping("/api/theatre/{theatreId}")
	public Theatre updateTheatre(@PathVariable("theatreId") int id, @RequestBody Theatre newTheatre) {
		Optional<Theatre> optional = theatreRepository.findById(id);
		if(optional.isPresent()) {
			Theatre theatre = optional.get();
			if(newTheatre.getName() != null) {
				theatre.setName(newTheatre.getName());
			}
			return theatreRepository.save(theatre);
		}
		return null;
	}

}