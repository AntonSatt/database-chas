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
    id: 37,
    category: "More SQL",
    question: "When using LIKE, which character matches exactly one character?",
    options: ["%", "_", "*", "?"],
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
];

export default questions;
