const studyContent = [
  {
    category: "Intro to Databases",
    sections: [
      {
        title: "What Is a Database?",
        bullets: [
          "A database is an organized collection of data stored electronically",
          "Databases solve problems that flat files have: redundancy, inconsistency, and no concurrent access",
          "An RDBMS (Relational Database Management System) manages relational databases (e.g. MySQL, MariaDB, PostgreSQL)",
        ],
      },
      {
        title: "Database Structure",
        bullets: [
          "Database → Tables → Rows (records) → Columns (fields)",
          "Each table stores data about one entity (e.g. students, courses)",
          "A primary key uniquely identifies each row in a table",
          "A foreign key references a primary key in another table, creating a relation",
        ],
      },
      {
        title: "Core SQL Statements",
        bullets: [
          "SELECT — read data from tables",
          "INSERT INTO — add new rows",
          "UPDATE — modify existing rows",
          "DELETE — remove rows",
          "CREATE TABLE — define a new table with columns and types",
          "DROP TABLE — permanently delete a table and its data",
        ],
      },
      {
        title: "Database Types & Tools",
        bullets: [
          "Relational databases: structured tables with relations (SQL)",
          "NoSQL: document stores, key-value stores, graph databases",
          "In-memory databases: store data in RAM for speed (e.g. Redis)",
          "MariaDB: full-featured server-based RDBMS",
          "SQLite: lightweight file-based database, no server needed",
        ],
      },
      {
        title: "CRUD, JOINs & Indexes",
        bullets: [
          "CRUD = Create, Read, Update, Delete — the four basic operations",
          "JOIN combines rows from two or more tables based on a related column",
          "INNER JOIN returns only matching rows; LEFT JOIN returns all from the left table",
          "An index speeds up SELECT queries by creating a lookup structure on a column",
          "Indexes slow down INSERT/UPDATE since the index must also be updated",
        ],
      },
    ],
  },
  {
    category: "More SQL",
    sections: [
      {
        title: "Transactions",
        bullets: [
          "A transaction groups multiple SQL statements into one all-or-nothing operation",
          "BEGIN starts a transaction; COMMIT saves all changes; ROLLBACK undoes them",
          "ACID properties: Atomicity, Consistency, Isolation, Durability",
          "Example: transferring money between accounts — both the debit and credit must succeed or neither happens",
        ],
      },
      {
        title: "Filtering Data",
        bullets: [
          "DISTINCT removes duplicate rows from the result",
          "WHERE filters rows before grouping; HAVING filters after GROUP BY",
          "NOT negates a condition: WHERE NOT active",
          "IN matches against a list: WHERE country IN ('SE', 'NO', 'DK')",
          "LIKE does pattern matching: % matches any characters, _ matches exactly one",
        ],
      },
      {
        title: "Grouping & Aggregation",
        bullets: [
          "GROUP BY groups rows that share a value so you can aggregate",
          "COUNT() — number of rows; SUM() — total; AVG() — average",
          "MAX() — largest value; MIN() — smallest value",
          "Aggregate functions ignore NULL values",
          "Every non-aggregated column in SELECT must appear in GROUP BY",
        ],
      },
      {
        title: "Sorting & Limiting",
        bullets: [
          "ORDER BY sorts the result set (ASC by default)",
          "DESC reverses the sort order: ORDER BY price DESC",
          "LIMIT restricts how many rows are returned: LIMIT 10",
          "Combine for 'top N' queries: ORDER BY score DESC LIMIT 5",
        ],
      },
      {
        title: "VIEWs & TRIGGERs",
        bullets: [
          "A VIEW is a saved SELECT query that acts like a virtual table",
          "Views simplify complex queries and can restrict what data users see",
          "A TRIGGER runs automatically when INSERT, UPDATE, or DELETE happens",
          "BEFORE triggers fire before the change; AFTER triggers fire after",
          "Use triggers for audit logs, auto-updating timestamps, enforcing rules",
        ],
      },
    ],
  },
  {
    category: "Database Design",
    sections: [
      {
        title: "Why Normalize?",
        bullets: [
          "Normalization reduces data redundancy and prevents anomalies",
          "Insertion anomaly: can't add data without unrelated data present",
          "Update anomaly: changing one fact requires updating multiple rows",
          "Deletion anomaly: removing a row accidentally deletes unrelated data",
        ],
      },
      {
        title: "Normal Forms",
        bullets: [
          "1NF: every cell holds a single atomic value (no lists or repeating groups)",
          "2NF: meets 1NF + every non-key column depends on the entire primary key (relevant for composite keys)",
          "3NF: meets 2NF + no transitive dependencies (non-key column depending on another non-key column)",
          "Most real-world databases aim for 3NF as a good balance",
        ],
      },
      {
        title: "Keys & Constraints",
        bullets: [
          "A composite key is a primary key made of two or more columns together",
          "Foreign key constraints enforce referential integrity between tables",
          "ON DELETE CASCADE: when the parent row is deleted, child rows are also deleted",
          "ON UPDATE CASCADE: when the parent key changes, child foreign keys update automatically",
        ],
      },
      {
        title: "Relationships & Junction Tables",
        bullets: [
          "One-to-many: one row in table A relates to many rows in table B (e.g. one author, many books)",
          "Many-to-many: rows in both tables can relate to many in the other (e.g. students and courses)",
          "Many-to-many requires a junction table (also called bridge/linking table) with two foreign keys",
          "The junction table's primary key is usually the composite of both foreign keys",
        ],
      },
    ],
  },
  {
    category: "Storage & Backup",
    sections: [
      {
        title: "Backup Fundamentals",
        bullets: [
          "3-2-1 rule: 3 copies of data, on 2 different media types, with 1 stored offsite",
          "Always test your restores — a backup you haven't tested might not work",
          "Full backup: copies everything; Incremental: only changes since last backup",
          "Schedule backups automatically; don't rely on manual processes",
        ],
      },
      {
        title: "Storage Types & RAID",
        bullets: [
          "On-disk storage: persistent, survives restarts (HDD or SSD)",
          "In-memory storage: much faster but data is lost on restart (unless persisted)",
          "RAID: combines multiple disks for redundancy and/or performance",
          "RAID 1 mirrors data across disks; RAID 5 stripes data with parity",
        ],
      },
      {
        title: "Database Snapshots",
        bullets: [
          "A snapshot captures the database state at a point in time",
          "Filesystem-level snapshots (e.g. LVM, ZFS) are fast but require pausing I/O",
          "Logical dumps (mysqldump, pg_dump) export SQL that recreates the data",
          "Snapshots can impact I/O performance while being taken",
        ],
      },
      {
        title: "Cloud Databases",
        bullets: [
          "Pros: high availability, automatic backups, managed scaling, no hardware maintenance",
          "Cons: vendor lock-in, ongoing cost, data sovereignty concerns, internet dependency",
          "SLA (Service Level Agreement) defines uptime guarantees (e.g. 99.9%)",
          "Consider latency, compliance requirements, and exit strategy when choosing cloud",
        ],
      },
    ],
  },
  {
    category: "Database Migrations",
    sections: [
      {
        title: "The Problem",
        bullets: [
          "As an application evolves, the database schema needs to change too",
          "Without migrations, developers share schema changes informally — leading to drift",
          "A single SQL dump doesn't capture the history of incremental changes",
          "Different environments (dev, staging, production) can end up with different schemas",
        ],
      },
      {
        title: "Migrations vs Dump Files",
        bullets: [
          "A dump file is a snapshot of the entire schema + data at one point",
          "Migrations are incremental, versioned change scripts that can be applied in order",
          "Migrations can be rolled forward (upgrade) and sometimes rolled back (downgrade)",
          "Migrations are stored in version control alongside application code",
        ],
      },
      {
        title: "Naming & Structure",
        bullets: [
          "Convention: version number + description, e.g. 001-create-users.sql",
          "Each migration file contains the SQL to make one change (CREATE TABLE, ALTER, etc.)",
          "Migrations run in order — the number prefix determines execution sequence",
          "Keep each migration small and focused on one logical change",
        ],
      },
      {
        title: "Tracking Migration State",
        bullets: [
          "A migrations table in the database records which migrations have been applied",
          "Before running, check which migrations are pending (not yet in the table)",
          "After applying a migration, insert a row marking it as completed",
          "This prevents migrations from running twice and enables deploying to any environment",
        ],
      },
    ],
  },
  {
    category: "Python & Databases",
    sections: [
      {
        title: "sqlite3 Basics",
        bullets: [
          "import sqlite3 — built into Python, no extra install needed",
          "conn = sqlite3.connect('mydb.db') — opens or creates a database file",
          "cursor = conn.cursor() — creates a cursor to execute SQL",
          "cursor.execute('SELECT ...') — runs a SQL statement",
          "conn.commit() — saves changes (needed after INSERT/UPDATE/DELETE)",
          "rows = cursor.fetchall() — retrieves all result rows as a list of tuples",
        ],
      },
      {
        title: "Creating Tables Safely",
        bullets: [
          "CREATE TABLE IF NOT EXISTS prevents errors when the table already exists",
          "Define column types: TEXT, INTEGER, REAL, BLOB",
          "Use PRIMARY KEY on the id column for auto-incrementing unique IDs",
          "Add NOT NULL to columns that must always have a value",
        ],
      },
      {
        title: "Preventing SQL Injection",
        bullets: [
          "Never use f-strings or string concatenation to build SQL queries with user input",
          "Use ? placeholders: cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))",
          "The database driver safely escapes the values, preventing injection attacks",
          "SQL injection can expose, modify, or delete all data in the database",
        ],
      },
      {
        title: "MariaDB Connector",
        bullets: [
          "Install: pip install mariadb",
          "Connection requires: host, port, user, password, database parameters",
          "cursor.lastrowid — returns the auto-generated ID of the last INSERT",
          "Use the same ? placeholder syntax for parameterized queries",
        ],
      },
      {
        title: "Connection Management",
        bullets: [
          "Always call conn.close() when you're done with the database",
          "Use try/finally or a context manager (with) to ensure the connection closes",
          "Handle exceptions: sqlite3.OperationalError, mariadb.Error, etc.",
          "Close cursors before closing the connection for clean resource management",
        ],
      },
    ],
  },
];

export default studyContent;
