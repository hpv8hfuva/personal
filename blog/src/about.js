import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function About() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col justify-center bg-gray-900 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                        <div className="w-full max-w-3xl mx-auto">

                            <div className="-my-6">
                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">working</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">present</time>
                                        <div className="text-xl font-bold text-white">software engineer II @ datadog</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">promoted</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">mar, 2024</time>
                                        <div className="text-xl font-bold text-white">software engineer II @ datadog</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">employed</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">aug, 2022</time>
                                        <div className="text-xl font-bold text-white">software engineer I @ datadog</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">internship</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">jun, 2022</time>
                                        <div className="text-xl font-bold text-white">intern @ two sigma</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">graduated</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                                        <div className="text-xl font-bold text-white">earned bachelor of science - cs + math @ uva</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">internship</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">dec, 2021</time>
                                        <div className="text-xl font-bold text-white">intern @ datadog</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">internship</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">jun, 2021</time>
                                        <div className="text-xl font-bold text-white">intern @ capital one</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>

                                <div className="relative pl-8 sm:pl-32 py-8 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">undergrad</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Aug, 2018</time>
                                        <div className="text-xl font-bold text-white">started cs in engineering school @ uva</div>
                                    </div>
                                    <div className="text-slate-500">blob</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

