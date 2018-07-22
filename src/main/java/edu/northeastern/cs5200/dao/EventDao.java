package edu.northeastern.cs5200.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import edu.northeastern.cs5200.model.Event;

public class EventDao {

	public static EventDao instance = null;
	private final String PASS = "password";
	
	String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	String URL = "jdbc:mysql://localhost:3306/showtime_schema";
	String USERNAME = "root";
	String PASSWORD = PASS;
	
	static final String FIND_ALL_EVENTS = "select e.id, e.name, e.vendor, e.typeOfEvent, e.charges, e.venue, e.capacity, e.description from event e";
    static final String FIND_EVENT_BY_ID = "select e.id, e.name, e.vendor, e.typeOfEvent, e.charges, e.venue, e.capacity, e.description from event e where e.id = ?";
	static final String INSERT_EVENT = "INSERT INTO event (name, vendor, typeOfEvent, charges, venue, capacity, description) VALUES (?,?,?,?,?,?,?)";
    static final String DELETE_EVENT = "delete from event where id = ?";
    static final String FIND_EVENT_BY_VENDOR = "select e.id, e.name, e.vendor, e.typeOfEvent, e.charges, e.venue, e.capacity, e.description from event e where e.vendor = ?";
	static final String FIND_EVENT_BY_NAME = "select e.id, e.name, e.vendor, e.typeOfEvent, e.charges, e.venue, e.capacity, e.description from event e where e.name like ?";
    static final String UPDATE_EVENT = "update event e set e.name = ?, e.typeOfEvent = ?, e.charges = ?, e.venue = ?, e.capacity = ?, e.description = ? where e.id = ?";
	
	public static EventDao getInstance() {
		if (instance == null) {
			instance = new EventDao();
		}
		return instance;
	}

	private EventDao() {}
	
	public List<Event> findAllEvents() {	
		List<Event> events = new ArrayList<Event>();
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet results = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = FIND_ALL_EVENTS;
			statement = connection.prepareStatement(sql);
			results = statement.executeQuery();
			while(results.next()) {
				int id = results.getInt("id");
				String name = results.getString("name");
				String vendor = results.getString("vendor");
				String typeOfEvent = results.getString("typeOfEvent");
				Double charges = results.getDouble("charges");
				String venue = results.getString("venue");
				int capacity = results.getInt("capacity");
				String description = results.getString("description");
				Event event = new Event(name, typeOfEvent, description, venue, capacity, charges);
				events.add(event);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				connection.close();
				results.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return events;
	}
	
	public Event findEventById(int eventId) {
		Event event = null;
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet results = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = FIND_EVENT_BY_ID;
			statement = connection.prepareStatement(sql);
			statement.setInt(1,eventId);
			results = statement.executeQuery();
			if(results.next()) {
				int id = results.getInt("id");
				String name = results.getString("name");
				String vendor = results.getString("vendor");
				String typeOfEvent = results.getString("typeOfEvent");
				Double charges = results.getDouble("charges");
				String venue = results.getString("venue");
				int capacity = results.getInt("capacity");
				String description = results.getString("description");
				event = new Event(name, typeOfEvent, description, venue, capacity, charges);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} 
		finally {
			try {
				connection.close();
				results.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return event;
	}

	public List<Event> findEventByName(String eventName) {
		System.out.println("%");
		List<Event> events = new ArrayList<Event>();
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet results = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = FIND_EVENT_BY_NAME;
			statement = connection.prepareStatement(sql);
			statement.setString(1,"%"+eventName+"%");
			System.out.println("statement: "+statement);
			results = statement.executeQuery();
			while(results.next()) {
				int id = results.getInt("id");
				String name = results.getString("name");
				String vendor = results.getString("vendor");
				String typeOfEvent = results.getString("typeOfEvent");
				Double charges = results.getDouble("charges");
				String venue = results.getString("venue");
				int capacity = results.getInt("capacity");
				String description = results.getString("description");
				Event event = new Event(name, typeOfEvent, description, venue, capacity, charges);
				events.add(event);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} 
		finally {
			try {
				connection.close();
				results.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return events;
	}
	
	
	
	
	
	
	
	public int createEvent(int vendorId, Event event) {
		int eventId = 0;
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet results = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = INSERT_EVENT;
			statement = connection.prepareStatement(sql);
			statement.setString(1, event.getName());
			statement.setInt(2, vendorId);
			statement.setString(3, event.getType());
			statement.setDouble(4, event.getPrice());
			statement.setString(5, event.getVenue());
			statement.setInt(6, event.getCapacity());
			statement.setString(7, event.getDescription());
			statement.executeUpdate();
			results =  statement.executeQuery("SELECT LAST_INSERT_ID()");
			if(results.next()) {
				eventId = results.getInt(1);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				connection.close();
				results.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return eventId;
	}

	

	
	
	public int deleteEvent(int eventId) {
		Connection connection = null;
		PreparedStatement statement = null;
		int rows = 0;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = DELETE_EVENT;
			statement = connection.prepareStatement(sql);
			statement.setInt(1, eventId);
			rows = statement.executeUpdate();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				connection.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return rows;
	}

	public List<Event> findEventByVendor(int vendorId) {
		List<Event> events = new ArrayList<Event>();
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet results = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = FIND_EVENT_BY_VENDOR;
			statement = connection.prepareStatement(sql);
			statement.setInt(1,vendorId);
			results = statement.executeQuery();
			while(results.next()) {
				int id = results.getInt("id");
				String name = results.getString("name");
				String vendor = results.getString("vendor");
				String typeOfEvent = results.getString("typeOfEvent");
				Double charges = results.getDouble("charges");
				String venue = results.getString("venue");
				int capacity = results.getInt("capacity");
				String description = results.getString("description");
				Event event = new Event(name, typeOfEvent, description, venue, capacity, charges);
				events.add(event);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} 
		finally {
			try {
				connection.close();
				results.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return events;
	}

	
	
	

	public int updateEvent(int eventId, Event event) {
		Connection connection = null;
		PreparedStatement statement = null;
		int rows = 0;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			String sql = UPDATE_EVENT;
			statement = connection.prepareStatement(sql);
			statement.setString(1, event.getName());
			statement.setString(2, event.getType());
			statement.setDouble(3, event.getPrice());
			statement.setString(4, event.getVenue());
			statement.setInt(5, event.getCapacity());
			statement.setString(6, event.getDescription());
			statement.setInt(7, eventId);
			rows = statement.executeUpdate();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				connection.close();
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return rows;
	}

}
