import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Radio, RadioGroup } from '@headlessui/react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const displays = [
    { value: 'markdown' },
    { value: 'preview' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorPhoto, setAuthorPhoto] = useState('');
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [readTime, setReadTime] = useState(0);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(displays[0]);

    const saveBlog = () => {
        if (!name || !password || name !== 'hpv8hf' || password !== 'Darkfruit1971.') {
            alert('Invalid username or password');
            reset();
            return;
        }
        fetch('http://127.0.0.1:5000/create/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: "hunter v",
                author_photo: '',
                cover_photo: 'https://source.unsplash.com/collection/325867/800x600',
                title: title,
                description: description,
                category: 'technology',
                content: content,
                read_time: 8,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => reset());
    }

    const reset = () => {
        setTitle('');
        setContent('');
        setAuthorPhoto('');
        setCoverPhoto(null);
        setDescription('');
        setCategory('');
        setReadTime(0);
        setName('');
        setPassword('');
    }

    return (
        <>
            <Navbar />
            <div className="p-16 bg-gray-900">
                <div className="space-y-12">
                    <div className="border-b border-white/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-white">create a post</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            write a new post
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
                                    cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                                            >
                                                <span>upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-400">png, jpg, gif up to 10mb</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                                    title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        autoComplete=""
                                        className="block w-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="headline" className="block text-sm font-medium leading-6 text-white">
                                    headline
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="headline"
                                        name="headline"
                                        rows={3}
                                        className="block w-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-400">write an opening headline</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="content" className="block text-sm font-medium leading-6 text-white">
                                    content
                                </label>
                                <div className="my-5 flex">
                                    <fieldset aria-label="content display">
                                        <RadioGroup
                                            value={display}
                                            onChange={setDisplay}
                                            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                                        >
                                            {displays.map((option) => (
                                                <Radio
                                                    key={option.value}
                                                    value={option}
                                                    className={({ checked }) =>
                                                        classNames(
                                                            checked ? 'bg-green-500 text-white' : 'text-gray-400',
                                                            'cursor-pointer rounded-full px-2.5 py-1'
                                                        )
                                                    }
                                                >
                                                    {option.value}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <div className="mt-2">
                                    {
                                        display.value === 'markdown' ? (
                                            <textarea
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                className="block w-full h-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                id="content"
                                                name="content"
                                                rows={26}
                                            />
                                        ) : (
                                            <ReactMarkdown className="block w-full h-full min-h-[40rem] rounded-md border-0 bg-white/5 p-2 markdown-body text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500">{content}</ReactMarkdown>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-white/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-white">administrator</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">provide credentials</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6">
                        <button onClick={reset}
                            type="button" className="text-sm font-semibold leading-6 text-white">
                            cancel
                        </button>
                        <button
                            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={saveBlog}
                        >
                            save
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}