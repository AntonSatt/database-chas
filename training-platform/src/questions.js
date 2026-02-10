const questions = [
  // --- Lesson 1: Intro to Databases ---
  {
    id: 1,
    category: "Intro to Databases",
    question: "What is the main advantage of using a database over storing data in flat files?",
    options: [
      "Databases always use less disk space than flat files",
      "Databases allow efficient storage, retrieval, and management",
      "Databases do not require any additional software to run",
      "Flat files are generally faster for all types of operations"
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
      "The first column that appears in any table",
      "An index that uniquely identifies each row",
      "A password needed to access the database",
      "The most important piece of data in a row"
    ],
    correct: 1,
  },
  {
    id: 6,
    category: "Intro to Databases",
    question: "What is the main architectural difference between MariaDB and SQLite?",
    options: [
      "MariaDB is free and open-source but SQLite is not",
      "SQLite supports more concurrent users than MariaDB",
      "MariaDB is server-client, SQLite stores data in one file",
      "MariaDB only runs on Linux, while SQLite runs everywhere"
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
    options: ["DELETE FROM", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE"],
    correct: 2,
  },
  {
    id: 30,
    category: "Intro to Databases",
    question: "What is an index in a database?",
    options: [
      "The first row of data that was inserted into a table",
      "A structure that speeds up lookups on specific columns",
      "A type of scheduled backup taken at regular intervals",
      "A table of contents generated from the documentation"
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
    options: ["ADD ROW", "INSERT INTO", "CREATE ROW", "APPEND TO"],
    correct: 1,
  },
  {
    id: 43,
    category: "Intro to Databases",
    question: "What does the UPDATE command do in SQL?",
    options: [
      "Creates a brand new table in the database",
      "Removes specific rows from an existing table",
      "Modifies existing data in a table",
      "Retrieves stored data from a table"
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
      "A key used to encrypt all database data",
      "A column referencing a primary key in another table",
      "A key reserved for external application access",
      "The second column defined in every database table"
    ],
    correct: 1,
  },
  {
    id: 46,
    category: "Intro to Databases",
    question: "What is a JOIN used for in SQL?",
    options: [
      "Merging two separate databases into a single one",
      "Combining rows from tables based on a related column",
      "Adding a new column to an existing database table",
      "Creating a backup copy of the entire database"
    ],
    correct: 1,
  },
  {
    id: 47,
    category: "Intro to Databases",
    question: "What is SQLite commonly used for?",
    options: [
      "Large enterprise apps with many concurrent users",
      "Local storage in mobile apps and embedded systems",
      "Distributed cloud computing and big data pipelines",
      "Real-time streaming and message queue processing"
    ],
    correct: 1,
  },
  {
    id: 48,
    category: "Intro to Databases",
    question: "What does the DELETE command do in SQL?",
    options: [
      "Removes the entire table structure and schema",
      "Removes rows from a table based on a condition",
      "Permanently deletes the entire database from disk",
      "Removes a specific column from a table definition"
    ],
    correct: 1,
  },
  // --- Lesson 2: More SQL ---
  {
    id: 9,
    category: "More SQL",
    question: "What is a SQL transaction?",
    options: [
      "A way to handle billing for database usage",
      "A group of SQL operations treated as all-or-nothing",
      "A type of incremental database backup strategy",
      "A detailed log recording all SELECT query results"
    ],
    correct: 1,
  },
  {
    id: 10,
    category: "More SQL",
    question: "What does the DISTINCT keyword do in a SELECT statement?",
    options: [
      "Sorts the results in ascending order by default",
      "Returns only unique values from a specified column",
      "Limits the total number of results returned in output",
      "Filters out all NULL values from the result set"
    ],
    correct: 1,
  },
  {
    id: 11,
    category: "More SQL",
    question: "What is the difference between WHERE and HAVING?",
    options: [
      "There is no difference; they are interchangeable keywords",
      "WHERE is only used with SELECT; HAVING only with INSERT",
      "HAVING filters aggregated values, WHERE filters rows",
      "WHERE is always faster than HAVING for every condition"
    ],
    correct: 2,
  },
  {
    id: 12,
    category: "More SQL",
    question: "What is a VIEW in SQL?",
    options: [
      "A graphical user interface to the database server",
      "A saved query usable like a table in SELECT statements",
      "A type of index used for full-text search optimization",
      "A backup snapshot of a table taken at regular intervals"
    ],
    correct: 1,
  },
  {
    id: 13,
    category: "More SQL",
    question: "What does a TRIGGER do in SQL?",
    options: [
      "Starts or restarts the database server process",
      "Automatically runs a query in response to events",
      "Deletes old records on a predefined time schedule",
      "Locks a table for exclusive single-user data access"
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
      "To insert new data directly into a database table",
      "To replace multiple OR conditions with a value list",
      "To join two separate tables on a shared column value",
      "To check if a value exists exclusively in a subquery"
    ],
    correct: 1,
  },
  {
    id: 31,
    category: "More SQL",
    question: "What does the NOT keyword do when combined with LIKE?",
    options: [
      "Returns rows that do NOT match the given pattern",
      "Makes the search case-insensitive for text matching",
      "Returns only NULL values from the matched columns",
      "Reverses the sort order of the entire result set"
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
      "Sorts the results alphabetically by the first column",
      "Groups rows sharing a value so aggregates apply per group",
      "Limits the output to a specific number of rows per page",
      "Joins two tables together using a shared foreign column"
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
      "Groups rows by a specific column value",
      "Filters rows based on a given condition",
      "Sorts the result set by one or more columns",
      "Limits the total number of rows returned"
    ],
    correct: 2,
  },
  {
    id: 52,
    category: "More SQL",
    question: "What is a subquery?",
    options: [
      "A query that runs on a separate backup database",
      "A query nested inside another SQL query statement",
      "A query that is guaranteed to return only one row",
      "A query that does not require the SELECT keyword"
    ],
    correct: 1,
  },
  {
    id: 53,
    category: "More SQL",
    question: "What does the LENGTH() function do in SQL?",
    options: [
      "Returns the total number of tables in the database",
      "Returns the number of characters in a given string",
      "Returns the number of rows stored in the table",
      "Returns the total size of the database in bytes"
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
      "To restrict which columns are shown in the output",
      "To set a maximum allowed value for a given column",
      "To restrict the number of rows returned by a query",
      "To limit the total storage size of the whole database"
    ],
    correct: 2,
  },
  {
    id: 56,
    category: "More SQL",
    question: "When is a TRIGGER with BEFORE useful?",
    options: [
      "To run a cleanup query after the database shuts down",
      "To validate or modify data before it is written",
      "To speed up SELECT queries on large indexed tables",
      "To automatically delete old backup files from storage"
    ],
    correct: 1,
  },
  // --- Lesson 3: Database Design ---
  {
    id: 16,
    category: "Database Design",
    question: "What is an insertion anomaly?",
    options: [
      "When you try to insert too many rows at the same time",
      "When you cannot add data due to missing dependent data",
      "When inserting any data causes the database to crash",
      "When duplicate data gets inserted into a table by mistake"
    ],
    correct: 1,
  },
  {
    id: 17,
    category: "Database Design",
    question: "What does First Normal Form (1NF) require?",
    options: [
      "All tables must have a foreign key to another table",
      "Each field must contain only a single, atomic value",
      "There can be no NULL values in any column of a table",
      "Every table must have at least three columns defined"
    ],
    correct: 1,
  },
  {
    id: 18,
    category: "Database Design",
    question: "What additional requirement does 2NF add beyond 1NF?",
    options: [
      "All columns must be covered by an index",
      "Non-key values must depend on the entire primary key",
      "No table can have more than ten total columns",
      "All tables must use auto-incrementing integer IDs"
    ],
    correct: 1,
  },
  {
    id: 19,
    category: "Database Design",
    question: "What is the key rule of Third Normal Form (3NF)?",
    options: [
      "Every table must have exactly three columns defined",
      "No duplicate rows are allowed in any database table",
      "Non-key values must depend only on the primary key",
      "Foreign keys are not allowed between any two tables"
    ],
    correct: 2,
  },
  {
    id: 20,
    category: "Database Design",
    question: "What is a deletion anomaly?",
    options: [
      "When deleting a record removes unrelated important data",
      "When the DELETE command fails due to a syntax error",
      "When a table cannot be dropped due to server permissions",
      "When a trigger unexpectedly prevents any row deletion"
    ],
    correct: 0,
  },
  {
    id: 32,
    category: "Database Design",
    question: "What is an update anomaly?",
    options: [
      "When the UPDATE command runs too slowly on large tables",
      "When changing a value in one row leaves copies unchanged",
      "When a database version becomes outdated and incompatible",
      "When a trigger unexpectedly blocks an UPDATE operation"
    ],
    correct: 1,
  },
  {
    id: 38,
    category: "Database Design",
    question: "What is the usual solution for normalizing a database design?",
    options: [
      "Adding more columns to the existing table structures",
      "Removing all foreign key relationships between tables",
      "Dividing data into several tables linked by foreign keys",
      "Storing all data in a single table for simpler access"
    ],
    correct: 2,
  },
  {
    id: 57,
    category: "Database Design",
    question: "What is normalization in the context of database design?",
    options: [
      "Converting all column names to lowercase formatting",
      "Organizing data to reduce redundancy and anomalies",
      "Converting a NoSQL database into a SQL-based format",
      "Compressing the database files to save disk storage"
    ],
    correct: 1,
  },
  {
    id: 58,
    category: "Database Design",
    question: "What is a composite primary key?",
    options: [
      "A primary key that uses built-in encryption",
      "A primary key made up of two or more columns",
      "A primary key that is also a valid foreign key",
      "A primary key with automatic incrementing values"
    ],
    correct: 1,
  },
  {
    id: 59,
    category: "Database Design",
    question: "What is a one-to-many relationship?",
    options: [
      "Each row in table A links to exactly one row in B",
      "One row in A can relate to many rows in B, not reverse",
      "Many rows in table A link to many rows in table B",
      "There is no defined relationship between the tables"
    ],
    correct: 1,
  },
  {
    id: 60,
    category: "Database Design",
    question: "What is the purpose of a foreign key constraint?",
    options: [
      "To speed up queries by creating an implicit index on it",
      "To ensure a value matches a valid primary key elsewhere",
      "To prevent any data from ever being deleted from a table",
      "To automatically generate backup copies of changed rows"
    ],
    correct: 1,
  },
  {
    id: 61,
    category: "Database Design",
    question: "What does CASCADE do when used with a foreign key ON DELETE?",
    options: [
      "It prevents the delete operation from being executed",
      "It sets the foreign key column value to NULL instead",
      "It automatically deletes related rows in the child table",
      "It logs every deletion for auditing and review purposes"
    ],
    correct: 2,
  },
  {
    id: 62,
    category: "Database Design",
    question: "Why should you avoid storing multiple values in a single column?",
    options: [
      "It uses too much disk space compared to normalized data",
      "It violates First Normal Form and makes querying hard",
      "It causes the database server to crash under high load",
      "SQL does not allow storing any text data inside columns"
    ],
    correct: 1,
  },
  {
    id: 63,
    category: "Database Design",
    question: "What is a many-to-many relationship typically implemented with?",
    options: [
      "A single foreign key placed in one of the two tables",
      "A junction table with foreign keys to both related tables",
      "A VIEW that dynamically combines data from both tables",
      "Comma-separated IDs stored in a single text column value"
    ],
    correct: 1,
  },
  // --- Lesson 4: Storage, Backup, Cloud DBs ---
  {
    id: 21,
    category: "Storage & Backup",
    question: "What is the 3-2-1 backup rule?",
    options: [
      "3 separate databases, 2 dedicated servers, 1 admin user",
      "3 backup copies, 2 different media types, 1 stored off-site",
      "3 normalized tables, 2 indexes per table, 1 primary key",
      "3 queries per second maximum, 2 open connections, 1 timeout"
    ],
    correct: 1,
  },
  {
    id: 22,
    category: "Storage & Backup",
    question: "What is a database snapshot?",
    options: [
      "A screenshot of the database management user interface",
      "A point-in-time data copy taken at the filesystem level",
      "A compressed archive of the entire database for transfer",
      "A detailed log file recording all recently run SQL queries"
    ],
    correct: 1,
  },
  {
    id: 23,
    category: "Storage & Backup",
    question: "What is a key risk of using cloud-hosted databases?",
    options: [
      "They are always slower than locally hosted databases",
      "They cannot store any relational or structured data",
      "Vendor lock-in and reduced control over your own data",
      "They have no support for standard SQL query languages"
    ],
    correct: 2,
  },
  {
    id: 33,
    category: "Storage & Backup",
    question: "What does RAID provide for database storage?",
    options: [
      "Faster SQL query execution through parallel processing",
      "Automatic query optimization based on data access patterns",
      "High availability and fault resistance via data replication",
      "Transparent encryption of all stored data at column level"
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
      "To make the database faster by reorganizing stored data",
      "To verify that backups actually work and data is recoverable",
      "To reduce the total size of the database by removing old data",
      "To comply with SQL standards and pass certification audits"
    ],
    correct: 1,
  },
  {
    id: 65,
    category: "Storage & Backup",
    question: "What is a potential downside of taking a database snapshot?",
    options: [
      "Snapshots cannot be stored on disk and must stay in memory",
      "It may require table locking or cache flushing, hurting I/O",
      "Snapshots permanently delete the original data they capture",
      "They only work with NoSQL databases and not relational ones"
    ],
    correct: 1,
  },
  {
    id: 66,
    category: "Storage & Backup",
    question: "What does 'vendor lock-in' mean for cloud databases?",
    options: [
      "The database becomes encrypted and completely inaccessible",
      "You depend on one provider's tools, making it hard to switch",
      "The cloud provider locks your account after too many queries",
      "Your stored data is automatically deleted after a trial ends"
    ],
    correct: 1,
  },
  {
    id: 67,
    category: "Storage & Backup",
    question: "What is a key advantage of cloud-hosted databases?",
    options: [
      "They are always completely free to use without any cost",
      "They provide high availability and managed infrastructure",
      "They never require any backups or disaster recovery plans",
      "They are faster than local databases in every use case"
    ],
    correct: 1,
  },
  // --- Lesson 5: Database Migrations ---
  {
    id: 24,
    category: "Database Migrations",
    question: "What is a database migration?",
    options: [
      "Moving a database from one physical server to another",
      "An incremental, versioned set of schema changes applied",
      "Converting a SQL database into a NoSQL-based format",
      "Exporting all database table data to a CSV flat file"
    ],
    correct: 1,
  },
  {
    id: 25,
    category: "Database Migrations",
    question: "Why are migrations preferred over keeping a single schema dump file?",
    options: [
      "Dump files always take up significantly more disk space",
      "Migrations allow versioned, incremental updates between versions",
      "Dump files cannot contain any CREATE TABLE SQL statements",
      "Migrations are always faster to execute than importing dumps"
    ],
    correct: 1,
  },
  {
    id: 34,
    category: "Database Migrations",
    question: "Where is the current migration version typically tracked?",
    options: [
      "In a text file stored on the developer's desktop",
      "In the database itself within a metadata table",
      "In the application's main README documentation file",
      "In the operating system's global registry entries"
    ],
    correct: 1,
  },
  {
    id: 68,
    category: "Database Migrations",
    question: "What problem do migrations solve when multiple versions of an app are in use?",
    options: [
      "They make the application run faster by optimizing tables",
      "They upgrade the schema step by step between any versions",
      "They automatically fix bugs in SQL queries during updates",
      "They compress old data to save storage on the DB server"
    ],
    correct: 1,
  },
  {
    id: 69,
    category: "Database Migrations",
    question: "What is a typical naming convention for migration files?",
    options: [
      "Random UUIDs like a3f8-b2c1.sql with no set order",
      "Numbered sequential names like 00-create-users.sql",
      "The date the developer was hired, followed by a hash",
      "The full name of the developer who wrote the migration"
    ],
    correct: 1,
  },
  {
    id: 70,
    category: "Database Migrations",
    question: "What happens if you skip a migration step?",
    options: [
      "Nothing at all, migration steps are entirely optional",
      "The database may end up in an inconsistent broken state",
      "The database automatically detects and corrects the gap",
      "All data is immediately and permanently deleted from disk"
    ],
    correct: 1,
  },
  {
    id: 71,
    category: "Database Migrations",
    question: "Which of the following is an example of a schema change that a migration might perform?",
    options: [
      "Changing the color theme of the application interface",
      "Adding a new column to an existing database table",
      "Restarting the database server after a system crash",
      "Updating the operating system to the latest version"
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
    question: "In MariaDB Connector/Python, how do you prevent SQL injection in queries?",
    options: [
      "Use string concatenation to build the query safely",
      "Use f-strings to embed user values inside the query",
      "Use '?' placeholders and pass values as a tuple",
      "Wrap the entire query in a try/except error block"
    ],
    correct: 2,
  },
  {
    id: 29,
    category: "Python & Databases",
    question: "What does the cursor object allow you to do?",
    options: [
      "Connect to the internet from Python",
      "Execute SQL queries and manage results",
      "Create new Python modules dynamically",
      "Compile Python code into an executable"
    ],
    correct: 1,
  },
  {
    id: 39,
    category: "Python & Databases",
    question: "What does conn.cursor() return when working with databases in Python?",
    options: [
      "A brand new database connection object",
      "A cursor object for executing SQL queries",
      "The result of the most recently run query",
      "A list of all tables in the current database"
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
      "Executes a SQL query on the connected database",
      "Returns all rows from the last query as a list",
      "Closes the database connection and frees memory",
      "Commits all pending changes to the database file"
    ],
    correct: 1,
  },
  {
    id: 74,
    category: "Python & Databases",
    question: "What is SQL injection?",
    options: [
      "A technique to speed up slow SQL queries at runtime",
      "A vulnerability where malicious SQL is inserted via input",
      "A standard method for importing data into a SQL database",
      "A type of automated database backup using SQL dump tools"
    ],
    correct: 1,
  },
  {
    id: 75,
    category: "Python & Databases",
    question: "What does 'CREATE TABLE IF NOT EXISTS' do?",
    options: [
      "Always creates a new table, replacing any existing one with that name",
      "Creates the table only if a table with that name does not already exist",
      "Creates a temporary table that is automatically deleted after the session",
      "Checks if the database file itself exists on disk before creating a table"
    ],
    correct: 1,
  },
  {
    id: 76,
    category: "Python & Databases",
    question: "What parameters are needed to connect to a MariaDB database in Python?",
    options: [
      "Only the database name is required for connection",
      "User, password, host, port, and database name",
      "Only a server IP address pointing to the host",
      "A single URL connection string with all details"
    ],
    correct: 1,
  },
  {
    id: 77,
    category: "Python & Databases",
    question: "Why should you call conn.close() when done with a database connection?",
    options: [
      "To encrypt the database before it is stored on disk",
      "To free up resources and properly close the connection",
      "To save the full query history to a persistent log file",
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
      "Runs a SQL statement on the connected database",
      "Prints the query results directly to the screen",
      "Creates a new database file in the current folder"
    ],
    correct: 1,
  },
  {
    id: 79,
    category: "Python & Databases",
    question: "What does lastrowid give you after an INSERT operation in MariaDB Connector/Python?",
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
      "It is the fastest database module currently available",
      "It is built into Python and needs no extra installation",
      "It can only be used on Windows operating systems",
      "It supports all NoSQL databases out of the box"
    ],
    correct: 1,
  },
];

export default questions;
