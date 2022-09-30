psql --username=freecodecamp --dbname=postgres

bikes=> ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;

ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;

bikes=> ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;

bikes=> ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);

bikes=> ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();


You have nine bikes in your inventory. Add the first one to your bikes table. It has a type of Mountain and a size of 27. Make sure to put your VARCHAR values in single quotes. The bike_id and available columns should be filled in automatically, so you don't need to worry about those.


bikes=> DELETE FROM bikes WHERE type='9oad';

+---------+----------+------+-----------+
| bike_id |   type   | size | available |
+---------+----------+------+-----------+
|       1 | Mountain |   27 | t         |
|       2 | Mountain |   28 | t         |
|       5 | Mountain |   29 | t         |
|       6 | Road     |   27 | t         |
|       7 | Road     |   28 | t         |
|       9 | Road     |   29 | t         |
|      10 | BMX      |   19 | t         |
|      11 | BMX      |   20 | t         |
|      12 | BMX      |   21 | t         |
+---------+----------+------+-----------+



bikes=> UPDATE bikes SET available=FALSE

UPDATE bikes SET available=true WHERE type!='BMX';



# bash part 

😄 In the script, create an empty function named MAIN_MENU. This will have a few options to enter when the script runs to rent or return a bike.

1. Here's an example:

FUNCTION_NAME() {

}




When a user enters an option at the main menu, you want to take them to the appropriate sub-menu. You can use a case statement for this. Here's an example:

case EXPRESSION in
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  *) STATEMENTS ;;
esac
The expression you want is the $MAIN_MENU_SELECTION variable. You are expecting it to be a 1, 2, or 3 for your various menus. Add a case statement that takes users to their corresponding menus. The * is for when anything else is entered. Take users to the MAIN_MENU when the variable isn't a 1, 2, or 3.



Add an argument to where you call MAIN_MENU in the case statement. It should be Please enter a valid option.. The next step will adjust the function so the message is printed when a user enters an invalid option.

1. Here's an example: FUNCTION_CALL "<argument_message>"

2. Here's how the function call should look:

  *) MAIN_MENU "Please enter a valid option." ;;
3. The whole case statement should look like this:

case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
  2) RETURN_MENU ;;
  3) EXIT ;;
  *) MAIN_MENU "Please enter a valid option." ;;
esac



To get the bikes available, you need to query the database from your script. Below the "shebang", add a PSQL variable that looks like this: PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c". You will then be able to use it to query the database like this: $($PSQL "<query_here>").



Below the new variable, use echo to print it. Place it in double quotes so it prints any new lines.




Instead of directly printing the list, pipe the output into a while loop that reads each line. Here's how that looks:

echo "$AVAILABLE_BIKES" | while read <VAR_1> <VAR_2> <VAR_3> <VAR_4> <VAR_5>
do
  <STATEMENTS>
done
It will read the first line of your AVAILABLE_BIKES variable into the five variables. Each variable being the next word in the line. Read each line into variables, BIKE_ID BAR TYPE BAR SIZE. In the <STATEMENTS> area, use echo to print the BIKE_ID, TYPE, and SIZE variables, in that order.


Next, you want to find out how to test if the user input is a number. In the terminal, enter [[ a =~ [0-9] ]]; echo $? to see if a is a number. The conditional expression will run, and echo $? will print the exit code of it (the last command).

$ [[ a =~ [0-9] ]]; echo $?
get 1


It printed 1 for false. Meaning that a did not match the pattern [0-9], or a did not contain a number from 0-9. Enter the same commands, but check if a1 matches the pattern.

$ [[ a1 =~ [0-9] ]]; echo $?
get 0


That printed 0 for true. a1 does contain a number from 0-9. Enter the same command, but change the pattern to ^[0-9]$. The ^ signifies the start of the pattern, and $ means the end. So the input will have to start, contain a number 0-9, and end.

$ [[ a1 =~ ^[0-9]$ ]]; echo $?
get 1



11 did not match because the pattern only allows a single number. Add a + after the [0-9] to allow any strings that start, contain one or more numbers, and end.

$ [[ 11 =~ ^[0-9]+$ ]]; echo $?
get 0


So that pattern will match any positive integers. You want to check if the input is not a number. Add ! in front of the comparison of the previous command to do that.

1. Enter the previous command with the suggested changed

2. The previous command was [[ 11 =~ ^[0-9]+$ ]]; echo $?

3. Enter [[ ! 11 =~ ^[0-9]+$ ]]; echo $? in the terminal


. Be sure to use single quotes around VARCHAR values