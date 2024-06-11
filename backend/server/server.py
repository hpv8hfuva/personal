from server.model.blog import Blog
from server.postgres.client import DatabaseClient


class Server:
    def __init__(self):
        self.database_client = DatabaseClient()

    def save_blog(self, blog: Blog):
        # validation on blog
        blog_id = self.database_client.insert_blog(
            blog.author,
            blog.author_photo,
            blog.cover_photo,
            blog.title,
            blog.description,
            blog.category,
            blog.content,
            blog.read_time,
        )

        return blog_id

    def get_blogs(self, page_number):
        blog_models = []
        blogs = self.database_client.get_blogs(page_number)
        for blog in blogs:
            blog_model = Blog(
                author=blog[0],
                author_photo=blog[1],
                cover_photo=blog[2],
                title=blog[3],
                description=blog[4],
                category=blog[5],
                content=blog[6],
                read_time=blog[7],
            )
            blog_models.append(blog_model)
        return blog_models
