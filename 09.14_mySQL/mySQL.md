# mySQL

## create a user and give provoleges to him(good only give one accunt only right to run one database)
```
CREATE USER "hudir"@"localhost" IDENTIFIED WITH mysql_native_password BY "123456";
GRANT SELECT, INSERT, UPDATE, CREATE, INDEX, DROP, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES ON test.* TO "hudir"@"localhost";
FLUSH PRIVILEGES;
```

## with in the database
```
show columns from students;
SELECT * FROM students ORDER BY age;
SELECT * FROM students ORDER BY age DESC;
SELECT info From students WHERE id=1;
SELECT name AS "Students Names", age AS "ALT" FROM students;
SELECT * FROM students WHERE name="hudir";
 SELECT * FROM students WHERE name LIKE "HudIr";

 SELECT * FROM students WHERE age >= 50;

SELECT * FROM students WHERE age >= 50 AND name = "Bob";

SELECT * FROM students WHERE age BETWEEN 25 AND 40;
SELECT * FROM students WHERE age > 25 AND age <40;
SELECT name AS "STUDENTS NAMES", age AS "AGE" FROM students WHERE age BETWEEN 25 AND 70 ORDER BY age;

SELECT * FROM students WHERE age >= 25 AND age <= 70 LIMIT 3;


SELECT MAX(age) FROM students;
SELECT MIN(age) FROM students;


SELECT name , MIN(age) FROM students GROUP BY name;

SELECT AVG(age) FROM students;
SELECT COUNT(age) FROM students;
SELECT SUM(age) FROM students;

SELECT name, (age+1) FROM students;


```


## updata

```
UPDATE students SET age=100, info="new info!" WHERE name ="Zhuo";

DELETE FROM students WHERE age =22;

```

## join table
```
SELECT students.name, students.age, students.info, address.country , address.city, address.street FROM students INNER JOIN address ON students.address_id = address.id;



SELECT students.*, address.*, skills.* FROM students INNER JOIN address ON students.address_id=address.id INNER JOIN skills ON
students.skill_id = skills.id WHERE skills.skill="SQL" OR skills.skill="JavaScript";
```