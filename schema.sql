drop schema showtime_schema;

create schema showtime_schema;

use showtime_schema;

create table address (id integer not null auto_increment, city varchar(255), state varchar(255), street1 varchar(255), street2 varchar(255), zip bigint not null, person_id integer, primary key (id)) engine=InnoDB;
create table booking (dtype varchar(31) not null, id integer not null auto_increment, date datetime, no_of_tickets integer not null, payment_id varchar(255), status varchar(255), total_cost float not null, customer_id integer, hist_id integer, movie_id integer, event_id integer, primary key (id)) engine=InnoDB;
create table contact (id integer not null auto_increment, phone bigint not null, person_id integer, primary key (id)) engine=InnoDB;
create table event (id integer not null auto_increment, capacity integer not null, description varchar(255), event_date date, name varchar(255), price double precision not null, type varchar(255), venue varchar(255), vendor_id integer, primary key (id)) engine=InnoDB;
create table movie (id integer not null, name varchar(255), primary key (id)) engine=InnoDB;
create table movie2theatre (movie_id integer not null, theatre_id integer not null) engine=InnoDB;
create table person (dtype varchar(31) not null, id integer not null auto_increment, dob date, first_name varchar(255), last_name varchar(255), password varchar(255), user_name varchar(255), access integer not null, booking integer, registered bit, primary key (id)) engine=InnoDB;
create table seats (id integer not null auto_increment, seat_number varchar(255), mbooking_id integer, showtime_id varchar(255), primary key (id)) engine=InnoDB;
create table showtime (id varchar(255) not null, start_time datetime, primary key (id)) engine=InnoDB;
create table showtime2movie (showtime_id varchar(255) not null, movie_id integer not null) engine=InnoDB;
create table theatre (id integer not null, name varchar(255), primary key (id)) engine=InnoDB;
alter table address add constraint FK81ihijcn1kdfwffke0c0sjqeb foreign key (person_id) references person (id);
alter table booking add constraint FKqd0md9uoudljwlr2x27c7df8n foreign key (customer_id) references person (id);
alter table booking add constraint FK5tojk9lj1r4vx9g8iyktljmqd foreign key (hist_id) references booking (id);
alter table booking add constraint FKsoq2aivnxa8vwnlgeyn5x0la9 foreign key (movie_id) references movie (id);
alter table booking add constraint FKiy2tdi4vrw2mljj6rqwmd698q foreign key (event_id) references event (id);
alter table contact add constraint FKjbcdaayhsa4dhcuc5q0kkw8et foreign key (person_id) references person (id);
alter table event add constraint FK2skhuc7w5ajjpd8eegn3l7yja foreign key (vendor_id) references person (id);
alter table movie2theatre add constraint FKlyibh4s1kphdwmwbfs6qjxfci foreign key (theatre_id) references theatre (id);
alter table movie2theatre add constraint FKn4fiwgcg68lb5ndq9mt996eck foreign key (movie_id) references movie (id);
alter table seats add constraint FKfx2vvut3bro8i9xin9sr0mnw9 foreign key (mbooking_id) references booking (id);
alter table seats add constraint FK6utostnc46gx229ninbwi3t5e foreign key (showtime_id) references showtime (id);
alter table showtime2movie add constraint FKh6duykpngt8t9ulvu1x8f5wht foreign key (movie_id) references movie (id);
alter table showtime2movie add constraint FK3pil607du95w1da3eblskmrui foreign key (showtime_id) references showtime (id);
