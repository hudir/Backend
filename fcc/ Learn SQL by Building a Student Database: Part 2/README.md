

psql --username=freecodecamp --dbname=postgres

Your database isn't here. You can use the .sql file you created at the end of Part 1 to rebuild it. I recommend "splitting" the terminal. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "Terminal" menu, and clicking "Split Terminal". Once you've done that, enter psql -U postgres < students.sql in it to rebuild the database.

You will want to query the database again to get info about the students to display. Add the same PSQL variable you use in your insert_data.sh script. It looked like this: PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"

echo -e "\n$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa=4.0 ;")"


Below the PSQL variable you just added, use echo to print First name, last name, and GPA of students with a 4.0 GPA:. Use the -e flag to put a new line at the beginning of the sentence.

1. The new line character is \n

2. Here's an example of the command: echo -e "\n<text_here>"

3. At the bottom of the student_info.sh file, add this:

echo -e "\nFirst name, last name, and GPA of students with a 4.0 GPA:"


Just the first_name column was returned that time. You can specify as many columns you want returned by separating them with commas. View the first_name, last_name and gpa columns from the students table.


You can return only rows you want by adding WHERE <condition> to your query. A condition can consist of a column, an operator, and a value. Use one of these to view the same columns as before but only rows WHERE gpa < 2.5.


That only returned students with a GPA of 3.8 or better. There's equal (=) and not equal (!=) operators as well. View the same columns for students that don't have a 4.0 gpa.


The right query will get you only the data you are looking for. Back in your student_info.sh file, add an echo command to the bottom that prints what the sentence above it asks for. Place double quotes around it like this: echo "$($PSQL "<query_here>")". This will make it so the output isn't all on one line.


The operators you used with numbers in the last section can be used on text as well. Use the = to view all majors named Game Design. Don't forget that You need single quotes around text values.


The operators you used with numbers in the last section can be used on text as well. Use the = to view all majors named Game Design. Don't forget that You need single quotes around text values.
                                    ^
students=> SELECT * FROM majors WHERE major='Game Design';


Game Design was not included in the results because it is not > 'Game Design'. Try it with the greater than or equal to operator.

It included Game Design in the results that time. So if you want to see results that start with a G or after, you could use major >= 'G'. View the majors that come before G.
students=> SELECT * FROM majors WHERE major < 'G';

Looks like there is five of them. Add another sentence like the others that says: First name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:


That returned 18 rows. You can use multiple conditions after WHERE with AND or OR, among others. Just add the keyword and another condition. In the psql prompt, use the same command as before, but add an OR to also return rows of students with a 3.9 GPA.


This showed all students whose GPA is less than 2.3 because the final OR condition was true for them. It didn't matter what their last name started with. You can group conditions together with parenthesis like this: WHERE <condition_1> AND (<condition_2> OR <condition_2>). This would only return rows where <condition_1> is true and one of the others is true. View students whose last name is before M that have a GPA of 3.9 or less than 2.3.
```bash
students=> SELECT * FROM students WHERE last_name < 'M' AND (gpa=3.9 OR gpa < 2.3);
```



There's a few that contain the word Algorithms. You can use LIKE to find patterns in text like this: WHERE <column> LIKE '<pattern>'. An underscore (_) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern '_lgorithms'.

students=> select * from courses WHERE course LIKE '_lgorithms';


That pattern matched only rows that had exactly one character, followed by lgorithms. Another pattern character is %. It means anything can be there. To find names that start with W, you could use W%. View the courses that end in lgorithms.

students=> select * from courses WHERE course LIKE '%lgorithms';


Combine the two pattern matching characters to show courses that have a second letter of e.

students=> select * from courses WHERE course LIKE '_e%';


There they are. You can use NOT LIKE to find things that don't match a pattern. View courses that don't contain a space.

students=> select * from courses WHERE course NOT LIKE '% %';


Five courses without a space. Try finding the ones that contain an A.

students=> select * from courses WHERE course LIKE '%A%';

ILIKE will ignore the case of the letters when matching. Use it to see the courses with an A or a.

students=> select * from courses WHERE course ILIKE '%A%';


You combine these like any other conditions. View the courses that don't have a capital or lowercase A and have a space.

students=> select * from courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';

All the fields that are empty or blank are null. You can access them using IS NULL as a condition like this: WHERE <column> IS NULL. View the students who don't have a GPA.


Inversely, you can use IS NOT NULL to see rows that aren't null. View all the info on students that do have a GPA.

You can specify the order you want your results to be in by adding ORDER BY <column_name> at the end of a query. In the psql prompt, view all the info in the students table in order by the GPA's.

That put the lowest GPA's at the top. When using ORDER BY, it will be in ascending (ASC) order by default. Add DESC (descending) at the end of the last query to put the highest ones at the top.

students=> SELECT * FROM students ORDER BY gpa ASC;
students=> SELECT * FROM students ORDER BY gpa DESC;



Now, the highest GPA's are at the top. You can add more columns to the order by separating them with a comma like this: ORDER BY <column_1>, <column_2>. Any matching values in the first ordered column will then be ordered by the next. View all the student info with the highest GPA's at the top, and in alphabetical order by first_name if the GPA's match.

students=> SELECT * FROM students ORDER BY gpa DESC , first_name;


Many times, you only want to return a certain number of rows. You can add LIMIT <number> at the end of the query to only get the amount you want. View the students in the same order as the last command, but only return the first 10 rows.

students=> SELECT * FROM students ORDER BY gpa DESC , first_name LIMIT 10;

The order of the keywords in your query matters. You cannot put LIMIT before ORDER BY, or either of them before WHERE. View the same number of students, in the same order, but don't get the ones who don't have a GPA.

SELECT * FROM students WHERE gpa IS NOT NULL ORDER BY gpa DESC , first_name LIMIT 10;