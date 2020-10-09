-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 09, 2020 at 11:08 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data`
--
CREATE DATABASE IF NOT EXISTS `data` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `data`;

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
