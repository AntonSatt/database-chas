const questions = [
  // --- Lesson 1: Intro to Databases ---
  {
    id: 1,
    category: "Intro to Databases",
    question: "What is the main advantage of using a database over storing data in flat files?",
    options: [
      "Databases always use less disk space than flat files",
      "Flat files are generally faster for all types of operations",
      "Databases do not require any additional software to run",
      "Databases allow efficient storage, retrieval, and management"
    ],
    correct: 3,
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
      "Standard Query Library",
      "System Query Language",
      "Structured Query Language",
      "Simple Query Logic"
    ],
    correct: 2,
  },
  {
    id: 4,
    category: "Intro to Databases",
    question: "Which SQL command is used to retrieve data from a table?",
    options: ["SELECT", "INSERT INTO", "UPDATE", "CREATE TABLE"],
    correct: 0,
  },
  {
    id: 5,
    category: "Intro to Databases",
    question: "What is a primary key?",
    options: [
      "A password needed to access the database",
      "The most important piece of data in a row",
      "The first column that appears in any table",
      "A column that uniquely identifies each row in a table"
    ],
    correct: 3,
  },
  {
    id: 6,
    category: "Intro to Databases",
    question: "MariaDB uses a server-client architecture, while SQLite stores data in a single local file.",
    options: ["True", "False"],
    correct: 0,
  },
  {
    id: 7,
    category: "Intro to Databases",
    question: "Which type of database stores all data in RAM memory?",
    options: [
      "File-based databases",
      "In-memory databases",
      "Relational databases",
      "NoSQL databases"
    ],
    correct: 1,
  },
  {
    id: 8,
    category: "Intro to Databases",
    question: "Which SQL command permanently deletes an entire table and its structure?",
    options: ["DELETE FROM", "TRUNCATE TABLE", "DROP TABLE", "REMOVE TABLE"],
    correct: 2,
  },
  {
    id: 30,
    category: "Intro to Databases",
    question: "What is an index in a database?",
    options: [
      "A structure that speeds up lookups on specific columns",
      "The first row of data that was inserted into a table",
      "A type of scheduled backup taken at regular intervals",
      "A table of contents generated from the documentation"
    ],
    correct: 0,
  },
  {
    id: 35,
    category: "Intro to Databases",
    question: "MariaDB is a fork of which database system?",
    options: ["PostgreSQL", "Oracle DB", "MySQL", "SQLite"],
    correct: 2,
  },
  {
    id: 36,
    category: "Intro to Databases",
    question: "Which of the following is a NoSQL database?",
    options: ["MariaDB", "MongoDB", "MySQL", "SQLite"],
    correct: 1,
  },
  {
    id: 41,
    category: "Intro to Databases",
    question: "What does CRUD stand for?",
    options: [
      "Connect, Retrieve, Upload, Disconnect",
      "Create, Replace, Use, Destroy",
      "Create, Read, Update, Delete",
      "Copy, Rename, Undo, Drop"
    ],
    correct: 2,
  },
  {
    id: 42,
    category: "Intro to Databases",
    question: "Which SQL command is used to add a new row of data to a table?",
    options: ["APPEND TO", "INSERT INTO", "ADD ROW", "CREATE ROW"],
    correct: 1,
  },
  {
    id: 43,
    category: "Intro to Databases",
    question: "What does the UPDATE command do in SQL?",
    options: [
      "Retrieves stored data from a table",
      "Creates a brand new table in the database",
      "Modifies existing data in a table",
      "Removes specific rows from an existing table"
    ],
    correct: 2,
  },
  {
    id: 44,
    category: "Intro to Databases",
    question: "Which clause is used in a SELECT statement to filter rows?",
    options: ["LIMIT", "HAVING", "WHERE", "FILTER"],
    correct: 2,
  },
  {
    id: 45,
    category: "Intro to Databases",
    question: "What is a foreign key?",
    options: [
      "A column that references a primary key in another table",
      "A key used to encrypt all database data",
      "A key reserved for external application access",
      "The second column defined in every database table"
    ],
    correct: 0,
  },
  {
    id: 46,
    category: "Intro to Databases",
    question: "What is a JOIN used for in SQL?",
    options: [
      "Merging two separate databases into a single one",
      "Adding a new column to an existing database table",
      "Creating a backup copy of the entire database",
      "Combining rows from tables based on a related column"
    ],
    correct: 3,
  },
  {
    id: 47,
    category: "Intro to Databases",
    question: "What is SQLite commonly used for?",
    options: [
      "Local storage in mobile apps and embedded systems",
      "Large enterprise apps with many concurrent users",
      "Distributed cloud computing and big data pipelines",
      "Real-time streaming and message queue processing"
    ],
    correct: 0,
  },
  {
    id: 48,
    category: "Intro to Databases",
    question: "What does the DELETE command do in SQL?",
    options: [
      "Removes the entire table structure and its schema",
      "Permanently deletes the entire database from disk",
      "Removes a specific column from a table definition",
      "Removes rows from a table based on a condition"
    ],
    correct: 3,
  },
  // --- Lesson 2: More SQL ---
  {
    id: 9,
    category: "More SQL",
    question: "What is a SQL transaction?",
    options: [
      "A group of SQL operations treated as all-or-nothing",
      "A way to handle billing for database usage",
      "A detailed log recording all SELECT query results",
      "A type of incremental database backup strategy"
    ],
    correct: 0,
  },
  {
    id: 10,
    category: "More SQL",
    question: "What does the DISTINCT keyword do in a SELECT statement?",
    options: [
      "Sorts the results in ascending order by default",
      "Filters out all NULL values from the result set",
      "Returns only unique values, removing duplicates",
      "Limits the total number of results returned"
    ],
    correct: 2,
  },
  {
    id: 11,
    category: "More SQL",
    question: "What is the difference between WHERE and HAVING?",
    options: [
      "There is no difference; they are interchangeable",
      "WHERE filters individual rows, HAVING filters grouped results",
      "WHERE is only used with SELECT; HAVING only with INSERT",
      "WHERE is always faster than HAVING for every condition"
    ],
    correct: 1,
  },
  {
    id: 12,
    category: "More SQL",
    question: "What is a VIEW in SQL?",
    options: [
      "A backup snapshot of a table taken at regular intervals",
      "A graphical user interface to the database server",
      "A type of index used for full-text search optimization",
      "A saved query that can be used like a table"
    ],
    correct: 3,
  },
  {
    id: 13,
    category: "More SQL",
    question: "A TRIGGER in SQL automatically runs a query in response to table events like INSERT, UPDATE, or DELETE.",
    options: ["True", "False"],
    correct: 0,
  },
  {
    id: 14,
    category: "More SQL",
    question: "In SQL pattern matching with LIKE, which character matches any sequence of characters?",
    options: ["_", "%", "*", "#"],
    correct: 1,
  },
  {
    id: 15,
    category: "More SQL",
    question: "What is the purpose of the IN keyword in SQL?",
    options: [
      "To join two separate tables on a shared column value",
      "To insert new data directly into a database table",
      "To replace multiple OR conditions with a value list",
      "To check if a value exists exclusively in a subquery"
    ],
    correct: 2,
  },
  {
    id: 31,
    category: "More SQL",
    question: "What does the NOT keyword do when combined with LIKE?",
    options: [
      "Makes the search case-insensitive for text matching",
      "Returns rows that do NOT match the given pattern",
      "Reverses the sort order of the entire result set",
      "Returns only NULL values from the matched columns"
    ],
    correct: 1,
  },
  {
    id: 37,
    category: "More SQL",
    question: "When using LIKE, which character matches exactly one character?",
    options: ["%", "?", "_", "*"],
    correct: 2,
  },
  {
    id: 49,
    category: "More SQL",
    question: "What does the GROUP BY clause do?",
    options: [
      "Groups rows sharing a value so aggregates apply per group",
      "Sorts the results alphabetically by the first column",
      "Joins two tables together using a shared foreign column",
      "Limits the output to a specific number of rows"
    ],
    correct: 0,
  },
  {
    id: 50,
    category: "More SQL",
    question: "Which aggregate function returns the number of rows?",
    options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
    correct: 1,
  },
  {
    id: 51,
    category: "More SQL",
    question: "What does ORDER BY do in a SQL query?",
    options: [
      "Groups rows by a specific column value",
      "Limits the total number of rows returned",
      "Sorts the result set by one or more columns",
      "Filters rows based on a given condition"
    ],
    correct: 2,
  },
  {
    id: 52,
    category: "More SQL",
    question: "What is a subquery?",
    options: [
      "A query nested inside another SQL query statement",
      "A query that runs on a separate backup database",
      "A query that does not require the SELECT keyword",
      "A query that is guaranteed to return only one row"
    ],
    correct: 0,
  },
  {
    id: 53,
    category: "More SQL",
    question: "What does the LENGTH() function do in SQL?",
    options: [
      "Returns the total number of tables in the database",
      "Returns the total size of the database in bytes",
      "Returns the number of rows stored in the table",
      "Returns the number of characters in a given string"
    ],
    correct: 3,
  },
  {
    id: 54,
    category: "More SQL",
    question: "Which keyword is used to sort results in descending order?",
    options: ["DESC", "REVERSE", "ASC", "DOWN"],
    correct: 0,
  },
  {
    id: 55,
    category: "More SQL",
    question: "What is the purpose of the LIMIT clause?",
    options: [
      "To restrict which columns are shown in the output",
      "To restrict the number of rows returned by a query",
      "To set a maximum allowed value for a given column",
      "To limit the total storage size of the whole database"
    ],
    correct: 1,
  },
  {
    id: 56,
    category: "More SQL",
    question: "When is a TRIGGER with BEFORE useful?",
    options: [
      "To run a cleanup query after the database shuts down",
      "To speed up SELECT queries on large indexed tables",
      "To validate or modify data before it is written",
      "To automatically delete old backup files from storage"
    ],
    correct: 2,
  },
  {
    id: 81,
    category: "More SQL",
    question: "In the Sakila database, which SQL concept would you use to find the most rented movie and its rental count?",
    options: [
      "A simple SELECT with a WHERE clause on the film table",
      "JOIN combined with GROUP BY and ORDER BY with LIMIT",
      "A TRIGGER that counts rentals automatically on insert",
      "A VIEW that permanently stores the rental count per film"
    ],
    correct: 1,
  },
  {
    id: 82,
    category: "More SQL",
    question: "What does the BETWEEN keyword do in a WHERE clause?",
    options: [
      "Joins two tables that share a range of overlapping IDs",
      "Checks whether a value falls within a specified range",
      "Calculates the difference between two column values",
      "Filters rows between two separate database tables"
    ],
    correct: 1,
  },
  // --- Lesson 3: Database Design ---
  {
    id: 16,
    category: "Database Design",
    question: "An employee table has columns for EmployeeID, Name, Address, and ProjectName (all NOT NULL). A new employee cannot be added until they are assigned a project. This is an example of...",
    options: [
      "A deletion anomaly",
      "An update anomaly",
      "An insertion anomaly",
      "A normalization error"
    ],
    correct: 2,
  },
  {
    id: 17,
    category: "Database Design",
    question: "What does First Normal Form (1NF) require?",
    options: [
      "Each field must contain only a single, atomic value",
      "All tables must have a foreign key to another table",
      "There can be no NULL values in any column of a table",
      "Every table must have at least three columns defined"
    ],
    correct: 0,
  },
  {
    id: 18,
    category: "Database Design",
    question: "What additional requirement does 2NF add beyond 1NF?",
    options: [
      "All columns must be covered by an index",
      "All tables must use auto-incrementing integer IDs",
      "Non-key values must depend on the entire primary key",
      "No table can have more than ten total columns"
    ],
    correct: 2,
  },
  {
    id: 19,
    category: "Database Design",
    question: "What is the key rule of Third Normal Form (3NF)?",
    options: [
      "Non-key values must depend on nothing but the primary key",
      "Every table must have exactly three columns defined",
      "No duplicate rows are allowed in any database table",
      "Foreign keys are not allowed between any two tables"
    ],
    correct: 0,
  },
  {
    id: 20,
    category: "Database Design",
    question: "An employee has multiple projects in the table. When all projects are completed and removed, the employee's name and address are also lost. This is...",
    options: [
      "An insertion anomaly",
      "An update anomaly",
      "A normalization violation",
      "A deletion anomaly"
    ],
    correct: 3,
  },
  {
    id: 32,
    category: "Database Design",
    question: "An employee's address appears in multiple rows (one per project). When they move, some rows get updated but others don't. This is...",
    options: [
      "An update anomaly",
      "A deletion anomaly",
      "An insertion anomaly",
      "A cascading error"
    ],
    correct: 0,
  },
  {
    id: 38,
    category: "Database Design",
    question: "What is the usual solution for normalizing a database design?",
    options: [
      "Storing all data in a single table for simpler access",
      "Removing all foreign key relationships between tables",
      "Adding more columns to the existing table structures",
      "Dividing data into several tables linked by foreign keys"
    ],
    correct: 3,
  },
  {
    id: 57,
    category: "Database Design",
    question: "What is normalization in the context of database design?",
    options: [
      "Compressing the database files to save disk storage",
      "Organizing data to reduce redundancy and anomalies",
      "Converting a NoSQL database into a SQL-based format",
      "Converting all column names to lowercase formatting"
    ],
    correct: 1,
  },
  {
    id: 58,
    category: "Database Design",
    question: "What is a composite primary key?",
    options: [
      "A primary key with automatic incrementing values",
      "A primary key that is also a valid foreign key",
      "A primary key made up of two or more columns",
      "A primary key that uses built-in encryption"
    ],
    correct: 2,
  },
  {
    id: 59,
    category: "Database Design",
    question: "What is a one-to-many relationship?",
    options: [
      "Many rows in table A link to many rows in table B",
      "Each row in table A links to exactly one row in B",
      "One row in A can relate to many rows in B, not reverse",
      "There is no defined relationship between the tables"
    ],
    correct: 2,
  },
  {
    id: 60,
    category: "Database Design",
    question: "What is the purpose of a foreign key constraint?",
    options: [
      "To speed up queries by creating an implicit index",
      "To prevent any data from ever being deleted from a table",
      "To automatically generate backup copies of changed rows",
      "To ensure a value matches a valid primary key elsewhere"
    ],
    correct: 3,
  },
  {
    id: 61,
    category: "Database Design",
    question: "What does CASCADE do when used with a foreign key ON DELETE?",
    options: [
      "It automatically deletes related rows in the child table",
      "It prevents the delete operation from being executed",
      "It sets the foreign key column value to NULL instead",
      "It logs every deletion for auditing and review purposes"
    ],
    correct: 0,
  },
  {
    id: 62,
    category: "Database Design",
    question: "Why should you avoid storing multiple values in a single column?",
    options: [
      "SQL does not allow storing any text data inside columns",
      "It causes the database server to crash under high load",
      "It violates First Normal Form and makes querying hard",
      "It uses too much disk space compared to normalized data"
    ],
    correct: 2,
  },
  {
    id: 63,
    category: "Database Design",
    question: "What is a many-to-many relationship typically implemented with?",
    options: [
      "Comma-separated IDs stored in a single text column",
      "A VIEW that dynamically combines data from both tables",
      "A junction table with foreign keys to both tables",
      "A single foreign key placed in one of the two tables"
    ],
    correct: 2,
  },
  {
    id: 83,
    category: "Database Design",
    question: "Once a database is normalized up to 3NF, anomalies are generally avoided.",
    options: ["True", "False"],
    correct: 0,
  },
  {
    id: 84,
    category: "Database Design",
    question: "What does the NOT NULL constraint do on a column?",
    options: [
      "It ensures the column always contains a value and cannot be left empty",
      "It makes the column automatically increment with each new row inserted",
      "It prevents the column from storing numeric values of any kind",
      "It ensures no two rows can have the same value in that column"
    ],
    correct: 0,
  },
  {
    id: 85,
    category: "Database Design",
    question: "What does the UNIQUE constraint do on a column?",
    options: [
      "It makes the column the primary key of the table",
      "It ensures the column is always the first one displayed",
      "It ensures no two rows can have the same value in that column",
      "It prevents the column from being used in a WHERE clause"
    ],
    correct: 2,
  },
  // --- Lesson 4: Storage, Backup, Cloud DBs ---
  {
    id: 21,
    category: "Storage & Backup",
    question: "What is the 3-2-1 backup rule?",
    options: [
      "3 backup copies, 2 different media types, 1 stored off-site",
      "3 separate databases, 2 dedicated servers, 1 admin user",
      "3 normalized tables, 2 indexes per table, 1 primary key",
      "3 queries per second maximum, 2 connections, 1 timeout"
    ],
    correct: 0,
  },
  {
    id: 22,
    category: "Storage & Backup",
    question: "What is a database snapshot?",
    options: [
      "A screenshot of the database management interface",
      "A compressed archive of the entire database for transfer",
      "A point-in-time data copy taken at the filesystem level",
      "A detailed log file recording all recently run SQL queries"
    ],
    correct: 2,
  },
  {
    id: 23,
    category: "Storage & Backup",
    question: "What is a key risk of using cloud-hosted databases?",
    options: [
      "They cannot store any relational or structured data",
      "They have no support for standard SQL query languages",
      "Vendor lock-in and reduced control over your own data",
      "They are always slower than locally hosted databases"
    ],
    correct: 2,
  },
  {
    id: 33,
    category: "Storage & Backup",
    question: "What does RAID provide for database storage?",
    options: [
      "High availability and fault resistance via data replication",
      "Faster SQL query execution through parallel processing",
      "Automatic query optimization based on data access patterns",
      "Transparent encryption of all stored data at column level"
    ],
    correct: 0,
  },
  {
    id: 40,
    category: "Storage & Backup",
    question: "What does SLA stand for in the context of cloud databases?",
    options: [
      "Server Load Average",
      "Standard License Authorization",
      "Structured Language Agreement",
      "Service Level Agreement"
    ],
    correct: 3,
  },
  {
    id: 64,
    category: "Storage & Backup",
    question: "You don't truly have a backup until you have successfully tested restoring from it.",
    options: ["True", "False"],
    correct: 0,
  },
  {
    id: 65,
    category: "Storage & Backup",
    question: "What is a potential downside of taking a database snapshot?",
    options: [
      "Snapshots permanently delete the original data they capture",
      "Snapshots cannot be stored on disk and must stay in memory",
      "It may require table locking or cache flushing, hurting I/O",
      "They only work with NoSQL databases and not relational ones"
    ],
    correct: 2,
  },
  {
    id: 66,
    category: "Storage & Backup",
    question: "Why can vendor lock-in be a risk with cloud databases?",
    options: [
      "The cloud provider locks your account after too many queries",
      "Your stored data is automatically deleted after a trial ends",
      "The provider may use a modified DB version, making it hard to switch",
      "The database becomes encrypted and completely inaccessible to you"
    ],
    correct: 2,
  },
  {
    id: 67,
    category: "Storage & Backup",
    question: "What is a key advantage of cloud-hosted databases?",
    options: [
      "They never require any backups or disaster recovery plans",
      "They are faster than local databases in every use case",
      "They are always completely free to use without any cost",
      "They provide high availability and managed infrastructure"
    ],
    correct: 3,
  },
  {
    id: 86,
    category: "Storage & Backup",
    question: "Why is it important to check SLAs when choosing a cloud database provider?",
    options: [
      "To ensure their uptime guarantee meets your own commitments to customers",
      "To verify that the provider uses the same programming language as you",
      "To make sure the provider offers free unlimited storage for all users",
      "To confirm that the provider will write your SQL queries for you"
    ],
    correct: 0,
  },
  {
    id: 87,
    category: "Storage & Backup",
    question: "In-memory databases store all their data on disk, just like traditional databases.",
    options: ["True", "False"],
    correct: 1,
  },
  // --- Lesson 5: Database Migrations ---
  {
    id: 24,
    category: "Database Migrations",
    question: "What is a database migration?",
    options: [
      "Moving a database from one physical server to another",
      "Converting a SQL database into a NoSQL-based format",
      "An incremental, versioned set of schema changes",
      "Exporting all database table data to a CSV flat file"
    ],
    correct: 2,
  },
  {
    id: 25,
    category: "Database Migrations",
    question: "Why are migrations preferred over keeping a single schema dump file?",
    options: [
      "Dump files always take up significantly more disk space",
      "Dump files cannot contain any CREATE TABLE SQL statements",
      "Migrations are always faster to execute than importing dumps",
      "Migrations allow versioned, incremental updates between any versions"
    ],
    correct: 3,
  },
  {
    id: 34,
    category: "Database Migrations",
    question: "Where is the current migration version typically tracked?",
    options: [
      "In the application's main README documentation file",
      "In the database itself within a metadata table",
      "In a text file stored on the developer's desktop",
      "In the operating system's global registry entries"
    ],
    correct: 1,
  },
  {
    id: 68,
    category: "Database Migrations",
    question: "You have customers on app version 1, 2, and 3, each with a different database schema. What makes it trivial to upgrade any customer to version 3?",
    options: [
      "Keeping a single complete SQL dump of the latest schema",
      "Manually running diff on the two schema files and editing",
      "Using incremental migration files so each version step is defined",
      "Asking each customer to recreate their database from scratch"
    ],
    correct: 2,
  },
  {
    id: 69,
    category: "Database Migrations",
    question: "What is a typical naming convention for migration files?",
    options: [
      "The full name of the developer who wrote the migration",
      "Numbered sequential names like 00-create-users.sql",
      "Random UUIDs like a3f8-b2c1.sql with no set order",
      "The date the developer was hired, followed by a hash"
    ],
    correct: 1,
  },
  {
    id: 70,
    category: "Database Migrations",
    question: "What happens if you skip a migration step?",
    options: [
      "Nothing at all, migration steps are entirely optional",
      "All data is immediately and permanently deleted from disk",
      "The database automatically detects and corrects the gap",
      "The database may end up in an inconsistent or broken state"
    ],
    correct: 3,
  },
  {
    id: 71,
    category: "Database Migrations",
    question: "Which of the following is an example of a schema change that a migration might perform?",
    options: [
      "Adding a new column to an existing database table",
      "Changing the color theme of the application interface",
      "Restarting the database server after a system crash",
      "Updating the operating system to the latest version"
    ],
    correct: 0,
  },
  {
    id: 88,
    category: "Database Migrations",
    question: "Migration tools can be specific to an RDBMS or built into the application framework.",
    options: ["True", "False"],
    correct: 0,
  },
  // --- Lesson 6 & 7: Python and Databases ---
  {
    id: 26,
    category: "Python & Databases",
    question: "Which Python module is used to interact with SQLite databases?",
    options: ["pymongo", "sqlite3", "psycopg2", "mariadb"],
    correct: 1,
  },
  {
    id: 27,
    category: "Python & Databases",
    question: "What method must be called on a connection object to save changes to the database?",
    options: ["conn.save()", "conn.push()", "conn.write()", "conn.commit()"],
    correct: 3,
  },
  {
    id: 28,
    category: "Python & Databases",
    question: "In MariaDB Connector/Python, how do you prevent SQL injection in queries?",
    options: [
      "Wrap the entire query in a try/except error block",
      "Use f-strings to embed user values inside the query",
      "Use '?' placeholders and pass values as a tuple",
      "Use string concatenation to build the query safely"
    ],
    correct: 2,
  },
  {
    id: 29,
    category: "Python & Databases",
    question: "What does the cursor object allow you to do?",
    options: [
      "Connect to the internet from Python",
      "Compile Python code into an executable",
      "Execute SQL queries and manage results",
      "Create new Python modules dynamically"
    ],
    correct: 2,
  },
  {
    id: 39,
    category: "Python & Databases",
    question: "What does conn.cursor() return when working with databases in Python?",
    options: [
      "The result of the most recently run query",
      "A list of all tables in the current database",
      "A brand new database connection object",
      "A cursor object for executing SQL queries"
    ],
    correct: 3,
  },
  {
    id: 72,
    category: "Python & Databases",
    question: "How do you create a connection to a SQLite database in Python?",
    options: [
      "sqlite3.connect('mydb.db')",
      "sqlite3.open('mydb.db')",
      "sqlite3.create('mydb.db')",
      "sqlite3.database('mydb.db')"
    ],
    correct: 0,
  },
  {
    id: 73,
    category: "Python & Databases",
    question: "What does cur.fetchall() do in Python?",
    options: [
      "Commits all pending changes to the database file",
      "Executes a SQL query on the connected database",
      "Returns all rows from the last query as a list",
      "Closes the database connection and frees memory"
    ],
    correct: 2,
  },
  {
    id: 74,
    category: "Python & Databases",
    question: "What is SQL injection?",
    options: [
      "A standard method for importing data into a database",
      "A type of automated database backup using dump tools",
      "A technique to speed up slow SQL queries at runtime",
      "A vulnerability where malicious SQL is inserted via input"
    ],
    correct: 3,
  },
  {
    id: 75,
    category: "Python & Databases",
    question: "What does 'CREATE TABLE IF NOT EXISTS' do?",
    options: [
      "Checks if the database file itself exists on disk first",
      "Creates a temporary table that is deleted after the session",
      "Creates the table only if one with that name does not exist",
      "Always creates a new table, replacing any existing one"
    ],
    correct: 2,
  },
  {
    id: 76,
    category: "Python & Databases",
    question: "Which of the following is needed when connecting to MariaDB from Python?",
    options: [
      "User, password, host, port, and database name",
      "Only the database name is required for connection",
      "Only a server IP address pointing to the host",
      "A single URL connection string with all details"
    ],
    correct: 0,
  },
  {
    id: 77,
    category: "Python & Databases",
    question: "Why should you call conn.close() when done with a database connection?",
    options: [
      "To save the full query history to a persistent log file",
      "To free up resources and properly close the connection",
      "To encrypt the database before it is stored on disk",
      "To create an automatic backup of all recent data changes"
    ],
    correct: 1,
  },
  {
    id: 78,
    category: "Python & Databases",
    question: "What does cur.execute() do in Python database programming?",
    options: [
      "Opens a new connection to the database server",
      "Creates a new database file in the current folder",
      "Prints the query results directly to the screen",
      "Runs a SQL statement on the connected database"
    ],
    correct: 3,
  },
  {
    id: 79,
    category: "Python & Databases",
    question: "What does lastrowid give you after an INSERT in MariaDB Connector/Python?",
    options: [
      "The total number of rows currently in the table",
      "The auto-generated ID of the last inserted row",
      "The full text of the most recently executed query",
      "The name of the last database table that was modified"
    ],
    correct: 1,
  },
  {
    id: 80,
    category: "Python & Databases",
    question: "Why is the sqlite3 module convenient for Python developers?",
    options: [
      "It can only be used on Windows operating systems",
      "It supports all NoSQL databases out of the box",
      "It is built into Python and needs no extra installation",
      "It is the fastest database module currently available"
    ],
    correct: 2,
  },
  {
    id: 89,
    category: "Python & Databases",
    question: "In MariaDB Connector/Python, you can iterate directly over the cursor to access query results row by row.",
    options: ["True", "False"],
    correct: 0,
  },
  {
    id: 90,
    category: "Python & Databases",
    question: "What is the correct way to handle connection errors in MariaDB Connector/Python?",
    options: [
      "Use a try/except block catching mariadb.Error",
      "Check if conn is None after calling connect()",
      "Call conn.check_error() after every operation",
      "Wrap the connection string in a validation function"
    ],
    correct: 0,
  },
];

export default questions;
