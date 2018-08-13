package edu.northeastern.cs5200.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Integer>{

	@Query("SELECT p FROM Payment p WHERE p.booking.id = :id")
	public Optional<Payment> findByBookingId(int id);

}
