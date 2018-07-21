package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.northeastern.cs5200.model.Person;

public interface PersonRepository extends JpaRepository <Person, Integer>{

}
