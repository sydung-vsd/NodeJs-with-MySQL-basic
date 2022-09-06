DROP DATABASE  IF EXISTS demo_node_api;
CREATE DATABASE demo_node_api DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

use demo_node_api;

CREATE TABLE IF NOT EXISTS author
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS book
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(100) ,
    author_id INT NOT NULL,
    FOREIGN KEY(author_id) REFERENCES author (id)
);

INSERT INTO author(name) VALUES
    ("Nam Cao"),
    ("Ngô Tất Tố"),
    ("Tố Hữu");

INSERT INTO book(name,author_id) VALUES
    ("Lão Hạc",1),
    ("Chí Phèo",2),
    ("Lượm",1),
    ("Chị Dậu",1);