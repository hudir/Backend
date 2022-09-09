Your virtual machine comes with PostgreSQL installed. You will use the Psql terminal application to interact with it. Log in by typing 
```
psql --username=freecodecamp dbname=postgres 
```
into the terminal and pressing enter.

Notice that the prompt changed to let you know that you are now interacting with PostgreSQL. First thing to do is see what databases are here. Type 
```
\l 
```
into the prompt to list them.


The databases you see are there by default. You can make your own like this:
```
CREATE DATABASE database_name;
```
The capitalized words are keywords telling PostgreSQL what to do. The name of the database is the lowercase word. Note that all commands need a semi-colon at the end. Create a new database named first_database.

t worked. Your new database is there. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named second_database.



You can connect to a database by entering 
```
\c database_name
```
. You need to connect to add information. Connect to your second_database.


You should see a message that you are connected. Notice that the prompt changed to second_database=>. So the postgres=> prompt before must have meant you were connected to that database. A database is made of tables that hold your data. Enter \d to display the tables.


Looks like there's no tables or relations yet. Similar to how you created a database, you can create a table like this:
```
CREATE TABLE table_name();
```
Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named first_table in second_database.


You can view more details about a table by adding the table name after the display command like this: \d table_name. View more details about your second_table.

Tables need columns to describe the data in them, yours doesn't have any yet. Here's an example of how to add one:
```
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
```
Add a column to second_table named first_column. Give it a data type of INT. INT stands for integer. Don't forget the semi-colon. 😄



It's gone. Use the ALTER TABLE and DROP COLUMN keywords again to drop first_column.



A common data type is VARCHAR. It's a short string of characters. You need to give it a maximum length when using it like this: VARCHAR(30).

Add a new column to second_table, give it a name of name and a data type of VARCHAR(30).




It worked. Rows are the actual data in the table. You can add one like this:

INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
Insert a row into second_table. Give it an id of 1, and a username of Samus. The username column expects a VARCHAR, so you need to put Samus in single quotes like this: 'Samus'.


SELECT columns FROM table_name;






DELETE FROM table_name WHERE condition;
Remove Luigi from your table. The condition you want to use is username='Luigi'.

DROP TABLE table_name;
ALTER DATABASE database_name RENAME TO new_database_name;


The SERIAL type will make your column an INT with a NOT NULL constraint, and automatically increment the integer when a new row is added. View the details of the characters table to see what SERIAL did for you.
mario_database=> ALTER TABLE characters ADD COLUMN name VARCHAR(30) NOT NULL;



Adding rows one at a time is quite tedious. Here's an example of how you could have added the previous three rows at once:

INSERT INTO characters(name, homeland, favorite_color)
VALUES('Mario', 'Mushroom Kingdom', 'Red'),
('Luigi', 'Mushroom Kingdom', 'Green'),
('Peach', 'Mushroom Kingdom', 'Pink');


If you don't get a message after a command, it is likely incomplete. This is because you can put a command on multiple lines. Add two more rows. Give the first one values of: Daisy, Sarasaland, and Yellow. The second: Yoshi, Dinosaur Land, and Green. Try to do it with one command.


It looks good, but there's a few mistakes. You can change a value like this:

UPDATE table_name SET column_name=new_value WHERE condition;
You used username='Samus' as a condition earlier. SET Daisy's favorite_color to Orange. You can use the condition name='Daisy' to change her row


UPDATE characters SET favorite_color='Orange' WHERE name='Daisy';


Actually, you should put that in order. Here's an example:

SELECT columns FROM table_name ORDER BY column_name;
View all the data again, but put it in order by character_id.


It looks good. Next, you are going to add a primary key. It's a column that uniquely identifies each row in the table. Here's an example of how to set a PRIMARY KEY:

ALTER TABLE table_name ADD PRIMARY KEY(column_name);
ALTER TABLE characters ADD PRIMARY KEY(character_id);


You can see the key for your name column at the bottom. It would have been better to use character_id for the primary key. Here's an example of how to drop a constraint:

ALTER TABLE table_name DROP CONSTRAINT constraint_name;
Drop the primary key on the name column. You can see the constraint name is characters_pkey.