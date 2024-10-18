'use client'
import { Bell, ChevronDown,  Menu, Search } from "lucide-react"
import Image from "next/image"
export function Navbar() {
    const str = "<"
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center border-b">
    <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
      <Search className="text-gray-400 mr-2" />
      <input type="text" placeholder="Search anything..." className="bg-transparent outline-none" />
    </div>
    <div className="flex items-center space-x-4">
      <Bell />
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="flex items-center">
        <span className="mr-2">Profile</span>
        <ChevronDown />
      </div>
    </div>
  </nav>
    </>
  );
}
