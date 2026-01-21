# CHINOOK DATABASE QUERIES - BEGINNER EXPLANATIONS

This file explains each query in simple terms for database beginners, following the SQLite documentation style with syntax flowcharts and processing order.

---

## 📊 UNDERSTANDING SQL SYNTAX DIAGRAMS (Railroad Diagrams)

Before we dive into the queries, let's understand how to read SQL syntax diagrams like those on [sqlite.org](https://sqlite.org/lang_select.html):

### How to Read the Diagrams:
```
→──┬─→ Required_Keyword ─→─┬─→
   │                       │
   └─→ Optional_Path ──────┘
```

- **Solid lines with arrows** → Show the path you must follow
- **Railroad tracks** → Show required keywords or elements
- **Branches** → Show choices (take one path)
- **Loops** → Allow repeating elements (like multiple columns)
- **Bypasses** → Show optional elements

### Basic SELECT Structure (from SQLite docs):

```
     ┌─────────────────────────────────┐
     │                                 │
→────┴─→ SELECT ─→ result-column ─┬───┴─→
                                  │
                 ┌────────────────┘
                 │
                 └─→ , ─→ (loop back for more columns)

→─┬──────────────┬─→
  │              │
  └─→ FROM ─→ table ─→ (optional)

→─┬──────────────────┬─→
  │                  │
  └─→ WHERE ─→ condition ─→ (optional)

→─┬────────────────────┬─→
  │                    │
  └─→ GROUP BY ─→ expr ─→ (optional)

→─┬────────────────────┬─→
  │                    │
  └─→ ORDER BY ─→ expr ─┬─→ ASC ─┬─→ (optional)
                        └─→ DESC ─┘

→─┬──────────────┬─→
  │              │
  └─→ LIMIT ─→ number ─→ (optional)
```

---

## 🔄 SQL QUERY PROCESSING ORDER

According to SQLite documentation, a SELECT statement is processed in **4 main steps**:

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: FROM Clause Processing                            │
│  ├─ Determine input data (tables/subqueries)               │
│  └─ Process JOINs (create combined dataset)                │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: WHERE Clause Processing                           │
│  └─ Filter rows based on conditions                        │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: GROUP BY, HAVING, and Result Column Processing    │
│  ├─ Group rows (if GROUP BY exists)                        │
│  ├─ Apply HAVING filter (if exists)                        │
│  └─ Calculate aggregate functions (SUM, COUNT, etc.)       │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: DISTINCT/ALL Processing                           │
│  ├─ Apply ORDER BY (sort results)                          │
│  ├─ Apply LIMIT (restrict number of rows)                  │
│  └─ Remove duplicates (if DISTINCT)                        │
└─────────────────────────────────────────────────────────────┘
```

**Important Note:** Even though you write `SELECT` first, it's actually processed in step 3!

---

## 1. WHO'S THE CUSTOMER WHO HAS SPENT THE MOST?

**Query:**
```sql
SELECT c.FirstName || ' ' || c.LastName AS CustomerName, 
       SUM(i.Total) AS TotalSpent 
FROM Customer c 
JOIN Invoice i ON c.CustomerId = i.CustomerId 
GROUP BY c.CustomerId 
ORDER BY TotalSpent DESC 
LIMIT 1;
```

**Answer:** Helena Holý ($49.62)

### 🎯 Query Breakdown Using SQLite Processing Steps:

#### **STEP 1: FROM Clause (Data Source)**
```
Customer Table (c)          Invoice Table (i)
┌────────────┬──────┐      ┌────────────┬───────┐
│ CustomerId │ Name │  →   │ CustomerId │ Total │
├────────────┼──────┤  JOIN├────────────┼───────┤
│     1      │ Luís │  ←   │     1      │ 1.98  │
│     2      │Helena│  ─   │     1      │ 3.96  │
└────────────┴──────┘      │     2      │ 13.86 │
                            └────────────┴───────┘

JOIN Operation: ON c.CustomerId = i.CustomerId
Result: Combined dataset with customer info + invoice amounts
```

**What happens:** 
- SQLite creates a **cartesian product** of Customer × Invoice
- Then filters to keep only matching CustomerId pairs
- This is called an **INNER JOIN** (default JOIN type)

#### **STEP 2: WHERE Clause**
```
No WHERE clause in this query → All joined rows pass through
```

#### **STEP 3: GROUP BY & Aggregation**
```
GROUP BY c.CustomerId

