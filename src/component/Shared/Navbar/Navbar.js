
import React  from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        
        <nav class="mx-auto block w-full  rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div>
          <div class="container mx-auto flex items-center justify-around text-gray-900">
            <a
              href="/"
              class="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <span>Furnitures-Home</span>
            </a>
            <ul role="menu"data-popover="menu"data-popover-placement="bottom" class="hidden items-center gap-6 lg:flex">
              <li  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="/">
                  Home
                </a>
              </li>
              <li  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to='/store' class="flex items-center" >
                  Store 
                </Link>
              </li>
              <li  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="/">
                  Product
                </a>
              </li>
              <li  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="/">
                  Dashboard
                </a>
              </li>
              <button  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="/">
                  Sing in
                </a>
              </button>
              <button  role="menuitem" class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <a class="flex items-center" href="/">
                  Sing up
                </a>
              </button>
            </ul>
           
            <button
              class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              data-collapse-target="navbar"
            >
              <button   data-ripple-light="true"
  data-popover-target="menu"  class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </button>
          </div>
          <div
            class="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden"
            data-collapse="navbar"
          >
            <div class="container mx-auto">
              <ul class="mt-2 mb-4 flex flex-col gap-2">
                <li class="block p-1 font-sans text-sm font-normal leading-normal text-blue-gray-600 text-inherit antialiased">
                  <a class="flex items-center" href="/">
                    Pages
                  </a>
                </li>
                <li class="block p-1 font-sans text-sm font-normal leading-normal text-blue-gray-600 text-inherit antialiased">
                  <a class="flex items-center" href="/">
                    Account
                  </a>
                </li>
                <li class="block p-1 font-sans text-sm font-normal leading-normal text-blue-gray-600 text-inherit antialiased">
                  <a class="flex items-center" href="/">
                    Blocks
                  </a>
                </li>
                <li class="block p-1 font-sans text-sm font-normal leading-normal text-blue-gray-600 text-inherit antialiased">
                  <a class="flex items-center" href="/">
                    Docs
                  </a>
                </li>
              </ul>
              <button
                class="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
        
       
  
        
       
    );
    
};

export default Navbar;