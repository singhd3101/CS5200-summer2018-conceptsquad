package edu.northeastern.cs5200;

import java.sql.SQLException;
import javax.naming.NamingException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Cs5200Summer2018ConceptsquadApplication {

	public static void main(String[] args) throws NamingException, SQLException {
		SpringApplication.run(Cs5200Summer2018ConceptsquadApplication.class, args);
	}
}
