-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2022 at 08:39 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `names` varchar(20) NOT NULL,
  `passwords` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `names`, `passwords`, `email`) VALUES
(1, 'sami', 'sam', 'samuel.alemayehu13@g');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `Tittle` varchar(50) NOT NULL,
  `Descriptions` varchar(500) NOT NULL,
  `Types` varchar(20) NOT NULL,
  `Experiance` varchar(20) NOT NULL,
  `Posted_Date` datetime NOT NULL DEFAULT current_timestamp(),
  `Locations` varchar(50) NOT NULL,
  `Salary` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `Tittle`, `Descriptions`, `Types`, `Experiance`, `Posted_Date`, `Locations`, `Salary`) VALUES
(66, 'Janitor ', 'U r going to clean', 'Full time', 'None', '2022-06-21 14:52:28', 'Say', '1000'),
(67, 'Guard', 'Security', 'ful time', 'none', '2022-06-21 15:11:30', '6 killo', '5000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `names` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `passwords` varchar(25) NOT NULL,
  `age` varchar(25) NOT NULL,
  `Job_Tittle` varchar(25) NOT NULL,
  `Experiance` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `names`, `email`, `passwords`, `age`, `Job_Tittle`, `Experiance`) VALUES
(1, 'sami', 'subra@email.com', 'sami', '21', 'sera felagi', '0'),
(2, 'hi', 'sadasd', 'hi', '45', '45', '3 years'),
(5, 'sami', 'uel', 's', 's', 's', 's'),
(7, 'sami', 'samuel.alemayehu13@gmail.', 'pass', '45', 'App developer', 'none'),
(10, 'mikyas', 'mikyas@gmail.com', 'mike', '108', 'yeken seratgna', '50'),
(12, 'sami', 'al', 'asd', '78', 'web developer', 'none'),
(13, 'meron', 'meron@gmial.com', 'meron', '25', 'teacher', 'none'),
(14, '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
