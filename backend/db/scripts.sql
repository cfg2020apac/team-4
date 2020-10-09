CREATE DATABASE blossom;
use blossom;

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
(1,"person@yahoo.com.sg","sha256$ayLVemjM$778d9b3c17c43c91f94cf576b463e1df06f1d1240b85d287acd811bebadc388e","Person 1","1991-02-05","Male","Chinese","12 Wellington Street",1,1,1,"employed",55),
(1,"person@yahoo.com.sg","sha256$ayLVemjM$778d9b3c17c43c91f94cf576b463e1df06f1d1240b85d287acd811bebadc388e","Person 1","1991-05-02","Male","Chinese","12 Wellington Street",2,2,3,"employed",55),
(2,"person2@yahoo.com.sg","sha256$ayLVemjM$778d9b3c17c43c91f94cf576b463e1df06f1d1240b85d287acd811bebadc388e","Person 2","1991-05-04","Female","Malay","12 Bukit View",1,3,4,"self-employed",80),
(3,"person3@yahoo.com.sg","sha256$ayLVemjM$778d9b3c17c43c91f94cf576b463e1df06f1d1240b85d287acd811bebadc388e","Person 3","1984-09-11","Male","Indian","12 Everest Street",4,4,2,"retired",20),
(4,"person4@yahoo.com.sg","sha256$ayLVemjM$778d9b3c17c43c91f94cf576b463e1df06f1d1240b85d287acd811bebadc388e","Person 4","1981-09-12","Female","Chinese","12 Crown Street",1,2,5,"unemployed",30);

