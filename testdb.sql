/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.8-MariaDB : Database - testdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`testdb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `testdb`;

/*Table structure for table `notifications` */

DROP TABLE IF EXISTS `notifications`;

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

/*Data for the table `notifications` */

insert  into `notifications`(`id`,`date`,`description`,`createdAt`,`updatedAt`) values 
(1,'2023-01-25','- studying','2023-01-25 20:21:57','2023-01-25 20:21:59'),
(10,'2023-02-25','wwwww','2023-01-25 10:22:40','2023-01-25 10:22:40'),
(11,'2023-02-25','wwwww','2023-01-25 10:22:41','2023-01-25 10:22:41'),
(12,'2023-02-25','wwwww','2023-01-25 10:22:42','2023-01-25 10:22:42'),
(13,'2023-02-25','wwwww','2023-01-25 10:22:43','2023-01-25 10:22:43'),
(14,'2023-02-25','wwwww','2023-01-25 10:22:43','2023-01-25 10:22:43'),
(15,'2029-02-25','111111111111111111111','2023-01-25 10:22:44','2023-01-25 10:29:21'),
(16,'2023-02-25','wwwww','2023-01-25 10:22:45','2023-01-25 10:22:45'),
(17,'2023-02-25','wwwww','2023-01-25 10:22:47','2023-01-25 10:22:47'),
(20,'2023-02-25','wwwww','2023-01-25 10:22:48','2023-01-25 10:22:48'),
(22,'2023-02-25','wwwww','2023-01-25 10:22:49','2023-01-25 10:22:49'),
(23,'2023-02-25','wwwww','2023-01-25 10:22:51','2023-01-25 10:22:51'),
(24,'2023-02-25','wwwww','2023-01-25 10:22:52','2023-01-25 10:22:52'),
(25,'2023-02-25','wwwww','2023-01-25 10:22:52','2023-01-25 10:22:52'),
(26,'2023-02-25','wwwww','2023-01-25 10:22:53','2023-01-25 10:22:53'),
(27,'2023-02-25','wwwww','2023-01-25 10:22:53','2023-01-25 10:22:53'),
(28,'2023-02-25','wwwww','2023-01-25 10:22:53','2023-01-25 10:22:53'),
(29,'2023-02-25','wwwww','2023-01-25 10:22:54','2023-01-25 10:22:54'),
(30,'2029-02-25','111111111111111111111','2023-01-25 10:29:40','2023-01-25 10:29:40'),
(31,'2029-02-25','111111111111111111111','2023-01-25 10:30:54','2023-01-25 10:30:54'),
(32,'2029-02-25','111111111111111111111','2023-01-25 10:31:27','2023-01-25 10:31:27');

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`createdAt`,`updatedAt`) values 
(1,'user','2023-01-25 19:25:48','2023-01-25 19:25:48'),
(2,'moderator','2023-01-25 19:26:02','2023-01-25 19:26:02'),
(3,'admin','2023-01-25 19:26:11','2023-01-25 19:26:11');

/*Table structure for table `user_roles` */

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_roles` */

insert  into `user_roles`(`createdAt`,`updatedAt`,`roleId`,`userId`) values 
('2023-01-25 08:27:50','2023-01-25 08:27:50',1,1),
('2023-01-25 08:30:01','2023-01-25 08:30:01',1,3),
('2023-01-25 08:27:50','2023-01-25 08:27:50',2,1),
('2023-01-25 08:29:42','2023-01-25 08:29:42',3,2);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) values 
(1,'mod','mod@bezkoder.com','$2a$08$gZUYTtyIO0vKR4cuttJW7ev18G6BgfQRdrFyjE7jLmyXCodTz3oOO','2023-01-25 08:27:50','2023-01-25 08:27:50'),
(2,'admin','admin@bezkoder.com','$2a$08$L/iwfMn0t/QlgvxP5rX2a.zAh5SETro1nfXjw6Ab7V8IcKSFUb6Ra','2023-01-25 08:29:42','2023-01-25 08:29:42'),
(3,'zkoder','user@bezkoder.com','$2a$08$YoOfRO9z759v6ZsYEKuunOjX6xn5MUdmfEx8WDmpnAJBvCkIlQiVW','2023-01-25 08:30:01','2023-01-25 08:30:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
