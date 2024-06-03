import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <>
            <Navbar />
            <form className="p-16 bg-gray-900">
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
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-400">write an opening headline</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="content" className="block text-sm font-medium leading-6 text-white">
                                    content
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="content"
                                        name="content"
                                        rows={30}
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-white/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-white">personal</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">create your profile</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
                                    photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 text-gray-500" aria-hidden="true" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                                    >
                                        change
                                    </button>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete=""
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-white">
                            cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            save
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}