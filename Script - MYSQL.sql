create database if not exists app;
use app;

create table devices (
id integer not null AUTO_INCREMENT primary key,
category varchar(100),
color varchar(16),
partNumber integer
);

create table types(
 id integer not null AUTO_INCREMENT primary key,
 name varchar(128) not null
);

INSERT INTO `app`.`types` (`name`) VALUES ('Notebook');
INSERT INTO `app`.`types` (`name`) VALUES ('TV');

INSERT INTO `app`.`devices` (`category`, `color`, `partNumber`) VALUES ('Notebook', 'Preto', '123456');
INSERT INTO `app`.`devices` (`category`, `color`, `partNumber`) VALUES ('Notebook', 'Branco', '987');
INSERT INTO `app`.`devices` (`category`, `color`, `partNumber`) VALUES ('TV', 'Preto', '141414');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin'