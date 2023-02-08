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
CREATE DATABASE /*!32312 IF NOT EXISTS*/`testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `testdb`;

/*Table structure for table `answers` */

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `result` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `questionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `questionId` (`questionId`),
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `answers` */

/*Table structure for table `articlecategories` */

DROP TABLE IF EXISTS `articlecategories`;

CREATE TABLE `articlecategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `articlecategories` */

insert  into `articlecategories`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values 
(1,'music',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `articles` */

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `attach_url` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `recommends` int(11) DEFAULT NULL,
  `oppositions` int(11) DEFAULT NULL,
  `browingcount` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `articleCategoryId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articleCategoryId` (`articleCategoryId`),
  KEY `userId` (`userId`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`articleCategoryId`) REFERENCES `articlecategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `articles` */

insert  into `articles`(`id`,`name`,`description`,`contact_number`,`attach_url`,`source`,`recommends`,`oppositions`,`browingcount`,`createdAt`,`updatedAt`,`articleCategoryId`,`userId`) values 
(1,'aaa','aaa','aaa','aaa',NULL,NULL,NULL,3,'0000-00-00 00:00:00','2023-01-29 16:45:13',1,1),
(2,'bbb','bbb',NULL,NULL,NULL,NULL,NULL,6,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,2),
(3,'ccc','ccc','ccc',NULL,NULL,NULL,NULL,2,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,3),
(4,'ddd','ddd','ddd',NULL,NULL,NULL,NULL,6,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,3);

/*Table structure for table `avatars` */

DROP TABLE IF EXISTS `avatars`;

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `avatars` */

/*Table structure for table `browsehistories` */

DROP TABLE IF EXISTS `browsehistories`;

CREATE TABLE `browsehistories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `campusId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `campusId` (`campusId`),
  CONSTRAINT `browsehistories_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `browsehistories_ibfk_2` FOREIGN KEY (`campusId`) REFERENCES `campuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `browsehistories` */

/*Table structure for table `campuscategories` */

DROP TABLE IF EXISTS `campuscategories`;

CREATE TABLE `campuscategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `campuscategories` */

insert  into `campuscategories`(`id`,`title`,`description`,`parentId`,`createdAt`,`updatedAt`) values 
(1,'Engine',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(2,'Propelle',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(3,'ccc',NULL,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(4,'ddd',NULL,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(5,'eee',NULL,3,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(6,'fff',NULL,4,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `campuses` */

DROP TABLE IF EXISTS `campuses`;

CREATE TABLE `campuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `browses` int(11) DEFAULT NULL,
  `recommends` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `campusCategoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `campusCategoryId` (`campusCategoryId`),
  CONSTRAINT `campuses_ibfk_1` FOREIGN KEY (`campusCategoryId`) REFERENCES `campuscategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `campuses` */

