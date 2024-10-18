'use client'
import Link from "next/link";
import {  Settings } from "lucide-react"
const str = ">"
export  function Sidebar() {
  return (
    <> 
        <aside className="w-64 bg-white h-screen p-4 border-r">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
      <span className="text-xl font-semibold">Dashboard</span>
    </div>
    <nav className="space-y-2">
      {['Dashboard', 'Calendar', 'CrashReport', 'Payments', 'Email', 'Settings'].map((item, index) => (
        <Link
          key={item}
          href={`/dashboard/${item}`}
          className="flex items-center p-2 rounded-lg text-gray-600  bg-gray-100 hover:bg-purple-100 hover:text-purple-600"
        >
          <div className={`w-5 h-5 ${index === 0 ? 'bg-purple-600' : 'bg-gray-400'} rounded mr-3`}></div>
          {item}
        </Link>
      ))}
    </nav>
  </aside>
    </>
  );
}

