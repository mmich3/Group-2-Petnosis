import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white p-4 text-center shadow-md z-50">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to='./Location'>Diagnosis</a>
                            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Vet</a>
                            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Add Pet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
