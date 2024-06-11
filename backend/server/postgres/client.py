import sqlite3

DATABASE_PATH = "server/postgres/database/personal.db"


class DatabaseClient:
    def __init__(self):
        pass

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

        conn = sqlite3.connect(DATABASE_PATH, check_same_thread=False)
        cursor = conn.cursor()
        try:
            cursor.execute(
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
            conn.commit()
            blog_id = cursor.lastrowid
            return blog_id
        except sqlite3.Error as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    # def get_blog(self, blog_id):
    #     query = "SELECT * FROM blog WHERE id = ?"
    #     self.cursor.execute(query, (blog_id,))
    #     return self.cursor.fetchone()

    def delete_blog(self, blog_id):
        query = "DELETE FROM blog WHERE id = ?"
        conn = sqlite3.connect(DATABASE_PATH, check_same_thread=False)
        cursor = conn.cursor()
        cursor.execute(query, (blog_id,))
        conn.commit()

    def get_blogs(self, page_number, page_size=10):
        offset = (page_number - 1) * page_size
        query = "SELECT author_name, author_photo, cover_photo, title, description, category, content, read_time FROM blog LIMIT ? OFFSET ?"

        conn = sqlite3.connect(DATABASE_PATH, check_same_thread=False)
        cursor = conn.cursor()
        try:
            cursor.execute(query, (page_size, offset))
            return cursor.fetchall()
        except sqlite3.Error as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()
