import Navbar from './components/navbar'
import Footer from './components/footer'

const books = [
    { status: 'not started', title: 'Foundations of Python Network Programming: The comprehensive guide to building network applications with Python', subject: 'Python', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Learning Python 4th Edition', subject: 'Python', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython', subject: 'Python', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Expert Python Programming: Learn Best Practices to Designing, Coding, and Distributing Your Python Software', subject: 'Python', notes: 'Member', link: '#' },
    { status: 'in progress', title: 'Algorithmic Trading Winning Strategies and Their Rationale', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Successful Algorithmic Trading', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Advanced Algorithmic Trading', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'C++ For Quantitative Finance', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Essentials of Investment', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Systematic Trading - A unique new method for designing trading and investing systems', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Advances in Financial Machine Learning', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'The Leverage Space Trading Model: Reconciling Portf Management Strategies & Economic Theory', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'The Universal Tactics of Successful Trend Trading', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Statistical Sound Indicators For Financial Market Prediction', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Cycle Analytics for Traders: Advanced Technical Trading Concepts', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Stocks on the Move', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Cybernetic Trading Strategies', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Testing and Tuning Market Trading Systems', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Permutation and Randomization Tests for Trading System Development', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Option Volatility and Pricing', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Dynamic Hedging', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Frequently Asked Questions in Quantitative Finance (Second Edition)', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Advances in Active Portfolio Management', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Technical Analysis is Mostly Bullshit', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Quantitative Trading: How to Build Your Own Algorithmic Trading Business', subject: 'Trade', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Accelerated C++: Practical Programming by Example', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Effective C++: 55 Specific Ways to Improve Your Programs and Designs', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'More Effective C++: 35 New Ways to Improve Your Programs and Designs', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Effective STL: 50 Specific Ways to Improve Your Use of the Standard Template Library', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Modern C++ Design: Generic Programming and Design Patterns Applied', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'C++ Concurrency in Action: Practical Multithreading', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'The C++ Programming Language, 4th Edition', subject: 'C++', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Learning SQL: Master SQL Fundamentals', subject: 'SQL', notes: 'Member', link: '#' },
    { status: 'not started', title: 'SQL Cookbook: Query Solutions and Techniques for Database Developers', subject: 'SQL', notes: 'Member', link: '#' },
    { status: 'not started', title: 'High Performance MySQL: Optimization, Backups, and Replication', subject: 'SQL', notes: 'Member', link: '#' },
    { status: 'not started', title: 'MySQL High Availability: Tools for Building Robust Data Centers', subject: 'SQL', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Code Complete: A Practical Handbook of Software Construction, Second Edition', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Design Patterns: Elements of Reusable Object-Oriented Software', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'The Effective Engineer', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'System Design Interview Grokking', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Algorithms', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Numerical Recipes: The Art of Scientific Computing', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Data-Driven Science and Engineering', subject: 'CS', notes: 'Member', link: '#' },
    { status: 'not started', title: 'An Elementary Introduction to Mathematical Finance Second Edition', subject: 'Math', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Stochastic Processes An Introduction', subject: 'Math', notes: 'Member', link: '#' },
    { status: 'not started', title: 'The Mathematics of Money Management', subject: 'Math', notes: 'Member', link: '#' },
    { status: 'not started', title: 'Introduction to Linear Algebra', subject: 'Math', notes: 'Member', link: '#' },
]


export default function Bookshelf() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-gray-900 py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-base font-semibold leading-6 text-white">bookshelf</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        shelf of books
                                    </p>
                                </div>
                                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <button
                                        type="button"
                                        className="block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        add book
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y divide-gray-700">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                        status
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        title
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        subject
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        notes
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        buy
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                {books.map((book, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                            {book.status}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{book.title}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{book.subject}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{book.notes}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300"><a href={book.link}>link</a></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}