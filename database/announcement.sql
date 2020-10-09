CREATE DATABASE Announcement_db
USE  Announcement_db;

CREATE TABLE announcement(
    id int NOT NULL, 
    title varchar(255) NOT NULL,
    content varchar(400) NOT NULL
    PRIMARY KEY (id)
);

INSERT INTO announcement values
(1,"New Event","Sign up for our yoga workshop now!"),
(2,"Reminder","A reminder that your volunteer event is tomorrow"),
(3,"Your Pet is waiting for you","Earn more hours to keep your pet beautiful!"),
(4,"Donation Drive","Donate now to the upcoming drive to make a difference!"),
(5,"Warm Introduction","Pleased to introduce our new volunteers!");