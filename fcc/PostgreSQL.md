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



You can connect to a database by entering \c database_name. You need to connect to add information. Connect to your second_database.


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