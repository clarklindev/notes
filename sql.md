# SQL

### bookmark table of contents

0:00:00 Introduction
0:01:02 What is SQL?
0:04:24 Cheat Sheet
0:04:50 Installing MySQL on Mac
0:09:48 Installing MySQL on Windows
0:15:08 Creating the Databases for this Course
0:23:40 The SELECT Statement
0:29:30 The SELECT Clause
0:38:18 The WHERE Clause
0:43:35 The AND, OR, and NOT Operators
0:51:38 The IN Operator
0:54:41 The BETWEEN Operator
0:56:53 The LIKE Operator
1:02:31 The REGEXP Operator
1:11:51 The IS NULL Operator
1:14:18 The ORDER BY Operator
1:21:23 The LIMIT Operator

1:24:50 Inner Joins
1:33:16 Joining Across Databases
1:36:03 Self Joins
1:40:17 Joining Multiple Tables
1:47:03 Compound Join Conditions
1:50:44 Implicit Join Syntax
1:53:04 Outer Joins
1:59:31 Outer Join Between Multiple Tables
2:05:50 Self Outer Joins
2:08:02 The USING Clause
2:13:25 Natural Joins
2:14:46 Cross Joins
2:18:01 Unions
2:26:29 Column Attributes
2:29:54 Inserting a Single Row
2:35:40 Inserting Multiple Rows
2:38:58 Inserting Hierarchical Rows
2:44:51 Creating a Copy of a Table
2:53:38 Updating a Single Row
2:57:33 Updating Multiple Rows
3:00:47 Using Subqueries in Updates
3:06:24 Deleting Rows
3:07:48 Restoring Course Databases

- install SQL Community Server
- MySQL workbench
- open .sql file
- it should have code to create tables
- click the thunder icon (it will execute the selected lines OR the entire script)
- refresh schemas
- once the .sql code has executed, you can close that window as the tables are created
- SQL is not case sensitive but its good practice to CAPITALIZE SQL keywords
- terminate each statement with semicolon;
- comments in SQL: use -- to ignore a SQL statement
- every row is called a 'record'

## View Database tables

- Under Schemas, select the database
- can also execute this by code:

### USE - Select a database named: sql_store

```sql
USE sql_store;
```

## The Select Statement

### SELECT (column) FROM (table) WHERE (condition) ORDER BY (name of columns to sort results on)

- note: the order matters...SELECT / FROM / WHERE / ORDER BY
- under Tables, select the table you want to view
- click the icon that looks like a table with a thunder icon
- executes code (shows all table data)
- here we selecting all columns (\* )
- use `WHERE` to filter
- use `ORDER BY` (name of columns) to sort results on

```sql
SELECT * FROM sql_store.customers;
```

```sql
SELECT *
FROM customers
WHERE customer_id = 1
ORDER BY first_name
```

## the SELECT clause

- we can select just the columns we want from a table

### Selecting some columns from Table

- populates result set table
- can use parenthesis
- `AS` aliases can be used, if the alias has spaces, wrap in ''
- `DISTINCT` keyword can be used to return unique values from SQL (ie. remove duplicates)

```sql
SELECT
last_name,
first_name,
points,
(points * 10) + 100 AS 'discount factor'
FROM customers
```

```sql
SELECT DISTINCT state
FROM customers
```

```sql
SELECT
name,
unit_price AS 'unit price',
(unit_price * 1.1) AS 'new price'
FROM Products
```

## the WHERE clause

- Where can be used as a filter to limit results, if true, it is included in result set
- comparison operators can be used on Date values as strings eg. '1990-01-01'

### Comparison operators

- \>
- \>=
- \<
- \<=
- \=
- \!= OR <> (both mean not equal)

```sql
SELECT *
FROM Customers
WHERE points > 3000
```

```sql
SELECT *
FROM Customers
where state = 'VA'      --note: string 'va' is not case sensative
```

## Date syntax

```sql
'1990-01-01' --date syntax YYYY-MM-DD
```

```sql
SELECT *
FROM Customers
WHERE birth_date > '1990-01-01'
```

### Get Orders placed this year

```sql
SELECT *
FROM Orders
WHERE order date >= '2019-01-01'
```

## AND , OR , NOT operators

- Combining multiple search conditions
- `AND` operator is always evaluated first

```sql
SELECT *
FROM Orders
WHERE order date >= '2019-01-01' OR
    (points > 1000 AND state = 'VA')
```

- `WHERE NOT` operator can negate condition, but you can simplify by turning the expression into its negated value

```sql
SELECT *
FROM Orders
-- WHERE NOT (birth_date > '1990-01-01' OR points > 1000)

--becomes
WHERE birth_date <= '1990-01-01' AND points <= 1000
```

#### Exercise

- From the order_items table, get the items for order #6
  where the total price is greater than 30

```sql
SELECT *
FROM order_items
WHERE order_id = 6 AND
(quantity * unit_price) > 30
```

## In Operator

- `IN` is like `OR`

```sql
SELECT *
FROM Customers
-- WHERE state = 'VA' OR state = 'GA' OR state = 'FL'
--same as
WHERE state IN ('VA', 'FL', 'GA')
WHERE state NOT IN ('VA', 'FL', 'GA')
```

#### Exercise

- Return products with quantity in stock equal to 49, 38, 72

```sql
SELECT *
FROM products
WHERE quantity_in_stock IN (49, 38, 72)
```

## BETWEEN operator

- values are inclusive

```sql
SELECT *
FROM customers
-- WHERE points >= 1000 AND points <= 3000
WHERE points BETWEEN 1000 AND 3000

```

#### Exercise

- return customers born between 1990/1/1 and 1/1/2000

```sql
SELECT *
FROM customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01'
```

###
