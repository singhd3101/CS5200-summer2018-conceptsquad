package edu.northeastern.cs5200.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.dao.EventDao;
import edu.northeastern.cs5200.model.Event;
import edu.northeastern.cs5200.model.Person;

@RestController
@CrossOrigin(origins = "*")
public class PersonService {
	
	@RequestMapping("/api/person")
	public List<Person> findAllPersons(
            @RequestParam(name="username",required=false) String username,
            @RequestParam(name="password",required=false) String password) {
		Person person = new Person(1, "Alice", "Wonder", "alice", "alice", null);
        List<Person> list = new ArrayList<Person>();
        list.add(person);
        return list;
    }
	
	/*@RequestMapping("/api/person")
	public List<Person> findAllPerson() {
		PersonDao dao = PersonDao.getInstance();
		return dao.findAllPerson();
	}
	
	@RequestMapping(value="/api/person/{personId}")
	public Event findPersonById(@PathVariable(name="personId") int personId) {
		EventDao dao = EventDao.getInstance();
		return dao.findEventById(eventId);
	}
	
	@RequestMapping(value="/api/event/name/{eventName}")
	public List<Event> findEventByName(@PathVariable(name="eventName") String eventName) {
		EventDao dao = EventDao.getInstance();
		return dao.findEventByName(eventName);
	}
	
	@RequestMapping(value="/api/event/{vendorId}", method=RequestMethod.POST)
	public int createEvent(@RequestBody Event event, @PathVariable(name="vendorId") int vendorId) {
		EventDao dao = EventDao.getInstance();
		return dao.createEvent(vendorId,event);
	}
	
	@RequestMapping(value="/api/event/{eventId}", method=RequestMethod.PUT)
	public int updateEvent(@PathVariable(name="eventId") int eventId, @RequestBody Event event) {
		EventDao dao = EventDao.getInstance();
		return dao.updateEvent(eventId, event);
	}
	
	@RequestMapping(value="/api/event/{eventId}", method=RequestMethod.DELETE)
	public int deleteEvent(@PathVariable(name="eventId") int eventId) {
		EventDao dao = EventDao.getInstance();
		return dao.deleteEvent(eventId);
	}*/
}

