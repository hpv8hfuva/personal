import sqlite3

# Connect to the SQLite database file
conn = sqlite3.connect("example.db")

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Create a table
cursor.execute(
    """CREATE TABLE IF NOT EXISTS users
                  (id INTEGER PRIMARY KEY, name TEXT, email TEXT)"""
)

# Insert data into the table
cursor.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)", ("Alice", "alice@example.com")
)
cursor.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)", ("Bob", "bob@example.com")
)

# Commit the changes
conn.commit()

# Close the connection
conn.close()
