CREATE DATABASE MyApp_db;

USE MyApp_db;

CREATE TABLE company{
    idcompany INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    subtitle VARCHAR(100),
    descriptio VARCHAR(255),
    numphone INT(15)
};

CREATE TABLE products{
    idproduct INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    descriptio VARCHAR(255),
    prize DECIMAL(10,3),
}
DESCRIBE company;
DESCRIBE products;