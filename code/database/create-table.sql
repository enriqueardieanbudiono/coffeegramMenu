USE coffeegram;

CREATE TABLE IF NOT EXISTS menu 
(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
tablenum int(100) NULL,
espresso int(100) NULL,
americano_longblack int(100) NULL,
cappuccino int(100) NULL,
latte int(100) NULL
);