Before Grouping (selected rows):
┌────────────┬──────────────┬───────┐
│ CustomerId │ CustomerName │ Total │
├────────────┼──────────────┼───────┤
│     1      │ Luís         │  1.98 │
│     1      │ Luís         │  3.96 │
│     1      │ Luís         │  5.94 │
│     2      │ Helena Holý  │ 13.86 │
│     2      │ Helena Holý  │  8.91 │
└────────────┴──────────────┴───────┘

After Grouping + SUM(i.Total):
┌────────────┬──────────────┬────────────┐
│ CustomerId │ CustomerName │ TotalSpent │
├────────────┼──────────────┼────────────┤
│     1      │ Luís         │   11.88    │
│     2      │ Helena Holý  │   49.62    │ ← Winner!
└────────────┴──────────────┴────────────┘
```

**What happens:**
- Rows are grouped by CustomerId
- `SUM(i.Total)` adds up all invoice totals for each group
- Result: One row per customer with their total spending

#### **STEP 4: ORDER BY & LIMIT**
```
ORDER BY TotalSpent DESC

Before sorting:          After sorting:
┌────────────┐          ┌────────────┐
│   11.88    │          │   49.62    │ ← Largest first
│   49.62    │    →     │   11.88    │
│    8.91    │          │    8.91    │
└────────────┘          └────────────┘

LIMIT 1 → Take only the first row
```

### 📝 Key Concepts:

**JOIN (from SQLite docs):**
```
Table A JOIN Table B ON A.id = B.id

Creates: All rows where A.id matches B.id
```

**GROUP BY (from SQLite docs):**
- Groups rows with same values together
- Required when using aggregate functions (SUM, COUNT, etc.)
- Each group becomes one output row

**Aggregate Functions:**
- `SUM()` - Adds values across all rows in a group
- Evaluated once per group

---

## 2. WHAT'S THE TITLE OF THE LONGEST ALBUM? (most minutes of music)

**Query:**
```sql
SELECT a.Title, 
       SUM(t.Milliseconds) AS TotalMilliseconds 
FROM Album a 
JOIN Track t ON a.AlbumId = t.AlbumId 
GROUP BY a.AlbumId 
ORDER BY TotalMilliseconds DESC 
LIMIT 1;
```

**Answer:** Lost, Season 3 (70,665,582 milliseconds ≈ 1,178 minutes)

### 🎯 Query Processing Flow:

```
STEP 1: FROM + JOIN
─────────────────────
Album (a)                    Track (t)
┌─────────┬──────────┐      ┌─────────┬──────────────┐
│ AlbumId │  Title   │  JOIN│ AlbumId │ Milliseconds │
├─────────┼──────────┤  ──→ ├─────────┼──────────────┤
│    1    │ Album1   │      │    1    │   240000     │
│    2    │ Album2   │      │    1    │   180000     │
└─────────┴──────────┘      │    2    │   300000     │
                             └─────────┴──────────────┘

Result: All tracks matched with their album titles


STEP 2: WHERE
─────────────
No WHERE clause → All rows proceed


STEP 3: GROUP BY a.AlbumId + SUM(t.Milliseconds)
──────────────────────────────────────────────────
Groups all tracks by album, then sums their lengths:

┌─────────┬──────────────────┬──────────────────┐
│ AlbumId │      Title       │ TotalMilliseconds│
├─────────┼──────────────────┼──────────────────┤
│   229   │ Lost, Season 3   │   70,665,582     │ ← Longest!
│   230   │ Lost, Season 1   │   32,001,234     │
│     1   │ For Those About..│    3,500,000     │
└─────────┴──────────────────┴──────────────────┘


STEP 4: ORDER BY DESC + LIMIT 1
────────────────────────────────
Sort by TotalMilliseconds (largest first)
Take only the top row

Final Result: Lost, Season 3
```

### 📊 Visual Representation:

```
Track Distribution per Album:

Album A: ▓▓▓▓░░░░░░  (10 tracks, short)
Album B: ▓▓▓▓▓▓▓▓▓░  (15 tracks, medium)
Season 3: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  (26 episodes, VERY long!)

SUM() adds all the bars together for each album
```

### 🔑 Key Difference from Query #1:
- Same structure (JOIN → GROUP BY → SUM → ORDER BY → LIMIT)
- Different tables: `Album` + `Track` (instead of `Customer` + `Invoice`)
- Different measurement: Milliseconds (instead of money)

---

## 3. WHAT'S THE TITLE OF THE SHORTEST ALBUM? (fewest minutes of music)

**Query:**
```sql
SELECT a.Title, 
       SUM(t.Milliseconds) AS TotalMilliseconds 
FROM Album a 
JOIN Track t ON a.AlbumId = t.AlbumId 
GROUP BY a.AlbumId 
ORDER BY TotalMilliseconds ASC 
LIMIT 1;
```

**Answer:** Liszt - 12 Études D'Execution Transcendante (51,780 milliseconds ≈ 0.86 minutes)

### 🎯 Processing Flow:

```
STEP 1-3: Identical to Query #2
────────────────────────────────
(FROM → JOIN → GROUP BY → SUM)

Results in the same grouped dataset:
┌──────────────────────────────────┬──────────────────┐
│              Title               │ TotalMilliseconds│
├──────────────────────────────────┼──────────────────┤
│ Lost, Season 3                   │   70,665,582     │
│ Greatest Hits                    │   20,123,456     │
│ Liszt - 12 Études...             │       51,780     │ ← Shortest!
└──────────────────────────────────┴──────────────────┘


STEP 4: ORDER BY ASC (⚠️ KEY DIFFERENCE!)
──────────────────────────────────────────

ASC = Ascending = Smallest → Largest
DESC = Descending = Largest → Smallest

After ORDER BY TotalMilliseconds ASC:
┌──────────────────────────────────┬──────────────────┐
│              Title               │ TotalMilliseconds│
├──────────────────────────────────┼──────────────────┤
│ Liszt - 12 Études...             │       51,780     │ ← Top row!
│ Some Short Album                 │       89,234     │
│ Greatest Hits                    │   20,123,456     │
│ Lost, Season 3                   │   70,665,582     │
└──────────────────────────────────┴──────────────────┘

LIMIT 1 → Take the top row (now the smallest value)
```

### 📚 SQLite Documentation - ORDER BY:

From [sqlite.org/lang_select.html](https://sqlite.org/lang_select.html#orderby):

```
→─→ ORDER BY ─→ expression ─┬─→ ASC ──┬─→
                             └─→ DESC ─┘

ASC (default):  NULL < numbers < text (alphabetically)
DESC:           text > numbers > NULL
```

**Key Points:**
- `ASC` is the **default** if you don't specify
- SQLite considers `NULL` values **smallest**
- You can order by column names, aliases, or expressions

---

## 4. WHAT'S THE ALBUM WITH THE MOST SONGS?

**Query:**
```sql
SELECT a.Title, 
       COUNT(t.TrackId) AS TrackCount 
FROM Album a 
JOIN Track t ON a.AlbumId = t.AlbumId 
GROUP BY a.AlbumId 
ORDER BY TrackCount DESC 
LIMIT 1;
```

**Answer:** Greatest Hits (57 tracks)

### 🎯 COUNT vs SUM - The Key Difference:

```
Album: Greatest Hits

Track Data:
┌──────────┬──────────────┬──────────────┐
│ TrackId  │    Name      │ Milliseconds │
├──────────┼──────────────┼──────────────┤
│   100    │ Song 1       │   240,000    │
│   101    │ Song 2       │   180,000    │
│   102    │ Song 3       │   210,000    │
│   ...    │ ...          │   ...        │
│   156    │ Song 57      │   195,000    │
└──────────┴──────────────┴──────────────┘

SUM(Milliseconds) = 240000 + 180000 + 210000 + ... + 195000
                  = Total duration

COUNT(TrackId)    = 1 + 1 + 1 + ... + 1 (count each row)
                  = 57 tracks
```

### 📊 Aggregate Functions Comparison:

```
Given: [3, 7, 2, 9, 5]

