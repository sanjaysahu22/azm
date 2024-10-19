'use client'
import { Bell, ChevronDown,  CircleHelp, Search } from "lucide-react"
import Image from "next/image"
export function Navbar() {
    const str = "<"
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center border-b">
    <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
     
      <input type="text" placeholder="Search anything..." className="bg-transparent  outline-none" />
      <Search className="text-gray-400 mr-2" />
    </div>
    <div className="flex items-center space-x-4">
      <Bell />
      <CircleHelp />  

      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="flex items-center">
          <div  className="w-16">   
            <div className="font-semibold leading-3">Profile</div>
            <div className="text-xs">Manager</div>
          </div>
        <ChevronDown />
      </div>
    </div>
  </nav>
    </>
  );
}
