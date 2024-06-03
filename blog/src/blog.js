import React, { useState } from 'react';


export default function Blog() {
    const [blogs, setBlogs] = useState([{
        id: 1,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "👋 Welcome to My Introduction Blog",
        author: {
            name: "John Doe",
            avatar: "http://i.pravatar.cc/300"
        },
        description: "This starter template is an attempt to replicate the default Ghost theme 'Casper' using Tailwind CSS and vanilla Javascript.",
        image: "https://source.unsplash.com/collection/325867/800x600",
        readTime: 7,
        content: "this is just content",
        category: "INTRODUCTION"
    },
    {
        id: 2,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "Exploring the World of React",
        author: {
            name: "Jane Smith",
            avatar: "http://i.pravatar.cc/301"
        },
        description: "Let's dive into the exciting world of React and its ecosystem.",
        image: "https://source.unsplash.com/collection/325867/800x600",
        readTime: 10,
        content: "Content for Exploring the World of React...",
        category: "TECHNOLOGY"
    },
    {
        id: 3,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Art of Cooking: A Beginner's Guide",
        author: {
            name: "Alice Johnson",
            avatar: "http://i.pravatar.cc/302"
        },
        description: "Learn the basics of cooking and impress your friends and family.",
        image: "https://source.unsplash.com/collection/325867/800x600",
        readTime: 15,
        content: "Content for The Art of Cooking...",
        category: "FOOD"
    },
    {
        id: 4,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "Travel Diaries: Exploring Europe",
        author: {
            name: "Michael Brown",
            avatar: "http://i.pravatar.cc/303"
        },
        description: "Follow me on my journey through the picturesque landscapes of Europe.",
        image: "https://source.unsplash.com/collection/456789/800x600",
        readTime: 12,
        content: "Content for Travel Diaries: Exploring Europe...",
        category: "TRAVEL"
    },
    {
        id: 5,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "Fitness Tips: Getting in Shape for Summer",
        author: {
            name: "Emily Wilson",
            avatar: "http://i.pravatar.cc/304"
        },
        description: "Get ready for summer with these effective fitness tips and workouts.",
        image: "https://source.unsplash.com/collection/567890/800x600",
        readTime: 8,
        content: "Content for Fitness Tips: Getting in Shape for Summer...",
        category: "HEALTH"
    },
    {
        id: 6,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 7,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 8,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 9,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 10,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 11,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 12,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 13,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 14,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    },
    {
        id: 15,
        cover: "https://source.unsplash.com/collection/325867/800x600",
        images: [],
        title: "The Power of Mindfulness: Finding Inner Peace",
        author: {
            name: "David Lee",
            avatar: "http://i.pravatar.cc/305"
        },
        description: "Discover the benefits of mindfulness and how it can transform your life.",
        image: "https://source.unsplash.com/collection/345678/800x600",
        readTime: 9,
        content: "Content for The Power of Mindfulness...",
        category: "WELLNESS"
    }]);

    const headlineBlog = blogs.length > 0 ? blogs[0] : null;
    const backgroundBlogs = blogs.slice(1);
    return (
        < >
            <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-8">
                <div class="mx-0 sm:mx-6">
                    <div class="bg-gray-900 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

                        <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
                            {/* ## Headliner */}
                            {headlineBlog &&
                                <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">
                                    <div class="w-full md:w-2/3 rounded-t">
                                        <img src={headlineBlog.cover} class="h-full w-full shadow" />
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
                                                    <img src={blog.cover} class="h-64 w-full rounded-t pb-6" />
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
                                                    <img src={blog.cover} class="h-[20rem] w-full rounded-t pb-6" />
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
                                                    <img src={blog.cover} class="h-[30rem] w-full rounded-t pb-6" />
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

                    <div class="container font-sans bg-green-100 rounded mt-8 mb-8 p-4 md:p-8 text-center">
                        <h2 class="font-bold break-normal text-xl md:text-4xl">subscribe to get the latest posts</h2>
                        <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-l">delivered right to your inbox</h3>
                        <div class="w-full text-center pt-2">
                            <form action="#">
                                <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                                    <input type="email" placeholder="pumpkin@patch.boo" class="flex-1 appearance-none rounded shadow p-2 text-gray-600 mr-2 focus:outline-none" />
                                    <button type="submit" class="flex-1 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-2 rounded shadow hover:bg-green-400">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </ >
    );
} 