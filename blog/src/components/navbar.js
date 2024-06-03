import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../assets/bg', false, /\.(png|jpe?g|svg)$/));

export default function Navbar() {
    const getRandomImage = () => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    };
    const randomImage = getRandomImage();
    // backgroundImage: `url(${randomImage})`
    return (
        <>
            <div class="w-full m-0 p-0 bg-cover bg-bottom bg-gray-900" style={{ height: "60vh", maxHeight: "300px" }}>
                <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                    <a href="/" class="text-white hover:text-green-400 font-extrabold text-3xl md:text-5xl">
                        hunter
                    </a>
                    <p class="text-xl md:text-2xl text-gray-500">welcome</p>
                </div>

                <nav class="mt-0 w-full">
                    <div class="container mx-auto flex items-center">

                        <div class="flex w-1/2 pl-4 text-sm">
                            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                                <li class="mr-2">
                                    <a class="inline-block text-gray-200 no-underline hover:text-green-400 py-2 px-2" href="/">posts</a>
                                </li>
                                <li class="mr-2">
                                    <a class="inline-block text-gray-200 no-underline hover:text-green-400  py-2 px-2" href="/books">books</a>
                                </li>
                                <li class="mr-2">
                                    <a class="inline-block text-gray-200 no-underline hover:text-green-400 py-2 px-2" href="/about">about</a>
                                </li>
                                <li class="mr-2">
                                    <a class="inline-block text-gray-200 no-underline hover:text-green-400  py-2 px-2" href="/contact">contact</a>
                                </li>
                                <li class="mr-2">
                                    <a class="inline-block text-gray-200 no-underline hover:text-green-400  py-2 px-2" href="/create">create</a>
                                </li>
                            </ul>
                        </div>


                        <div class="flex w-1/2 justify-end content-center">
                            <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@github_handle" href="https://github.com/hpv8hfuva">
                                <FaGithub size="20" color="black" />
                            </a>
                            <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@linkedin_handle" href="https://www.linkedin.com/in/hunter-vaccaro/">
                                <FaLinkedin size="20" color="#0A66C2" />
                            </a>
                            <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@twitter_handle" href="https://x.com/retnuhbot/">
                                <FaXTwitter size="20" color="black" />
                            </a>
                        </div>

                    </div>
                </nav>
            </div >
        </>
    );
} 
