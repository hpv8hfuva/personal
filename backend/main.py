from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from server.model.blog import Blog
from server.server import Server

app = FastAPI()

s = Server()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "*",
]
# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/create/blog")
def save_blog(blog: Blog):
    blog_id = s.save_blog(blog)
    return {"id": blog_id}


@app.get("/blogs")
def get_blogs():
    blogs = s.get_blogs(1)
    return blogs
