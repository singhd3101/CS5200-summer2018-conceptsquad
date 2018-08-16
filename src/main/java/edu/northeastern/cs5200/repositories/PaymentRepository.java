package edu.northeastern.cs5200.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.model.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Integer>{

	@Query("SELECT p FROM Payment p WHERE p.booking.id = :id")
	public Optional<Payment> findByBookingId(@Param("id") int id);

	@Transactional
	@Modifying
	@Query("DELETE FROM Payment p WHERE p.id = :id")
	public void deletePaymentById(@Param("id") int id);

}
