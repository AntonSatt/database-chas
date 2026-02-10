const questions = [
  // --- Lesson 1: Intro to Databases ---
  {
    id: 1,
    category: "Intro to Databases",
    question: "What is the main advantage of using a database over storing data in flat files?",
    options: [
      "Databases use less disk space",
      "Databases allow efficient storage, retrieval, and management of data",
      "Databases don't require any software to run",
      "Flat files are faster than databases"
    ],
    correct: 1,
  },
  {
    id: 2,
    category: "Intro to Databases",
    question: "Which of the following is a relational database management system (RDBMS)?",
    options: ["MongoDB", "Redis", "MariaDB", "Memcached"],
    correct: 2,
  },
  {
    id: 3,
    category: "Intro to Databases",
    question: "What does SQL stand for?",
    options: [
      "Simple Query Logic",
      "Structured Query Language",
      "Standard Query Library",
      "System Query Language"
    ],
    correct: 1,
  },
  {
    id: 4,
    category: "Intro to Databases",
    question: "Which SQL command is used to retrieve data from a table?",
    options: ["INSERT INTO", "UPDATE", "SELECT", "CREATE TABLE"],
    correct: 2,
  },
  {
    id: 5,
    category: "Intro to Databases",
    question: "What is a primary key?",
    options: [
      "The first column in any table",
      "A special index that uniquely identifies a row in the table",
      "A password used to access the database",
      "The most important data in a row"
    ],
    correct: 1,
  },
  {
    id: 6,
    category: "Intro to Databases",
    question: "What is the main architectural difference between MariaDB and SQLite?",
    options: [
      "MariaDB is free but SQLite is paid",
      "SQLite supports more users than MariaDB",
      "MariaDB uses a server-client architecture, SQLite saves data to a single file",
      "MariaDB only works on Linux, SQLite works everywhere"
    ],
    correct: 2,
  },
  {
    id: 7,
    category: "Intro to Databases",
    question: "Which type of database stores all data in RAM memory?",
    options: [
      "Relational databases",
      "NoSQL databases",
      "In-memory databases",
      "File-based databases"
    ],
    correct: 2,
  },
  {
    id: 8,
    category: "Intro to Databases",
    question: "Which SQL command permanently deletes an entire table?",
    options: ["DELETE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE"],
    correct: 2,
  },
  {
    id: 30,
    category: "Intro to Databases",
    question: "What is an index in a database?",
    options: [
      "The first row of data in a table",
      "A structure that speeds up sorting and filtering on specific columns at the cost of extra storage",
      "A type of database backup",
      "The table of contents in the database documentation"
    ],
    correct: 1,
  },
  {
    id: 35,
    category: "Intro to Databases",
    question: "MariaDB is a fork of which database system?",
    options: ["PostgreSQL", "SQLite", "MySQL", "Oracle DB"],
    correct: 2,
  },
  {
    id: 36,
    category: "Intro to Databases",
    question: "Which of the following is a NoSQL database?",
    options: ["MariaDB", "SQLite", "MySQL", "MongoDB"],
    correct: 3,
  },
  {
    id: 41,
    category: "Intro to Databases",
    question: "What does CRUD stand for?",
    options: [
      "Create, Read, Update, Delete",
      "Copy, Rename, Undo, Drop",
      "Connect, Retrieve, Upload, Disconnect",
      "Create, Replace, Use, Destroy"
    ],
    correct: 0,
  },
  {
    id: 42,
    category: "Intro to Databases",
    question: "Which SQL command is used to add a new row of data to a table?",
    options: ["ADD ROW", "INSERT INTO", "CREATE ROW", "APPEND"],
    correct: 1,
  },
  {
    id: 43,
    category: "Intro to Databases",
    question: "What does the UPDATE command do in SQL?",
    options: [
      "Creates a new table",
      "Deletes data from a table",
      "Modifies existing data in a table",
      "Retrieves data from a table"
    ],
    correct: 2,
  },
  {
    id: 44,
    category: "Intro to Databases",
    question: "Which clause is used in a SELECT statement to filter rows?",
    options: ["FILTER", "WHERE", "HAVING", "LIMIT"],
    correct: 1,
  },
  {
    id: 45,
    category: "Intro to Databases",
    question: "What is a foreign key?",
    options: [
      "A key used to encrypt database data",
      "A column that references a primary key in another table",
      "A key used by external applications only",
      "The second column in every table"
    ],
    correct: 1,
  },
  {
    id: 46,
    category: "Intro to Databases",
    question: "What is a JOIN used for in SQL?",
    options: [
      "Merging two databases into one",
      "Combining rows from two or more tables based on a related column",
      "Adding a new column to a table",
      "Creating a backup of the database"
    ],
    correct: 1,
  },
  {
    id: 47,
    category: "Intro to Databases",
    question: "What is SQLite commonly used for?",
    options: [
      "Large enterprise applications with many concurrent users",
      "Local storage in mobile apps, browsers, and embedded systems",
      "Distributed cloud computing only",
      "Real-time streaming data"
    ],
    correct: 1,
  },
  {
    id: 48,
    category: "Intro to Databases",
    question: "What does the DELETE command do in SQL?",
    options: [
      "Removes the entire table structure",
      "Removes rows from a table based on a condition",
      "Deletes the entire database",
      "Removes a column from a table"
    ],
    correct: 1,
  },
  // --- Lesson 2: More SQL ---
  {
    id: 9,
    category: "More SQL",
    question: "What is a SQL transaction?",
    options: [
      "A way to pay for database usage",
      "A group of SQL operations treated as all-or-nothing",
      "A type of database backup",
      "A log of all SELECT queries"
    ],
    correct: 1,
  },
  {
    id: 10,
    category: "More SQL",
    question: "What does the DISTINCT keyword do in a SELECT statement?",
    options: [
      "Sorts the results in ascending order",
      "Returns only unique values from the specified column",
      "Limits the number of results returned",
      "Filters out NULL values"
    ],
    correct: 1,
  },
  {
    id: 11,
    category: "More SQL",
    question: "What is the difference between WHERE and HAVING?",
    options: [
      "There is no difference",
      "WHERE is used with SELECT and HAVING with INSERT",
      "HAVING filters on aggregated/result values, WHERE filters on row values",
      "WHERE is faster than HAVING"
    ],
    correct: 2,
  },
  {
    id: 12,
    category: "More SQL",
    question: "What is a VIEW in SQL?",
    options: [
      "A graphical interface to the database",
      "A saved query that can be used like a table in SELECT statements",
      "A type of index",
      "A backup of a table"
    ],
    correct: 1,
  },
  {
    id: 13,
    category: "More SQL",
    question: "What does a TRIGGER do in SQL?",
    options: [
      "Starts the database server",
      "Automatically executes a query in response to certain events",
      "Deletes old records on a schedule",
      "Locks a table for exclusive access"
    ],
    correct: 1,
  },
  {
    id: 14,
    category: "More SQL",
    question: "In SQL pattern matching with LIKE, which character matches any sequence of characters?",
    options: ["*", "_", "%", "#"],
    correct: 2,
  },
  {
    id: 15,
    category: "More SQL",
    question: "What is the purpose of the IN keyword in SQL?",
    options: [
      "To insert data into a table",
      "To replace multiple OR conditions with a list of values",
      "To join two tables together",
      "To check if a value exists in a subquery only"
    ],
    correct: 1,
  },
  {
    id: 31,
    category: "More SQL",
    question: "What does the NOT keyword do when combined with LIKE?",
    options: [
      "It inverts the pattern match, returning rows that do NOT match the pattern",
      "It makes the search case-insensitive",
      "It returns only NULL values",
      "It reverses the sort order"
    ],
    correct: 0,
  },
  {
    id: 37,
    category: "More SQL",
    question: "When using LIKE, which character matches exactly one character?",
    options: ["%", "_", "*", "?"],
    correct: 1,
  },
  {
    id: 49,
    category: "More SQL",
    question: "What does the GROUP BY clause do?",
    options: [
      "Sorts the results alphabetically",
      "Groups rows that share a value so aggregate functions can be applied to each group",
      "Limits the output to a set number of rows",
      "Joins two tables together"
    ],
    correct: 1,
  },
  {
    id: 50,
    category: "More SQL",
    question: "Which aggregate function returns the number of rows?",
    options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
    correct: 2,
  },
  {
    id: 51,
    category: "More SQL",
    question: "What does ORDER BY do in a SQL query?",
    options: [
      "Groups rows by a column value",
      "Filters rows based on a condition",
      "Sorts the result set by one or more columns",
      "Limits the number of returned rows"
    ],
    correct: 2,
  },
  {
    id: 52,
    category: "More SQL",
    question: "What is a subquery?",
    options: [
      "A query that runs on a backup database",
      "A query nested inside another SQL query",
      "A query that only returns one row",
      "A query that does not use SELECT"
    ],
    correct: 1,
  },
  {
    id: 53,
    category: "More SQL",
    question: "What does the LENGTH() function do in SQL?",
    options: [
      "Returns the number of tables in the database",
      "Returns the number of characters in a string",
      "Returns the number of rows in a table",
      "Returns the size of the database in bytes"
    ],
    correct: 1,
  },
  {
    id: 54,
    category: "More SQL",
    question: "Which keyword is used to sort results in descending order?",
    options: ["ASC", "DESC", "REVERSE", "DOWN"],
    correct: 1,
  },
  {
    id: 55,
    category: "More SQL",
    question: "What is the purpose of the LIMIT clause?",
    options: [
      "To restrict which columns are returned",
      "To set a maximum value for a column",
      "To restrict the number of rows returned by a query",
      "To limit the size of the database"
    ],
    correct: 2,
  },
  {
    id: 56,
    category: "More SQL",
    question: "When is a TRIGGER with BEFORE useful?",
    options: [
      "To run a query after the database shuts down",
      "To validate or modify data before it is inserted or updated",
      "To speed up SELECT queries",
      "To automatically delete old backups"
    ],
    correct: 1,
  },
  // --- Lesson 3: Database Design ---
  {
    id: 16,
    category: "Database Design",
    question: "What is an insertion anomaly?",
    options: [
      "When you insert too many rows at once",
      "When you cannot add new data because of missing required dependent data",
      "When inserting data causes the database to crash",
      "When duplicate data is inserted by accident"
    ],
    correct: 1,
  },
  {
    id: 17,
    category: "Database Design",
    question: "What does First Normal Form (1NF) require?",
    options: [
      "All tables must have a foreign key",
      "Each field in a table must contain only a single value (no multi-valued fields)",
      "There can be no NULL values in any column",
      "Every table must have at least 3 columns"
    ],
    correct: 1,
  },
  {
    id: 18,
    category: "Database Design",
    question: "What additional requirement does 2NF add beyond 1NF?",
    options: [
      "All columns must be indexed",
      "All non-key values must depend on the entire primary key",
      "No table can have more than 10 columns",
      "All tables must have auto-incrementing IDs"
    ],
    correct: 1,
  },
  {
    id: 19,
    category: "Database Design",
    question: "What is the key rule of Third Normal Form (3NF)?",
    options: [
      "Every table must have exactly three columns",
      "No duplicate rows are allowed",
      "All non-key values must depend on nothing but the primary key",
      "Foreign keys are not allowed"
    ],
    correct: 2,
  },
  {
    id: 20,
    category: "Database Design",
    question: "What is a deletion anomaly?",
    options: [
      "When deleting a record accidentally removes unrelated important data",
      "When the DELETE command fails to execute",
      "When a table cannot be dropped",
      "When a trigger prevents deletion"
    ],
    correct: 0,
  },
  {
    id: 32,
    category: "Database Design",
    question: "What is an update anomaly?",
    options: [
      "When the UPDATE command is too slow",
      "When updating a value in one row doesn't update the same value duplicated in other rows, causing inconsistency",
      "When a database version is out of date",
      "When a trigger blocks an UPDATE"
    ],
    correct: 1,
  },
  {
    id: 38,
    category: "Database Design",
    question: "What is the usual solution for normalizing a database design?",
    options: [
      "Adding more columns to existing tables",
      "Removing all foreign keys",
      "Dividing data into several tables linked via foreign keys",
      "Storing all data in a single table"
    ],
    correct: 2,
  },
  {
    id: 57,
    category: "Database Design",
    question: "What is normalization in the context of database design?",
    options: [
      "Making all column names lowercase",
      "Organizing data to reduce redundancy and prevent anomalies",
      "Converting a NoSQL database to SQL",
      "Compressing the database to save space"
    ],
    correct: 1,
  },
  {
    id: 58,
    category: "Database Design",
    question: "What is a composite primary key?",
    options: [
      "A primary key that uses encryption",
      "A primary key made up of two or more columns together",
      "A primary key that is also a foreign key",
      "A primary key that auto-increments"
    ],
    correct: 1,
  },
  {
    id: 59,
    category: "Database Design",
    question: "What is a one-to-many relationship?",
    options: [
      "Each row in table A links to exactly one row in table B",
      "One row in table A can relate to many rows in table B, but each row in B relates to only one in A",
      "Many rows in table A link to many rows in table B",
      "There is no relationship between the tables"
    ],
    correct: 1,
  },
  {
    id: 60,
    category: "Database Design",
    question: "What is the purpose of a foreign key constraint?",
    options: [
      "To speed up queries on large tables",
      "To ensure a value in one table matches a valid primary key in another table",
      "To prevent any data from being deleted",
      "To automatically create backup copies"
    ],
    correct: 1,
  },
  {
    id: 61,
    category: "Database Design",
    question: "What does CASCADE do when used with a foreign key ON DELETE?",
    options: [
      "It prevents the delete operation",
      "It sets the foreign key value to NULL",
      "It automatically deletes the related rows in the child table",
      "It logs the deletion for auditing"
    ],
    correct: 2,
  },
  {
    id: 62,
    category: "Database Design",
    question: "Why should you avoid storing multiple values in a single column?",
    options: [
      "It uses too much disk space",
      "It violates First Normal Form and makes querying difficult",
      "It causes the database to crash",
      "SQL does not allow text in columns"
    ],
    correct: 1,
  },
  {
    id: 63,
    category: "Database Design",
    question: "What is a many-to-many relationship typically implemented with?",
    options: [
      "A single foreign key in one table",
      "A junction (bridge) table with foreign keys to both related tables",
      "A VIEW that combines two tables",
      "Storing comma-separated IDs in a column"
    ],
    correct: 1,
  },
  // --- Lesson 4: Storage, Backup, Cloud DBs ---
  {
    id: 21,
    category: "Storage & Backup",
    question: "What is the 3-2-1 backup rule?",
    options: [
      "3 databases, 2 servers, 1 admin",
      "3 backups, 2 different media formats, 1 off-site copy",
      "3 tables, 2 indexes, 1 primary key",
      "3 queries per second, 2 connections, 1 timeout"
    ],
    correct: 1,
  },
  {
    id: 22,
    category: "Storage & Backup",
    question: "What is a database snapshot?",
    options: [
      "A screenshot of the database interface",
      "A copy of the data at a specific point in time taken at the filesystem level",
      "A compressed version of the database",
      "A log file of all recent queries"
    ],
    correct: 1,
  },
  {
    id: 23,
    category: "Storage & Backup",
    question: "What is a key risk of using cloud-hosted databases?",
    options: [
      "They are always slower than local databases",
      "They cannot store relational data",
      "Vendor lock-in and reduced control over your data",
      "They don't support SQL"
    ],
    correct: 2,
  },
  {
    id: 33,
    category: "Storage & Backup",
    question: "What does RAID provide for database storage?",
    options: [
      "Faster SQL query execution",
      "Automatic query optimization",
      "High availability and fault resistance through data replication at the storage level",
      "Encryption of all stored data"
    ],
    correct: 2,
  },
  {
    id: 40,
    category: "Storage & Backup",
    question: "What does SLA stand for in the context of cloud databases?",
    options: [
      "Structured Language Agreement",
      "Service Level Agreement",
      "Server Load Average",
      "Standard License Authorization"
    ],
    correct: 1,
  },
  {
    id: 64,
    category: "Storage & Backup",
    question: "Why is it important to test database restores regularly?",
    options: [
      "To make the database faster",
      "To verify that backups actually work and data can be recovered",
      "To reduce the size of the database",
      "To comply with SQL standards"
    ],
    correct: 1,
  },
  {
    id: 65,
    category: "Storage & Backup",
    question: "What is a potential downside of taking a database snapshot?",
    options: [
      "Snapshots cannot be stored on disk",
      "It may require table locking or cache flushing, which can impact performance",
      "Snapshots delete the original data",
      "They only work with NoSQL databases"
    ],
    correct: 1,
  },
  {
    id: 66,
    category: "Storage & Backup",
    question: "What does 'vendor lock-in' mean for cloud databases?",
    options: [
      "The database becomes encrypted and inaccessible",
      "You become dependent on a specific provider's tools and formats, making it hard to switch",
      "The cloud provider locks your account after too many queries",
      "Your data is automatically deleted after a trial period"
    ],
    correct: 1,
  },
  {
    id: 67,
    category: "Storage & Backup",
    question: "What is a key advantage of cloud-hosted databases?",
    options: [
      "They are always free to use",
      "They provide high availability and managed infrastructure",
      "They never require backups",
      "They are faster than local databases in all cases"
    ],
    correct: 1,
  },
  // --- Lesson 5: Database Migrations ---
  {
    id: 24,
    category: "Database Migrations",
    question: "What is a database migration?",
    options: [
      "Moving a database from one server to another",
      "An incremental, versioned set of schema changes applied to a database",
      "Converting a SQL database to NoSQL",
      "Exporting data to a CSV file"
    ],
    correct: 1,
  },
  {
    id: 25,
    category: "Database Migrations",
    question: "Why are migrations preferred over keeping a single schema dump file?",
    options: [
      "Dump files take up more disk space",
      "Migrations allow incremental, versioned updates from any version to any other",
      "Dump files cannot contain CREATE TABLE statements",
      "Migrations are faster to execute"
    ],
    correct: 1,
  },
  {
    id: 34,
    category: "Database Migrations",
    question: "Where is the current migration version typically tracked?",
    options: [
      "In a text file on the developer's desktop",
      "In the database itself",
      "In the application's README file",
      "In the operating system's registry"
    ],
    correct: 1,
  },
  {
    id: 68,
    category: "Database Migrations",
    question: "What problem do migrations solve when multiple versions of an app are in use?",
    options: [
      "They make the app run faster",
      "They allow upgrading the database schema step by step from any version to any other",
      "They automatically fix bugs in SQL queries",
      "They compress old data to save storage"
    ],
    correct: 1,
  },
  {
    id: 69,
    category: "Database Migrations",
    question: "What is a typical naming convention for migration files?",
    options: [
      "Random UUIDs like a3f8-b2c1.sql",
      "Numbered sequential names like 00-create-users.sql, 01-add-column.sql",
      "The date the developer was hired",
      "The name of the developer who wrote it"
    ],
    correct: 1,
  },
  {
    id: 70,
    category: "Database Migrations",
    question: "What happens if you skip a migration step?",
    options: [
      "Nothing, migrations are optional",
      "The database may end up in an inconsistent or broken state",
      "The database automatically fixes itself",
      "All data is deleted"
    ],
    correct: 1,
  },
  {
    id: 71,
    category: "Database Migrations",
    question: "Which of the following is an example of a schema change that a migration might perform?",
    options: [
      "Changing the color theme of the application",
      "Adding a new column to an existing table",
      "Restarting the database server",
      "Updating the operating system"
    ],
    correct: 1,
  },
  // --- Lesson 6 & 7: Python and Databases ---
  {
    id: 26,
    category: "Python & Databases",
    question: "Which Python module is used to interact with SQLite databases?",
    options: ["mariadb", "sqlite3", "psycopg2", "pymongo"],
    correct: 1,
  },
  {
    id: 27,
    category: "Python & Databases",
    question: "What method must be called on a connection object to save changes to the database?",
    options: ["conn.save()", "conn.commit()", "conn.write()", "conn.push()"],
    correct: 1,
  },
  {
    id: 28,
    category: "Python & Databases",
    question: "In MariaDB Connector/Python, how do you use parameterized queries to prevent SQL injection?",
    options: [
      "Use string concatenation with the query",
      "Use f-strings to embed values",
      "Use '?' placeholders and pass values as a tuple",
      "Wrap the query in a try/except block"
    ],
    correct: 2,
  },
  {
    id: 29,
    category: "Python & Databases",
    question: "What does the cursor object allow you to do?",
    options: [
      "Connect to the internet",
      "Execute SQL queries and manage transactions",
      "Create new Python modules",
      "Compile Python code"
    ],
    correct: 1,
  },
  {
    id: 39,
    category: "Python & Databases",
    question: "What does conn.cursor() return when working with databases in Python?",
    options: [
      "A new database connection",
      "A cursor object for executing SQL queries",
      "The last query result",
      "A list of all tables"
    ],
    correct: 1,
  },
  {
    id: 72,
    category: "Python & Databases",
    question: "How do you create a connection to a SQLite database in Python?",
    options: [
      "sqlite3.open('mydb.db')",
      "sqlite3.connect('mydb.db')",
      "sqlite3.create('mydb.db')",
      "sqlite3.database('mydb.db')"
    ],
    correct: 1,
  },
  {
    id: 73,
    category: "Python & Databases",
    question: "What does cur.fetchall() do in Python?",
    options: [
      "Executes a SQL query",
      "Returns all rows from the last executed query as a list",
      "Closes the database connection",
      "Commits all pending changes"
    ],
    correct: 1,
  },
  {
    id: 74,
    category: "Python & Databases",
    question: "What is SQL injection?",
    options: [
      "A way to speed up SQL queries",
      "A security vulnerability where malicious SQL is inserted through user input",
      "A method for importing data into a database",
      "A type of database backup"
    ],
    correct: 1,
  },
  {
    id: 75,
    category: "Python & Databases",
    question: "What does 'CREATE TABLE IF NOT EXISTS' do?",
    options: [
      "Always creates a new table, replacing any existing one",
      "Creates the table only if a table with that name does not already exist",
      "Creates a temporary table that is deleted after the session",
      "Checks if the database exists before creating the table"
    ],
    correct: 1,
  },
  {
    id: 76,
    category: "Python & Databases",
    question: "What parameters are needed to connect to a MariaDB database in Python?",
    options: [
      "Only the database name",
      "User, password, host, port, and database name",
      "Only an IP address",
      "A URL string only"
    ],
    correct: 1,
  },
  {
    id: 77,
    category: "Python & Databases",
    question: "Why should you call conn.close() when done with a database connection?",
    options: [
      "To encrypt the database",
      "To free up resources and properly close the connection",
      "To save the query history",
      "To create an automatic backup"
    ],
    correct: 1,
  },
  {
    id: 78,
    category: "Python & Databases",
    question: "What does cur.execute() do in Python database programming?",
    options: [
      "Opens a new database connection",
      "Runs a SQL statement on the database",
      "Prints the query results to the screen",
      "Creates a new database file"
    ],
    correct: 1,
  },
  {
    id: 79,
    category: "Python & Databases",
    question: "What does lastrowid give you after an INSERT operation in MariaDB Connector/Python?",
    options: [
      "The total number of rows in the table",
      "The auto-generated ID of the last inserted row",
      "The last query that was executed",
      "The name of the last table modified"
    ],
    correct: 1,
  },
  {
    id: 80,
    category: "Python & Databases",
    question: "Why is the sqlite3 module convenient for Python developers?",
    options: [
      "It is the fastest database module available",
      "It is built into Python and requires no additional installation",
      "It can only be used on Windows",
      "It supports all NoSQL databases"
    ],
    correct: 1,
  },
];

export default questions;
