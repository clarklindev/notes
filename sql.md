# SQL

- MySQL workbench
- open .sql file
- it should have code to create tables
- click the thunder icon (it will execute the selected lines OR the entire script)
- refresh schemas
- once the .sql code has executed, you can close that window as the tables are created

## View Database tables

- Under Schemas, select the database
- can aslo execute this by code:

```sql
USE sql_store
```

- under Tables, select the table you want to view
- click the icon that looks like a table with a thunder icon
- executes code (shows all table data)

```sql
SELECT * FROM sql_store.customers;
```

- every row is called a 'record'

## The Select Statement

```sql
USE sql_store
SELECT
```