insert  into `campuses`(`id`,`name`,`description`,`cost`,`browses`,`recommends`,`createdAt`,`updatedAt`,`campusCategoryId`) values 
(1,'aaa','aaa',NULL,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),
(2,'bbb','bbb',NULL,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),
(3,'ccc','ccc',NULL,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',2),
(4,'ddd','ddd',NULL,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',3),
(5,'123','123',NULL,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),
(6,'3334','555534',NULL,NULL,NULL,'2023-02-02 10:49:47','2023-02-02 10:49:47',2);

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `articleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `articleId` (`articleId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `comments` */

/*Table structure for table `datacategories` */

DROP TABLE IF EXISTS `datacategories`;

CREATE TABLE `datacategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `datacategories` */

insert  into `datacategories`(`id`,`title`,`description`,`parentId`,`createdAt`,`updatedAt`) values 
(1,'ship','aaa',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(2,'boat','bbb',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(3,'shipnews','ccc',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(4,'shipdata','ddd',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(5,'boatnews','eee',2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
(6,'boatdata','fff',2,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `datapurchasehistoies` */

DROP TABLE IF EXISTS `datapurchasehistoies`;

CREATE TABLE `datapurchasehistoies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `dataId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `dataId` (`dataId`),
  CONSTRAINT `datapurchasehistoies_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `datapurchasehistoies_ibfk_2` FOREIGN KEY (`dataId`) REFERENCES `datas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `datapurchasehistoies` */

/*Table structure for table `datas` */

DROP TABLE IF EXISTS `datas`;

CREATE TABLE `datas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `data_type` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `specification` varchar(255) DEFAULT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `prediction_date` date DEFAULT NULL,
  `datacol` varchar(255) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `browses` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `dataCategoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dataCategoryId` (`dataCategoryId`),
  CONSTRAINT `datas_ibfk_1` FOREIGN KEY (`dataCategoryId`) REFERENCES `datacategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `datas` */

insert  into `datas`(`id`,`name`,`file_url`,`data_type`,`amount`,`unit`,`specification`,`purpose`,`prediction_date`,`datacol`,`from`,`to`,`browses`,`createdAt`,`updatedAt`,`dataCategoryId`) values 
(1,'aaa','aaaa','aaaaaaaaaa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),
(2,'bbb','bbb','bbb',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),
(3,'ccc','ccc','ccc',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'0000-00-00 00:00:00','0000-00-00 00:00:00',2),
(4,'ddd','ddd','ddd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'0000-00-00 00:00:00','0000-00-00 00:00:00',2);

/*Table structure for table `notifications` */

DROP TABLE IF EXISTS `notifications`;

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `notifications` */

insert  into `notifications`(`id`,`date`,`description`,`type`,`createdAt`,`updatedAt`) values 
(1,'2023-02-16','asfsadfwfasdf','1','2023-02-03 11:23:22','2023-02-03 11:23:25');

/*Table structure for table `programcategories` */

DROP TABLE IF EXISTS `programcategories`;

CREATE TABLE `programcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `programcategories` */

insert  into `programcategories`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values 
(1,'asdfaw','asdfa','2023-01-31 10:49:07','2023-01-31 10:49:09');

/*Table structure for table `programs` */

DROP TABLE IF EXISTS `programs`;

CREATE TABLE `programs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `requirement` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `purchases` int(11) DEFAULT NULL,
  `recommends` int(11) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `programCategoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `programCategoryId` (`programCategoryId`),
  CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`programCategoryId`) REFERENCES `programcategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `programs` */

/*Table structure for table `questions` */

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `questions` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`createdAt`,`updatedAt`) values 
(1,'user','0000-00-00 00:00:00','0000-00-00 00:00:00');

/*Table structure for table `suggestions` */

DROP TABLE IF EXISTS `suggestions`;

CREATE TABLE `suggestions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `attach_url` varchar(255) DEFAULT NULL,
  `draft` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `suggestions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `suggestions` */

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_roles` */

insert  into `user_roles`(`createdAt`,`updatedAt`,`roleId`,`userId`) values 
('0000-00-00 00:00:00','0000-00-00 00:00:00',1,1),
('2023-01-29 17:58:50','2023-01-29 17:58:50',1,3),
('2023-01-30 06:35:52','2023-01-30 06:35:52',1,4),
('2023-01-31 23:55:05','2023-01-31 23:55:05',1,5),
('2023-02-01 10:37:22','2023-02-01 10:37:22',1,7),
('2023-02-03 06:15:52','2023-02-03 06:15:52',1,8),
('2023-02-03 06:22:07','2023-02-03 06:22:07',1,11),
('2023-02-03 11:12:43','2023-02-03 11:12:43',1,13),
('2023-02-03 13:27:28','2023-02-03 13:27:28',1,15),
('2023-02-03 13:56:26','2023-02-03 13:56:26',1,16),
('2023-02-03 16:10:33','2023-02-03 16:10:33',1,17),
('2023-02-03 17:49:32','2023-02-03 17:49:32',1,18);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`name`,`email`,`gender`,`birthday`,`password`,`createdAt`,`updatedAt`) values 
(1,' decrrrrdd','sera','sera@gmail.com','','0000-00-00','$2a$08$y4acw0uUxytwauSjjC0nDe1fB28qez5R.h1vEEkS/18zAd1.YihRe','2023-01-29 16:35:42','2023-02-03 11:36:14'),
(2,'qinghan910',NULL,'qinghan910@gmail.com',NULL,NULL,'$2a$08$Pyd4L5aI4gFZvRH3UMLHZO/gYYCFWHHdYu62qcWzLkf0gHCvNQ7HW','2023-01-29 17:48:47','2023-01-29 17:48:47'),
(3,'Sera','Sera','Sera@gmail.com','female','2000-03-02','$2a$08$TOOkdncBn9B2eHPxUj36Q.YFpKo8wVkEWt2YLwpi.hEUf14j8AVKi','2023-01-29 17:58:50','2023-01-30 06:53:06'),
(4,'hhh','hhh','hhh@gmail.com','','0000-00-00','$2a$08$d2XeumPyjgE.vGdbtqb4GeQPrgKYg0.HMKlEzW6mOW4DtgxYWWBGq','2023-01-30 06:35:52','2023-01-30 06:35:52'),
(5,'admin@gmail.come',NULL,'admin@gmail.com',NULL,NULL,'$2a$08$IOhjBA5i8wpCIWDxi9RGkuD63QFPTveggz0z8SiJgx.VC3j0dwsSC','2023-01-31 23:55:05','2023-02-02 18:45:44'),
(7,'aaa',NULL,'love@gmail.com',NULL,NULL,'$2a$08$7NuKI.y5ByRpeaZjcrt2mOh4/tEV31SJXTqnOVhlZYeN.WkHlR1sa','2023-02-01 10:37:22','2023-02-01 10:37:22'),
(8,'CR','Ronaldo','ron@ldo.com','male','1985-02-05',NULL,'2023-02-03 06:15:52','2023-02-03 06:15:52'),
(11,'C ronaldo','Ronaldo','ron@adsflw2435234affdo.com','male','1985-02-05','$2a$08$xAIDKyPLfRu1nEYOwsjNx.pwdaAHa2kWHR0Iq72R5uWKOkmrBxZgO','2023-02-03 06:22:07','2023-02-03 09:53:21'),
(13,'sniper',NULL,'sniper@gmail.com',NULL,NULL,'$2a$08$uf0oA9zeNdleQ1NXPJTNGuJ8SEX7sxpXzS2gaH0qdFmexUGwLT8FC','2023-02-03 11:12:43','2023-02-03 11:12:43'),
(15,'admin@themesbrand.com',NULL,'secretstar1017@outlook.com',NULL,NULL,'$2a$08$1CGGpV3kgVz0k4W2I1p2h.Ym7T1lxHdoHpZCBrppJDESWxNCPrf0q','2023-02-03 13:27:28','2023-02-03 13:27:28'),
(16,'sven',NULL,'sven@gmail.com',NULL,NULL,'$2a$08$VrcGUHMs4m2gNXIHwjmT9.76JAyDBHDjwQG.m8T0Xs6YM0piZuLrO','2023-02-03 13:56:26','2023-02-03 15:15:33'),
(17,'qqqqqqqqqq','wwwwwww','qqwww@fadf2.com','male','0000-00-00','','2023-02-03 16:10:33','2023-02-03 16:10:33'),
(18,'game',NULL,'game@gmail.com',NULL,NULL,'$2a$08$vTubSuLY4m2Ij6VunLey.uUnm8T2XgXUsoEUmshLdoMcZ9uQrLjgu','2023-02-03 17:49:32','2023-02-03 17:49:32');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
