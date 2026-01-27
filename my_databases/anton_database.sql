-- anton_database.sql
-- database for failed logins from lastb logs from oracle-2 free tier server.

CREATE DATABASE IF NOT EXISTS anton_security;
USE anton_security;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Countries;
DROP TABLE IF EXISTS SourceIPs; 
DROP TABLE IF EXISTS LoginAttempts;

-- Table for login-names used
CREATE TABLE Users (
	UserId INTEGER PRIMARY KEY AUTO_INCREMENT,
	Username TEXT NOT NULL UNIQUE
);

-- Table for countries
CREATE TABLE Countries(
	CountryId INTEGER PRIMARY KEY AUTO_INCREMENT ,
	Country TEXT NOT NULL UNIQUE
);

-- Table for Ip-adresses
CREATE TABLE SourceIPs (
	IpId INTEGER PRIMARY KEY AUTO_INCREMENT ,
	IpAddress VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE LoginAttempts (
	AttemptId INTEGER PRIMARY KEY AUTO_INCREMENT,
	UserId INTEGER NOT NULL,
	CountryId INTEGER NOT NULL,
	IpId INTEGER NOT NULL,
	TTY TEXT,
	AttemptTime DATETIME,
	FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
	FOREIGN KEY (CountryId) REFERENCES Countries(CountryId) ON DELETE CASCADE,
	FOREIGN KEY (IpId) REFERENCES SourceIPs(IpId)
);

-- User data 
INSERT INTO Users (UserId, Username) VALUES (1, 'admin');
INSERT INTO Users (UserId, Username) VALUES (2, 'sysadmin');
INSERT INTO Users (UserId, Username) VALUES (3, 'debian');
INSERT INTO Users (UserId, Username) VALUES (4, 'vpn');
INSERT INTO Users (UserId, Username) VALUES (5, 'testuser');
INSERT INTO Users (UserId, Username) VALUES (6, 'hero');
INSERT INTO Users (UserId, Username) VALUES (7, 'sol');
INSERT INTO Users (UserId, Username) VALUES (8, 'node');

-- Countries
INSERT INTO Countries (CountryId, Country) VALUES (1, 'Netherlands');
INSERT INTO Countries (CountryId, Country) VALUES (2, 'Peru');
INSERT INTO Countries (CountryId, Country) VALUES (3, 'Hong Kong');
INSERT INTO Countries (CountryId, Country) VALUES (4, 'Romania');


-- SourceIp data
INSERT INTO SourceIPs (IpId, IpAddress) VALUES (1, '161.35.89.181');
INSERT INTO SourceIPs (IpId, IpAddress) VALUES (2, '164.92.215.121');
INSERT INTO SourceIPs (IpId, IpAddress) VALUES (3, '190.119.63.98');
INSERT INTO SourceIPs (IpId, IpAddress) VALUES (4, '103.149.27.179');
INSERT INTO SourceIPs (IpId, IpAddress) VALUES (5, '80.94.92.186');

-- Login Attempt data
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:55:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 2, 'ssh:notty', '2025-12-31 23:32:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (2, 2, 3, 'ssh:notty', '2026-01-01 00:00:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (4, 3, 4, 'ssh:notty', '2025-12-31 23:59:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (3, 1, 2, 'ssh:notty', '2025-12-31 23:59:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (3, 1, 2, 'ssh:notty', '2025-12-31 23:58:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (5, 2, 3, 'ssh:notty', '2025-12-31 23:58:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:58:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (3, 1, 2, 'ssh:notty', '2025-12-31 23:57:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (6, 2, 3, 'ssh:notty', '2025-12-31 23:57:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:56:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (3, 1, 2, 'ssh:notty', '2025-12-31 23:56:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:55:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (3, 1, 2, 'ssh:notty', '2025-12-31 23:55:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:54:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:53:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:52:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:52:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (7, 4, 5, 'ssh:notty', '2025-12-31 23:49:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (7, 4, 5, 'ssh:notty', '2025-12-31 23:44:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1 ,1, 'ssh:notty', '2025-12-31 23:41:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:40:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1 ,1, 'ssh:notty', '2025-12-31 23:39:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (1, 1, 1, 'ssh:notty', '2025-12-31 23:38:00');
INSERT INTO LoginAttempts (UserId, CountryId, IpId, TTY, AttemptTime)
VALUES (8, 4, 5, 'ssh:notty', '2025-12-31 23:38:00');