CREATE TABLE leaderboard(
    user_id int NOT NULL, 
    user_score int NOT NULL,

    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO leaderboard VALUES 
(1,110),
(2,160),
(3,40),
(4,60);

CREATE TABLE announcement(
    id int NOT NULL, 
    title varchar(255) NOT NULL,
    content varchar(400) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO announcement values
(1,"New Event","Sign up for our yoga workshop now!"),
(2,"Reminder","A reminder that your volunteer event is tomorrow"),
(3,"Your Pet is waiting for you","Earn more hours to keep your pet beautiful!"),
(4,"Donation Drive","Donate now to the upcoming drive to make a difference!"),
(5,"Warm Introduction","Pleased to introduce our new volunteers!");



-- --------------------------------------------------------

--
-- Table structure for table `learning`
--

DROP TABLE IF EXISTS `learning`;
CREATE TABLE `learning` (
  `event_id` int(11) NOT NULL,
  `event_title` varchar(300) NOT NULL,
  `age_range` varchar(20) NOT NULL,
  `event_start_date` date NOT NULL,
  `event_end_date` date NOT NULL,
  `event_start_time` time NOT NULL,
  `event_end_time` time NOT NULL,
  `registration_link` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `learning`
--

INSERT INTO `learning` (`event_id`, `event_title`, `age_range`, `event_start_date`, `event_end_date`, `event_start_time`, `event_end_time`, `registration_link`) VALUES
(2, '#I Am Remarkable workshop for YOUth', '13-21', '2020-10-31', '2020-10-31', '14:00:00', '15:30:00', 'https://www.blossomworld.sg/new-events/2020/10/31/i-am-remarkable-workshop-for-youth'),
(4, 'Happy Formula @ Aljunied', '7-9', '2020-10-01', '2020-10-10', '14:00:00', '18:00:00', 'https://www.blossomworld.sg/new-events/2020/08/01/happy-formula-geylang-branch-btmfp-6sh6s'),
(6, 'Discovering Treasure Through Stories', '10-12', '2020-10-10', '2020-10-31', '14:00:00', '18:00:00', 'https://www.blossomworld.sg/new-events/2020/08/01/discovering-treasure-through-stories-geylang-branch-s4cax-x5els-t6mrt'),
(7, 'Discovering Treasure Through Stories', '10-12', '2020-10-10', '2020-10-31', '14:00:00', '18:00:00', 'https://www.blossomworld.sg/new-events/2020/08/01/discovering-treasure-through-stories-geylang-branch-s4cax-x5els-t6mrt'),
(8, 'Standards For Being A Good Student and Child @ Aljunied ', '4-6 ', '2020-10-31', '2020-10-31', '14:00:00', '18:00:00', 'https://www.blossomworld.sg/new-events/2020/08/01/standards-for-being-a-good-student-and-child-main-office-gle84-lg582-68njd-djmhk'),
(9, 'Blossom Children', '7-9', '2020-10-21', '2020-10-22', '10:00:00', '15:00:00', 'https://www.blossomworld.sg/new-events/2020/11/21/2020-blossom-children-holiday-camp-loving-all-beings-zoom'),
(12, 'Standards For Being A Good Student and Child   @ Tohyi', '4-6', '2020-08-01', '2020-10-31', '11:30:00', '15:30:00', 'https://www.blossomworld.sg/new-events/2020/08/01/standards-for-being-a-good-student-and-child-main-office-gle84-lg582-68njd'),
(13, 'Standards For Being A Good Student and Child  @ Psair Ris', '7-9', '2020-10-22', '2020-10-22', '10:00:00', '18:00:00', 'https://www.blossomworld.sg/new-events/2020/08/01/standards-for-being-a-good-student-and-child-main-office-gle84-lg582-68njd');

-- --------------------------------------------------------

--
-- Table structure for table `volunteering`
--

DROP TABLE IF EXISTS `volunteering`;
CREATE TABLE `volunteering` (
  `event_id` int(11) NOT NULL,
  `volunteering_position` varchar(300) NOT NULL,
  `age_range` varchar(20) NOT NULL,
  `event_start_time` time NOT NULL,
  `event_start_date` date NOT NULL,
  `event_end_time` time NOT NULL,
  `event_end_date` date NOT NULL,
  `training_start_date` date NOT NULL,
  `training_start_time` time NOT NULL,
  `training_end_date` date NOT NULL,
  `training_end_time` time NOT NULL,
  `registration_link` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `volunteering`
--

INSERT INTO `volunteering` (`event_id`, `volunteering_position`, `age_range`, `event_start_time`, `event_start_date`, `event_end_time`, `event_end_date`, `training_start_date`, `training_start_time`, `training_end_date`, `training_end_time`, `registration_link`) VALUES
(1, 'Share-a-skill', '18-21', '18:00:00', '2020-10-16', '18:00:00', '2020-10-23', '2020-10-09', '18:00:00', '2020-10-14', '18:00:00', 'https://www.blossomworld.sg/volunteer'),
(3, 'BYC Volunteer: Organise a workshop or class to the value community we serve', '13-21', '14:00:00', '2020-10-16', '15:30:00', '2020-10-31', '2020-10-09', '13:00:00', '2020-10-13', '18:00:00', 'https://www.blossomworld.sg/volunteer'),
(4, 'Administration Support: To assist registration counter, food arranging and stock taking. ', '16-21', '18:00:00', '2020-10-22', '18:00:00', '2020-10-29', '2020-10-12', '18:30:40', '2020-10-13', '18:00:40', 'https://www.blossomworld.sg/volunteer'),
(7, 'Organize Events/Activities: To be able to form a team of volunteers to help carry out the activity.', '18-21', '14:00:00', '2020-10-16', '15:30:00', '2020-10-31', '2020-10-09', '13:00:00', '2020-10-14', '18:00:00', 'https://www.blossomworld.sg/volunteer'),
(8, 'Community Services', '16-21', '18:00:00', '2020-10-22', '18:00:00', '2020-12-16', '2020-10-12', '18:00:00', '2020-10-13', '18:00:00', 'https://www.blossomworld.sg/volunteer'),
(11, 'Fundraisers', '13-21', '14:00:00', '2020-10-23', '15:30:00', '2020-12-16', '2020-10-09', '13:00:00', '2020-11-09', '18:00:00', 'https://www.blossomworld.sg/volunteer'),
(12, 'Befrienders', '21-35', '18:00:00', '2020-11-12', '18:00:00', '2020-12-10', '2020-10-12', '18:30:00', '2020-11-12', '18:00:00', 'https://www.blossomworld.sg/volunteer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `learning`
--
ALTER TABLE `learning`
  ADD PRIMARY KEY (`event_id`),
  ADD UNIQUE KEY `event_id` (`event_id`);

--
-- Indexes for table `volunteering`
--
ALTER TABLE `volunteering`
  ADD PRIMARY KEY (`event_id`),
  ADD UNIQUE KEY `event_id` (`event_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `learning`
--
ALTER TABLE `learning`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `volunteering`
--
ALTER TABLE `volunteering`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
