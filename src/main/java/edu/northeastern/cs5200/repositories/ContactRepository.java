package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.northeastern.cs5200.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
