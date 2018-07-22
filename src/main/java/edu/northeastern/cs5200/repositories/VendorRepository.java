package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.northeastern.cs5200.model.Vendor;

public interface VendorRepository extends JpaRepository <Vendor, Integer>{

}
