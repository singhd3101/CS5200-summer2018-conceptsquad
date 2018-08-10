package edu.northeastern.cs5200.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Administrator")
public class Administrator extends Person{
	
	public Administrator(){
		super.setAccess(3);
	}

}
