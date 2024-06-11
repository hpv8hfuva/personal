import React from 'react';
import Navbar from './components/navbar';
import Posts from './posts';
import Footer from './components/footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Posts />
            <Footer />
        </>
    );
} 
