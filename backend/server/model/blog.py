from pydantic import BaseModel


class Blog(BaseModel):
    author: str
    author_photo: str
    cover_photo: str
    title: str
    description: str
    category: str
    content: str


class BlogPreview(BaseModel):
    author: str
    author_photo: str
    cover_photo: str
    title: str
    description: str
    read_time: int
