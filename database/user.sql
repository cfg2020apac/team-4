CREATE DATABASE User_db
USE  User_db;

CREATE TABLE interest(
    id int NOT NULL, 
    description varchar(255) NOT NULL,
    CONSTRAINT 
    PK_id PRIMARY KEY (id)
);

INSERT INTO interest VALUES
(1,"Education & Training"),
(2, "Music"),
(3, "Teaching"),
(4,"Photography/Video Recording"),
(5, "Cooking");

CREATE TABLE spokenLanguage(
    id int NOT NULL, 
    description varchar(255) NOT NULL,
    CONSTRAINT 
    PK_id PRIMARY KEY (id)
);

INSERT INTO spokenLanguage VALUES
(1,"English"),
(2, "Mandarin"),
(3, "Malay"),
(4,"Tamil"),
(5, "Hokkien"),
(6, "Cantonese"),
(7, "Teochew");

CREATE TABLE writtenLanguage(
    id int NOT NULL, 
    description varchar(255) NOT NULL,
    CONSTRAINT 
    PK_id PRIMARY KEY (id)
);

INSERT INTO writtenLanguage VALUES
(1,"English"),
(2, "Mandarin"),
(3, "Malay"),
(4,"Tamil");

CREATE TABLE user (

   id int NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   fullName varchar(400) NOT NULL,
   dateOfBirth date NOT NULL, 
   gender varchar(6),
   race varchar(100),
   address varchar(400),
   spokenLanguageID int,
   writtenLanguageID int,
   interestID int,
   current_occupation VARCHAR(100),
   hours_committed int,

   PRIMARY KEY (id,spokenLanguageID,writtenLanguageID,interestID),
   FOREIGN KEY (spokenLanguageID) REFERENCES spokenLanguage(id),
   FOREIGN KEY (writtenLanguageID) REFERENCES writtenLanguage(id),
   FOREIGN KEY (interestID) REFERENCES interest(id)
); 


INSERT INTO user VALUES
(1,"person@yahoo.com.sg","test1","Person 1","1991-02-05","Male","Chinese","12 Wellington Street",1,1,1,"employed",55),
(1,"person@yahoo.com.sg","test1","Person 1","1991-05-02","Male","Chinese","12 Wellington Street",2,2,3,"employed",55),
(2,"person2@yahoo.com.sg","test2","Person 2","1991-05-04","Female","Malay","12 Bukit View",1,3,4,"self-employed",80),
(3,"person3@yahoo.com.sg","test3","Person 3","1984-09-11","Male","Indian","12 Everest Street",4,4,2,"retired",20),
(4,"person4@yahoo.com.sg","test4","Person 4","1981-09-12","Female","Chinese","12 Crown Street",1,2,5,"unemployed",30);

CREATE TABLE leaderboard(
    user_id int NOT NULL, 
    user_score int NOT NULL

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES user(id)
);

INSERT INTO leaderboard VALUES 
(1,110),
(2,160),
(3,40),
(4,60);

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