#create schema

CREATE DATABASE `showtime_schema`;

#create person 

CREATE TABLE `showtime_schema`.`person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(45) NOT NULL,
  `lname` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `mobile` VARCHAR(12) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

#create vendor

CREATE TABLE `showtime_schema`.`vendor` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `person_vendor_fk`
    FOREIGN KEY (`id`)
    REFERENCES `showtime_schema`.`person` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


#create booking

CREATE TABLE `showtime_schema`.`booking` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ticketsAvailable` INT NOT NULL,
  `numberOfTickets` INT NOT NULL,
  `cost` DOUBLE NOT NULL,
  `bookingcol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

#create event

CREATE TABLE `showtime_schema`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `vendor` INT NOT NULL,
  `typeOfEvent` VARCHAR(200) NOT NULL,
  `charges` DOUBLE NOT NULL,
  `venue` VARCHAR(200) NOT NULL,
  `capacity` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `vendor_event_fk_idx` (`vendor` ASC),
  CONSTRAINT `vendor_event_fk`
    FOREIGN KEY (`vendor`)
    REFERENCES `showtime_schema`.`vendor` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
