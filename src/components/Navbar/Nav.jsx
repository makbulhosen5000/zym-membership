import React, { useState } from 'react';
import Link from '../Link/Link';
import Logo from '../../assets/logo.png';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
   const myArray = [
  { id: 1, name: 'About', age: 32, city: 'New York', path: '/about' },
  { id: 2, name: 'Home', age: 27, city: 'Los Angeles', path: '/home' },
  { id: 3, name: 'Contact', age: 45, city: 'Chicago', path: '/contact' },
  { id: 4, name: 'Products', age: 29, city: 'San Francisco', path: '/products' },
  { id: 5, name: 'Prices', age: 38, city: 'Miami', path: '/services' }
];
    return (
       <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Hamburger menu icon */}
                    <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                    aria-label="Main menu"
                    aria-expanded="false"
                    >
                    <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path fill="none" stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                        <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Logo" />
                        <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Logo" />
                        </div>
                    </div>

                    {/* List items */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                       {/* List items */}
                       {myArray.map(item=><Link item={item}/>)}
                    
                    </div>
                     {/* <div className="flex-2 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                        <img className="block lg:hidden h-8 w-auto" src="/logo-mobile.png" alt="Logo" />
                        <img className="hidden lg:block h-8 w-auto" src="/logo-desktop.png" alt="Logo" />
                        </div>
                    </div> */}
                    </div>

                    {/* Responsive Navbar */}
                    <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="px-2 pt-2 pb-3">
                            {myArray.map(item=><Link item={item}/>)}
                        </div>
                    </div>
            </div>
        </nav>
    );
};

export default Nav;