COUNT(*)        → 5        (How many items?)
SUM(value)      → 26       (What's the total?)
AVG(value)      → 5.2      (What's the average?)
MIN(value)      → 2        (What's the smallest?)
MAX(value)      → 9        (What's the largest?)
```

### 🔄 Processing Visualization:

```
STEP 3: GROUP BY + COUNT()
──────────────────────────

Before Grouping:
AlbumId=1 → Track1, Track2, Track3              ┐
AlbumId=2 → Track4, Track5, Track6, Track7      │ Group together
AlbumId=3 → Track8                              ┘

After COUNT(TrackId):
AlbumId=1 → TrackCount = 3
AlbumId=2 → TrackCount = 4  ← Most tracks
AlbumId=3 → TrackCount = 1
```

---

## 5. WHAT'S THE ALBUM WITH THE FEWEST SONGS?

**Query:**
```sql
SELECT a.Title, 
       COUNT(t.TrackId) AS TrackCount 
FROM Album a 
JOIN Track t ON a.AlbumId = t.AlbumId 
GROUP BY a.AlbumId 
ORDER BY TrackCount ASC 
LIMIT 1;
```

**Answer:** Balls to the Wall (1 track)

### 🎯 Pattern Recognition:

```
Query #2 (Longest Album)  ←→  Query #3 (Shortest Album)
        ↓                             ↓
    SUM() + DESC                  SUM() + ASC

Query #4 (Most Songs)     ←→  Query #5 (Fewest Songs)
        ↓                             ↓
    COUNT() + DESC               COUNT() + ASC
```

**The pattern:** Same logic, just flip the sort direction!

### 📖 SQLite Docs - Aggregate Functions:

From [sqlite.org/lang_aggfunc.html](https://sqlite.org/lang_aggfunc.html):

```
COUNT(X)   → Number of times X is not NULL
COUNT(*)   → Number of rows in the group
SUM(X)     → Sum of all non-NULL X values
AVG(X)     → Average of all non-NULL X values
MIN(X)     → Minimum value of X
MAX(X)     → Maximum value of X
```

**Important:** Aggregate functions ignore NULL values (except COUNT(*))

---

## 6. WHAT'S THE ALBUM WITH THE LONGEST TITLE? (most characters)

**Query:**
```sql
SELECT Title, 
       LENGTH(Title) AS TitleLength 
FROM Album 
ORDER BY TitleLength DESC 
LIMIT 1;
```

**Answer:** Tchaikovsky: 1812 Festival Overture, Op.49, Capriccio Italien & Beethoven: Wellington's Victory (95 characters)

### 🎯 Simplified Processing (No JOIN Required!):

```
STEP 1: FROM Album
──────────────────
Only ONE table needed!

Album Table:
┌─────────┬──────────────────────────────────────┐
│ AlbumId │               Title                  │
├─────────┼──────────────────────────────────────┤
│    1    │ For Those About To Rock...           │
│    2    │ Balls to the Wall                    │
│   280   │ Tchaikovsky: 1812 Festival...        │
│   131   │ IV                                   │
└─────────┴──────────────────────────────────────┘


STEP 2: WHERE
─────────────
No WHERE clause


STEP 3: Result Column Processing
─────────────────────────────────
Calculate LENGTH(Title) for each row:

┌──────────────────────────────────────┬─────────────┐
│               Title                  │ TitleLength │
├──────────────────────────────────────┼─────────────┤
│ For Those About To Rock...           │     34      │
│ Balls to the Wall                    │     17      │
│ Tchaikovsky: 1812 Festival...        │     95      │ ← Longest!
│ IV                                   │      2      │
└──────────────────────────────────────┴─────────────┘


STEP 4: ORDER BY DESC + LIMIT 1
────────────────────────────────
Sort by TitleLength (largest first)
Take top row

Result: Tchaikovsky: 1812 Festival Overture...
```

### 📐 SQLite String Functions:

From [sqlite.org/lang_corefunc.html](https://sqlite.org/lang_corefunc.html):

```
LENGTH(X)          → Number of characters in string X
UPPER(X)           → Convert X to uppercase
LOWER(X)           → Convert X to lowercase
SUBSTR(X, Y, Z)    → Extract Z characters from X starting at Y
TRIM(X)            → Remove leading/trailing spaces
||                 → Concatenate (join) strings
```

### 🔍 Visual Example - LENGTH() Function:

```
String: "Hello World"
         ^         ^
         1        11
         
LENGTH("Hello World") = 11

String: "Tchaikovsky: 1812 Festival Overture..."
         ^                                    ^
         1                                   95
         
LENGTH(Title) = 95 characters
```

### 🆚 Comparison with Previous Queries:

```
Queries 1-5:           Query 6:
─────────────         ───────────
✓ JOIN required       ✗ No JOIN
✓ GROUP BY needed     ✗ No GROUP BY
✓ Aggregation         ✗ No aggregation (each row evaluated independently)
✓ Multiple tables     ✓ Single table
```

**Why no GROUP BY?**
- We're not combining/summing/counting across multiple rows
- We evaluate `LENGTH(Title)` for **each row independently**
- This is a **non-aggregate query**

---

## 7. WHAT'S THE ALBUM WITH THE SHORTEST TITLE? (fewest characters)

**Query:**
```sql
SELECT Title, 
       LENGTH(Title) AS TitleLength 
FROM Album 
ORDER BY TitleLength ASC 
LIMIT 1;
```

**Answer:** IV (2 characters)

### 🎯 Processing Flow:

```
STEP 1-3: Same as Query #6
───────────────────────────
Calculate LENGTH(Title) for all albums

Results:
┌──────────────────────────────────────┬─────────────┐
│               Title                  │ TitleLength │
├──────────────────────────────────────┼─────────────┤
│ Tchaikovsky: 1812 Festival...        │     95      │
│ For Those About To Rock...           │     34      │
│ Balls to the Wall                    │     17      │
│ IV                                   │      2      │ ← Shortest!
└──────────────────────────────────────┴─────────────┘


STEP 4: ORDER BY ASC (⚠️ KEY CHANGE!)
──────────────────────────────────────

ASC = Smallest first:
┌──────────────────────────────────────┬─────────────┐
│               Title                  │ TitleLength │
├──────────────────────────────────────┼─────────────┤
│ IV                                   │      2      │ ← Top!
│ War                                  │      3      │
│ Balls to the Wall                    │     17      │
│ ...                                  │     ...     │
└──────────────────────────────────────┴─────────────┘

LIMIT 1 → Return only "IV"
```

### 🎵 Fun Fact about "IV":

```
"IV" is Led Zeppelin's 4th album
Roman numeral: IV = 4

Other short album titles in database:
┌────────┬────────┐
│ Title  │ Length │
├────────┼────────┤
│ IV     │   2    │
│ War    │   3    │
│ Pop    │   3    │
└────────┴────────┘
```

---

## 📚 COMPREHENSIVE SQL CONCEPTS REFERENCE

### 🏗️ Query Structure (SQLite Processing Order):

```
Writing Order:                Processing Order:
─────────────                ──────────────────
1. SELECT                    1. FROM
2. FROM                      2. JOIN
3. JOIN                      3. WHERE
4. WHERE                     4. GROUP BY
5. GROUP BY                  5. HAVING
6. HAVING                    6. SELECT
7. ORDER BY                  7. DISTINCT
8. LIMIT                     8. ORDER BY
                             9. LIMIT
```

**Why this matters:** Understanding the processing order helps you understand:
- Why you can use column aliases in ORDER BY but not in WHERE
- Why WHERE filters before grouping, but HAVING filters after
- Why LIMIT is applied last

---

### 🔗 JOIN Types (from SQLite docs):

```
INNER JOIN (default):
─────────────────────
Table A         Table B         Result
┌───┬───┐      ┌───┬───┐       ┌───┬───┬───┐
│ 1 │ X │  ×   │ 1 │ A │   =   │ 1 │ X │ A │
│ 2 │ Y │      │ 3 │ B │       │ 3 │ Z │ B │
│ 3 │ Z │      └───┴───┘       └───┴───┴───┘
└───┴───┘
Only matching rows


LEFT JOIN:
──────────
Table A         Table B         Result
┌───┬───┐      ┌───┬───┐       ┌───┬───┬──────┐
│ 1 │ X │  ×   │ 1 │ A │   =   │ 1 │ X │  A   │
│ 2 │ Y │      │ 3 │ B │       │ 2 │ Y │ NULL │
│ 3 │ Z │      └───┴───┘       │ 3 │ Z │  B   │
└───┴───┘                      └───┴───┴──────┘
All left rows + matching right


RIGHT JOIN:
───────────
All right rows + matching left


FULL OUTER JOIN:
────────────────
All rows from both tables
```

**SQLite Note:** According to [sqlite.org/lang_select.html](https://sqlite.org/lang_select.html#join):
- `JOIN`, `INNER JOIN`, and `,` (comma) are identical
- `CROSS JOIN` prevents query optimizer reordering (advanced)
- Joins are processed **left to right**: `(A JOIN B) JOIN C`

---

### 📊 Aggregate Functions Reference:

From [sqlite.org/lang_aggfunc.html](https://sqlite.org/lang_aggfunc.html):

```
Function          Description                    Example Result
────────────────────────────────────────────────────────────────
COUNT(*)          Counts all rows                COUNT(*) = 5
COUNT(column)     Counts non-NULL values         COUNT(price) = 4
SUM(column)       Adds all values                SUM(total) = 150.50
AVG(column)       Calculates average             AVG(age) = 25.5
MIN(column)       Finds minimum                  MIN(price) = 0.99
MAX(column)       Finds maximum                  MAX(price) = 15.99
GROUP_CONCAT(x)   Joins values into string       'A,B,C'
```

**Important Rules:**
1. Aggregate functions require `GROUP BY` (or they aggregate ALL rows)
2. Non-aggregate columns in SELECT must be in GROUP BY
3. Aggregate functions ignore NULL values (except COUNT(*))

---

### 🔤 String Functions & Operators:

```
Concatenation:
──────────────
'Hello' || ' ' || 'World'  →  'Hello World'

LENGTH():
─────────
LENGTH('SQLite')  →  6

UPPER() / LOWER():
──────────────────
UPPER('hello')  →  'HELLO'
LOWER('HELLO')  →  'hello'

SUBSTR(string, start, length):
───────────────────────────────
SUBSTR('SQLite', 1, 3)   →  'SQL'
SUBSTR('SQLite', 4)      →  'ite'

TRIM():
───────
TRIM('  hello  ')  →  'hello'
```

---

### 🎚️ ORDER BY & LIMIT Syntax:

From [sqlite.org/lang_select.html#orderby](https://sqlite.org/lang_select.html#orderby):

```
→─→ ORDER BY ─→ expression ─┬─→ ASC ────┬─┬──────────────┬─→
                             └─→ DESC ───┘ │              │
                                           └─→ NULLS FIRST─┤
                                           └─→ NULLS LAST──┘

→─→ LIMIT ─→ number ─┬──────────────────┬─→
                     └─→ OFFSET ─→ number─┘
```

**ASC vs DESC:**
- `ASC`: NULL < -99 < 0 < 1 < 99 < 'A' < 'Z'
- `DESC`: 'Z' > 'A' > 99 > 1 > 0 > -99 > NULL

**LIMIT & OFFSET:**
```sql
LIMIT 10              -- First 10 rows
LIMIT 10 OFFSET 20    -- Skip 20, then get 10 (rows 21-30)
LIMIT 20, 10          -- Same (but confusing syntax, avoid!)
```

---

### 🎭 Comparison Operators:

```
Operator    Meaning              Example
────────────────────────────────────────────
=           Equal                price = 0.99
!=  or  <>  Not equal            status != 'active'
<           Less than            age < 18
<=          Less or equal        score <= 100
>           Greater than         quantity > 0
>=          Greater or equal     total >= 10.00

IS NULL     Is NULL              email IS NULL
IS NOT NULL Is not NULL          phone IS NOT NULL
BETWEEN     Range (inclusive)    age BETWEEN 18 AND 65
IN          List membership      country IN ('USA', 'Canada')
LIKE        Pattern matching     name LIKE 'A%'
```

---

### 🧮 WHERE vs HAVING:

```
WHERE:                          HAVING:
──────                          ───────
✓ Filters BEFORE grouping       ✓ Filters AFTER grouping
✓ Cannot use aggregate funcs    ✓ Can use aggregate functions
✓ Works on individual rows      ✓ Works on groups

Example:
SELECT country, COUNT(*) as total
FROM customers
WHERE age >= 18              ← Filter rows first
GROUP BY country
HAVING COUNT(*) > 10;        ← Filter groups after
```

---

## 🚀 HOW TO RUN THESE QUERIES

### In Terminal (Linux/Mac):

1. **Navigate to directory:**
   ```bash
   cd /home/kaffe/Documents/chasacademy/databas/lesson_1_intro_to_DB/temp
   ```

2. **Run a query:**
   ```bash
   sqlite3 chinook.db "SELECT * FROM Album LIMIT 5;"
   ```

3. **Open interactive mode:**
   ```bash
   sqlite3 chinook.db
   ```
   Then type queries and end with `;`

### Common SQLite Commands (in interactive mode):

```sql
.tables              -- List all tables
.schema Album        -- Show table structure
.mode column         -- Format output in columns
.headers on          -- Show column names
.quit                -- Exit SQLite
```

---

## 📋 COMPLETE QUERY EXAMPLES

### Question 1:
```bash
sqlite3 chinook.db "SELECT c.FirstName || ' ' || c.LastName AS CustomerName, SUM(i.Total) AS TotalSpent FROM Customer c JOIN Invoice i ON c.CustomerId = i.CustomerId GROUP BY c.CustomerId ORDER BY TotalSpent DESC LIMIT 1;"
```

### Question 2:
```bash
sqlite3 chinook.db "SELECT a.Title, SUM(t.Milliseconds) AS TotalMilliseconds FROM Album a JOIN Track t ON a.AlbumId = t.AlbumId GROUP BY a.AlbumId ORDER BY TotalMilliseconds DESC LIMIT 1;"
```

### Question 3:
```bash
sqlite3 chinook.db "SELECT a.Title, SUM(t.Milliseconds) AS TotalMilliseconds FROM Album a JOIN Track t ON a.AlbumId = t.AlbumId GROUP BY a.AlbumId ORDER BY TotalMilliseconds ASC LIMIT 1;"
```

### Question 4:
```bash
sqlite3 chinook.db "SELECT a.Title, COUNT(t.TrackId) AS TrackCount FROM Album a JOIN Track t ON a.AlbumId = t.AlbumId GROUP BY a.AlbumId ORDER BY TrackCount DESC LIMIT 1;"
```

### Question 5:
```bash
sqlite3 chinook.db "SELECT a.Title, COUNT(t.TrackId) AS TrackCount FROM Album a JOIN Track t ON a.AlbumId = t.AlbumId GROUP BY a.AlbumId ORDER BY TrackCount ASC LIMIT 1;"
```

### Question 6:
```bash
sqlite3 chinook.db "SELECT Title, LENGTH(Title) AS TitleLength FROM Album ORDER BY TitleLength DESC LIMIT 1;"
```

### Question 7:
```bash
sqlite3 chinook.db "SELECT Title, LENGTH(Title) AS TitleLength FROM Album ORDER BY TitleLength ASC LIMIT 1;"
```

---

## 💡 LEARNING TIPS

### 1. **Start Simple, Build Up:**
```sql
-- Step 1: See the data
SELECT * FROM Album LIMIT 5;

-- Step 2: Select specific columns
SELECT Title FROM Album LIMIT 5;

-- Step 3: Add a condition
SELECT Title FROM Album WHERE AlbumId < 10;

-- Step 4: Add sorting
SELECT Title FROM Album WHERE AlbumId < 10 ORDER BY Title;
```

### 2. **Use LIMIT When Learning:**
Always add `LIMIT 10` or `LIMIT 5` when exploring data to avoid overwhelming output.

### 3. **Understand the Flow:**
Remember: `FROM → WHERE → GROUP BY → SELECT → ORDER BY → LIMIT`

### 4. **Test Your Changes:**
Modify queries one piece at a time:
- Change `DESC` to `ASC`
- Change `SUM()` to `COUNT()`
- Add/remove columns

### 5. **Read SQLite Documentation:**
- [SELECT Statement](https://sqlite.org/lang_select.html)
- [Aggregate Functions](https://sqlite.org/lang_aggfunc.html)
- [Core Functions](https://sqlite.org/lang_corefunc.html)

---

## 🎓 PRACTICE EXERCISES

Try modifying the queries:

1. **Find the top 3 customers** (remove `LIMIT 1`, use `LIMIT 3`)
2. **Find albums with more than 30 tracks** (add `HAVING COUNT(*) > 30`)
3. **Find tracks longer than 5 minutes** (use `WHERE Milliseconds > 300000`)
4. **Count how many albums each artist has** (JOIN Album + Artist, GROUP BY artist)

Good luck with your lesson! 🚀
