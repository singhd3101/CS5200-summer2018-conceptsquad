package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Vendor;

public interface VendorRepository extends CrudRepository <Vendor, Integer>{

}
