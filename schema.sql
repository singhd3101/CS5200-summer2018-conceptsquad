#create schema

CREATE DATABASE `showtime_schema`;


# create Person

CREATE TABLE `person` (
  `dtype` varchar(31) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dob` date DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `access` int(11) NOT NULL,
  `booking` int(11) DEFAULT NULL,
  `registered` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Address

CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street1` varchar(255) DEFAULT NULL,
  `street2` varchar(255) DEFAULT NULL,
  `zip` bigint(20) NOT NULL,
  `person_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK81ihijcn1kdfwffke0c0sjqeb` (`person_id`),
  CONSTRAINT `FK81ihijcn1kdfwffke0c0sjqeb` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Contact

CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` bigint(20) NOT NULL,
  `person_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjbcdaayhsa4dhcuc5q0kkw8et` (`person_id`),
  CONSTRAINT `FKjbcdaayhsa4dhcuc5q0kkw8et` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Booking

CREATE TABLE `booking` (
  `dtype` varchar(31) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `no_of_tickets` int(11) NOT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_cost` float NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `hist_id` int(11) DEFAULT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqd0md9uoudljwlr2x27c7df8n` (`customer_id`),
  KEY `FK5tojk9lj1r4vx9g8iyktljmqd` (`hist_id`),
  KEY `FKsoq2aivnxa8vwnlgeyn5x0la9` (`movie_id`),
  KEY `FKiy2tdi4vrw2mljj6rqwmd698q` (`event_id`),
  CONSTRAINT `FK5tojk9lj1r4vx9g8iyktljmqd` FOREIGN KEY (`hist_id`) REFERENCES `booking` (`id`),
  CONSTRAINT `FKiy2tdi4vrw2mljj6rqwmd698q` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  CONSTRAINT `FKqd0md9uoudljwlr2x27c7df8n` FOREIGN KEY (`customer_id`) REFERENCES `person` (`id`),
  CONSTRAINT `FKsoq2aivnxa8vwnlgeyn5x0la9` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Event

CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capacity` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `venue` varchar(255) DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2skhuc7w5ajjpd8eegn3l7yja` (`vendor_id`),
  CONSTRAINT `FK2skhuc7w5ajjpd8eegn3l7yja` FOREIGN KEY (`vendor_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Movie

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Seats

CREATE TABLE `seats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seat_number` varchar(255) DEFAULT NULL,
  `mbooking_id` int(11) DEFAULT NULL,
  `showtime_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfx2vvut3bro8i9xin9sr0mnw9` (`mbooking_id`),
  KEY `FK6utostnc46gx229ninbwi3t5e` (`showtime_id`),
  CONSTRAINT `FK6utostnc46gx229ninbwi3t5e` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`id`),
  CONSTRAINT `FKfx2vvut3bro8i9xin9sr0mnw9` FOREIGN KEY (`mbooking_id`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Showtime

CREATE TABLE `showtime` (
  `id` varchar(255) NOT NULL,
  `start_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Theatre

CREATE TABLE `theatre` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Showtime2Movie

CREATE TABLE `showtime2movie` (
  `showtime_id` varchar(255) NOT NULL,
  `movie_id` int(11) NOT NULL,
  KEY `FKh6duykpngt8t9ulvu1x8f5wht` (`movie_id`),
  KEY `FK3pil607du95w1da3eblskmrui` (`showtime_id`),
  CONSTRAINT `FK3pil607du95w1da3eblskmrui` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`id`),
  CONSTRAINT `FKh6duykpngt8t9ulvu1x8f5wht` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


# Movie2Theatre

CREATE TABLE `movie2theatre` (
  `movie_id` int(11) NOT NULL,
  `theatre_id` int(11) NOT NULL,
  KEY `FKlyibh4s1kphdwmwbfs6qjxfci` (`theatre_id`),
  KEY `FKn4fiwgcg68lb5ndq9mt996eck` (`movie_id`),
  CONSTRAINT `FKlyibh4s1kphdwmwbfs6qjxfci` FOREIGN KEY (`theatre_id`) REFERENCES `theatre` (`id`),
  CONSTRAINT `FKn4fiwgcg68lb5ndq9mt996eck` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

