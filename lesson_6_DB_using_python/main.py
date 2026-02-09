
#!/usr/bin/env python3 

import sqlite3

if __name__ == "__main__":
        conn = sqlite3.connect("test.db")
        cur = conn.cursor()
        cur .execute(""CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        username VARCHAR(25) NOT NULL UNIQUE, 
        password VARCHAR(50) NOT NULL)"")
        cur.execute(""INSERT INTO users (username, password) 
        VALUES ('admin', 'testpass', ('alice, 'alicepwd'))"")
        conn.commit()
