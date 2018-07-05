package edu.northeastern.cs5200.demo;

import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.northeastern.cs5200.dao.EventDao;
import edu.northeastern.cs5200.model.Event;

@SpringBootApplication
public class Cs5200Summer2018ConceptsquadApplication {

	public static void main(String[] args) throws NamingException, SQLException {
		SpringApplication.run(Cs5200Summer2018ConceptsquadApplication.class, args);
		
		EventDao dao = EventDao.getInstance();
		
		//delete event by id
		
		System.out.println(dao.deleteEvent(5));
	
		//create event
		
		/*Event event = new Event("Lets Canoe", "Canoeing", "River Canoeing", "Charles Esplanade", 45000, 200);
		System.out.println(dao.createEvent(2, event));*/
		
		//find all events
		
		List<Event> list = dao.findAllEvents();
		
		for(Event e : list) {
			System.out.println(e);
		}
		
		//find event by id
		
		System.out.println(dao.findEventById(1));
		
		
	}
}
