psql --username=freecodecamp --dbname=postgres

bikes=> ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;

ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;

bikes=> ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;

bikes=> ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);

bikes=> ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();