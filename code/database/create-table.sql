USE coffeegram;

CREATE TABLE IF NOT EXISTS menu 
(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
tablenum int(100) NOT NULL,
espresso int(100) NOT NULL,
cappuccino int(100) NOT NULL
);