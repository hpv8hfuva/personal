import React, { useState, useEffect } from 'react';


export default function Posts() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then(data => {
                setBlogs(prevBlogs => [...data])
            })
            .catch(error => console.error(error));
    }, []);

    const headlineBlog = blogs.length > 0 ? blogs[0] : null;
    const backgroundBlogs = blogs.slice(1);


    return (
        < >
            <div class="min-h-lvh px-4 md:px-0 max-w-6xl mx-auto ">
                <div class="mx-0 sm:mx-6">
                    <div class="bg-gray-900 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

                        <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
                            {/* ## Headliner */}
                            {headlineBlog &&
                                <a href="post.html" class="flex w-full flex-wrap no-underline hover:no-underline">
                                    <div class="w-full md:w-2/3 rounded-t">
                                        <img src="https://source.unsplash.com/collection/325867/800x600" class="h-full w-full shadow" />
                                    </div>
                                    <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                            <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{headlineBlog.category}</p>
                                            <div class="w-full font-bold text-xl text-gray-900 px-6">{headlineBlog.title}</div>
                                            <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                                {headlineBlog.description}
                                            </p>
                                        </div>

                                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                            <div class="flex items-center justify-between">
                                                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content={headlineBlog.author.name} src={headlineBlog.author.avatar} alt={headlineBlog.author.name} />
                                                <p class="text-gray-600 text-xs md:text-sm">{headlineBlog.readTime} MIN READ</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            }
                        </div>

                        <div class="flex flex-wrap justify-between pt-10 -mx-6">
                            {backgroundBlogs.map((blog, index) => (
                                <>
                                    {index % 7 < 3 &&
                                        (< div class="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink" >
                                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                                    <img src="https://source.unsplash.com/collection/325867/800x600" class="h-64 w-full rounded-t pb-6" />
                                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">{blog.category}</p>
                                                    <div class="w-full font-bold text-xl text-gray-900 px-6">{blog.title}</div>
                                                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                                        {blog.description}
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                                <div class="flex items-center justify-between">
                                                    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content={blog.author.name} src={blog.author.avatar} alt={blog.author.name} />
                                                    <p class="text-gray-600 text-xs md:text-sm">{blog.readTime} MIN READ</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                    {(index % 7 == 3 || index % 7 == 6) &&
                                        (< div class="w-full md:w-1/3 p-4 flex flex-col flex-grow flex-shrink">
                                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                                    <img src="https://source.unsplash.com/collection/325867/800x600" class="h-[20rem] w-full rounded-t pb-6" />
                                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">{blog.category}</p>
                                                    <div class="w-full font-bold text-xl text-gray-900 px-6">{blog.title}</div>
                                                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                                        {blog.description}
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                                <div class="flex items-center justify-between">
                                                    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content={blog.author.name} src={blog.author.avatar} alt={blog.author.name} />
                                                    <p class="text-gray-600 text-xs md:text-sm">{blog.readTime} MIN READ</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                    {(index % 7 == 4 || index % 7 == 5) &&
                                        (< div class="w-full md:w-2/3 p-4 flex flex-col flex-grow flex-shrink">
                                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                                    <img src="https://source.unsplash.com/collection/325867/800x600" class="h-[30rem] w-full rounded-t pb-6" />
                                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">{blog.category}</p>
                                                    <div class="w-full font-bold text-xl text-gray-900 px-6">{blog.title}</div>
                                                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                                        {blog.description}
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                                <div class="flex items-center justify-between">
                                                    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content={blog.author.name} src={blog.author.avatar} alt={blog.author.name} />
                                                    <p class="text-gray-600 text-xs md:text-sm">{blog.readTime} MIN READ</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </>
                            ))
                            }
                        </div >
                    </div>
                </div>
            </div >
        </ >
    );
} 