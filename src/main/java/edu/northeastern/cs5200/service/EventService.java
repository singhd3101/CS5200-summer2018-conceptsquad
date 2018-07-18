package edu.northeastern.cs5200.service;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.model.Event;
import edu.northeastern.cs5200.repositories.EventDao;

@RestController
@CrossOrigin(origins = "*")
public class EventService {
	
	@RequestMapping("/api/event")
	public List<Event> findAllEvents() {
		EventDao dao = EventDao.getInstance();
		return dao.findAllEvents();
	}
	
	@RequestMapping(value="/api/event/{eventId}")
	public Event findEventById(@PathVariable(name="eventId") int eventId) {
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
	}
}

