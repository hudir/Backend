 Type ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY; into the psql prompt

 Create the last column, gpa. The data in the CSV shows that they are decimals with a length of 2 and 1 number is to the right of the decimal. So give it a data type of NUMERIC(2,1).



The foreign key is still missing. Let's fill in the majors table next. Add a major_id column to it. Make it a type of SERIAL and the PRIMARY KEY for this table.

students=> ALTER TABLE majors ADD COLUMN major_id SERIAL PRIMARY KEY;


This table looks good. Now, set the major_id column from the students table as a foreign key that references the major_id column from the majors table. Here's an example of how to do that: ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);
students=> ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);

There's one thing missing. This table doesn't have a primary key. The data from courses.csv will go in this table. A single major will be in it multiple times, and same with a course. So neither of them can be a primary key. But there will never be a row with the same two values as another row. So the two columns together, are unique. You can create a composite primary key that uses more than one column as a unique pair like this: ALTER TABLE <table_name> ADD PRIMARY KEY(<column_name>, <column_name>); Add a composite primary key to the table using the two columns.

students=> ALTER TABLE majors_courses ADD PRIMARY KEY(major_id , course_id);



First, you should add all the info from the courses.csv file since you need the major_id for inserting the student info. cat is a terminal command for printing the contents of a file. Here's an example: cat <filename>. Below the comment you added, use it to print courses.csv.


It worked. Instead of printing the content, you can pipe that output into a while loop so you can go through the rows one at a time. It looks like this:

cat courses.csv | while read MAJOR COURSE
do
  <STATEMENTS>
done
Each new line will be read into the variables, MAJOR and COURSE. Add the above to your cat command. In the STATEMENTS area, use echo to print the MAJOR variable.



It's looping, but the MAJOR variable is only being set to the first word. There's a default IFS variable in bash. IFS stands for "Internal Field Separator". View it with declare -p IFS.

This variable is used to determine word boundaries. It defaults to spaces, tabs, and new lines. This is why the MAJOR variable was set to only the first word on each line from the data. Between the while and read commands, set the IFS to a comma like this: IFS=","




It helps to plan out what you want to happen. For each loop, you will want to add the major to the database if it isn't in there yet. Same for the course. Then add a row to the majors_courses table. Add these single line comments in your loop in this order: get major_id, if not found, insert major, get new major_id, get course_id, if not found, insert course, get new course_id, insert into majors_courses.

1. Here's an example of a single comment: # <comment>

2. Add the nine suggested single line comments, each on their own line, in the order given

3. It should look like this:

do
  # get major_id

  # if not found

  # insert major

  # get new major_id

  # get course_id

  # if not found

  # insert course

  # get new course_id

  # insert into majors_courses

done

You used the psql command to log in and interact with the database. You can use it to just run a single command and exit. Above your loop, add a PSQL variable that looks like this: PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c". This will allow you to query your database from your script. The important parts are the username, dbname, and the -c flag that is for running a single command and exiting. The rest of the flags are for formatting.


Now, you can query your database using the PSQL variable like this: $($PSQL "<query_here>"). Below the get major_id comment in your loop, create a MAJOR_ID variable. Set it equal to the result of a query that gets the major_id of the current MAJOR in the loop. Make sure to put your MAJOR variable in single quotes.

1. Here's an example of how it looks: MAJOR_ID=$($PSQL "<query_here>")

2. For the query, you want to use the SELECT, FROM, and WHERE keywords

3. Here's an example of how the query part looks: SELECT <column_name> FROM <table_name> WHERE <condition>

4. The condition you want is major_id='$MAJOR'

5. Here's how the query should look: SELECT major_id FROM majors WHERE major='$MAJOR'

6. Here's how the whole line should look: MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")



So it went through each major from the CSV file and tried to find major_id for each one from the database. Looks like it only found the one you manually inserted earlier. The rest were empty. Below your first if not found comment, add an if condition that checks if the MAJOR_ID variable is empty. You can do that with this test: [[ -z $MAJOR_ID ]]. Place the next two comments in the statements area of the if.
-z STRING      True if string is empty.
