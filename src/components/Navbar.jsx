import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'



const Navbar = () => {

  return (
    <>      
<nav className="bg-blue-950 text-[#ae1e55] lg:px-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <span className="self-center text-xl font-bold whitespace-nowrap lg:mx-0 mx-5">Anonymous</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-[#ae1e55] md:p-0 font-bold " aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 pl-3 pr-4 text-[#ae1e55] md:p-0 font-bold">About</Link>
        </li>
        <li>
          <Link to="/faqs" className="block py-2 pl-3 pr-4 text-[#ae1e55] md:p-0 font-bold">FAQs</Link>
        </li>
        <li>
          <Link to="/signin" className="block py-2 pl-3 pr-4 text-[#ae1e55] md:p-0 font-bold">Sign in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar