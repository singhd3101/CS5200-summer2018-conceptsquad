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

import edu.northeastern.cs5200.model.Payment;
import edu.northeastern.cs5200.model.Theatre;
import edu.northeastern.cs5200.repositories.PaymentRepository;
import edu.northeastern.cs5200.repositories.TheatreRepository;

@RestController
public class PaymentService {
	
	@Autowired
	PaymentRepository paymentRepository;
	
	@GetMapping("/api/ppayment")
	public List<Payment> findAllPayments() {
		return (List<Payment>) paymentRepository.findAll();
	}
	
	@GetMapping("/api/ppayment/{paymentId}")
	public Payment findPaymenteById(@PathVariable("paymentId") int id) {
		Optional<Payment> optional = paymentRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@GetMapping("/api/ppayment/booking/{bookingId}")
	public Payment findPaymentByBookingId(@PathVariable("bookingId") int id) {
		Optional<Payment> optional = paymentRepository.findByBookingId(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}
	
	@PostMapping("api/ppayment")
	public Payment createPayment(@RequestBody Payment payment) {
		return paymentRepository.save(payment);
	}
	
	@DeleteMapping("/api/ppayment/{paymentId}")
	public void deletePayment(@PathVariable("paymentId") int id) {
		System.out.println("delete service: "+ id);
		paymentRepository.deletePaymentById(id);
	}
	
	@PutMapping("/api/ppayment/{paymentId}")
	public Payment updatePayment(@PathVariable("paymentId") int id, @RequestBody Payment newPayment) {
		Optional<Payment> optional = paymentRepository.findById(id);
		if(optional.isPresent()) {
			Payment payment = optional.get();
			if(newPayment.getStatus() != null) {
				payment.setStatus(newPayment.getStatus());
			}
			if(newPayment.getAmount() != 0.00) {
				payment.setAmount(newPayment.getAmount());
			}
			return paymentRepository.save(payment);
		}
		return null;
	}

}