-- anton_database.sql
-- database for failed logins from lastb logs from oracle-2 free tier server.

CREATE DATABASE IF NOT EXISTS anton_security;
USE anton_security;

DROP TABLE IF EXISTS LoginAttempts; 
DROP TABLE IF EXISTS SourceIPs; 
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
	UserId INTEGER PRIMARY KEY AUTO_INCREMENT,
	Username TEXT NOT NULL UNIQUE
);

CREATE TABLE SourceIPs (
	IpId INTEGER PRIMARY KEY AUTO_INCREMENT ,
	IpAddress VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE LoginAttempts (
	AttemptId INTEGER PRIMARY KEY AUTO_INCREMENT,
	UserId INTEGER NOT NULL,
	IpId INTEGER NOT NULL,
	TTY TEXT,
	AttemptTime DATETIME,
	FOREGIN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
	FOREGIN KEY (IpId) REFERENCES SourceIPs(IpId)
);

INSERT INTO Users (Username) VALUES ('admin');
INSERT INTO SourceIPs (IpAddress) VALUES ('134.209.85.52');

INSERT INTO LoginAttempts (UserId, IpId, TTY, AttemptTime)
SELECT UserId, IpId, 'ssh:notty', '2026-01-01 11:59:00'
FROM Users, SourceIPs
WHERE Username = 'admin' AND IpAddress = '134.209.85.52';
