import sqlite3

# Connect to the SQLite database file
conn = sqlite3.connect("database/personal.db")

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

DATABASE_PATH = "database/personal.db"


class DatabaseClient:
    def __init__(self):
        self.conn = sqlite3.connect("database/personal.db")
        self.cursor = self.conn.cursor()

    def insert_blog(
        self,
        author,
        author_photo,
        cover_photo,
        title,
        description,
        category,
        content,
        read_time,
    ):
        query = "INSERT INTO blog (author_name, author_photo, cover_photo, title, description, category, content, read_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        self.cursor.execute(
            query,
            (
                author,
                author_photo,
                cover_photo,
                title,
                description,
                category,
                content,
                read_time,
            ),
        )
        self.conn.commit()

        blog_id = self.cursor.lastrowid

        return blog_id

    def get_blog(self, blog_id):
        query = "SELECT * FROM blog WHERE id = ?"
        self.cursor.execute(query, (blog_id,))
        return self.cursor.fetchone()

    def delete_blog(self, blog_id):
        query = "DELETE FROM blog WHERE id = ?"
        self.cursor.execute(query, (blog_id,))
        self.conn.commit()

    def get_blogs(self, page_size, page_number):
        offset = (page_number - 1) * page_size
        query = "SELECT * FROM blog LIMIT ? OFFSET ?"
        self.cursor.execute(query, (page_size, offset))
        return self.cursor.fetchall()
