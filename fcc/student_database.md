 Type ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY; into the psql prompt

 Create the last column, gpa. The data in the CSV shows that they are decimals with a length of 2 and 1 number is to the right of the decimal. So give it a data type of NUMERIC(2,1).



The foreign key is still missing. Let's fill in the majors table next. Add a major_id column to it. Make it a type of SERIAL and the PRIMARY KEY for this table.

students=> ALTER TABLE majors ADD COLUMN major_id SERIAL PRIMARY KEY;


This table looks good. Now, set the major_id column from the students table as a foreign key that references the major_id column from the majors table. Here's an example of how to do that: ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);
students=> ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);

There's one thing missing. This table doesn't have a primary key. The data from courses.csv will go in this table. A single major will be in it multiple times, and same with a course. So neither of them can be a primary key. But there will never be a row with the same two values as another row. So the two columns together, are unique. You can create a composite primary key that uses more than one column as a unique pair like this: ALTER TABLE <table_name> ADD PRIMARY KEY(<column_name>, <column_name>); Add a composite primary key to the table using the two columns.

students=> ALTER TABLE majors_courses ADD PRIMARY KEY(major_id , course_id);