create database guestbook;
use guestbook;

create table post(
	id int(5) not null auto_increment,
    name varchar(25) not null,
    message varchar(25) not null,
    primary key(id)
);