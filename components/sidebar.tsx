'use client'
import Link from "next/link";
import {  HandCoins,   KeyRound, Calendar, FolderCog, Mail, UserRoundPen } from "lucide-react"

export  function Sidebar() {
  return (
    <> 
        <aside className="w-64 bg-white h-screen p-4 border-r">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
      <span className="text-2xl font-semibold">Dashboard</span><span className="font text-zinc-400  p-1 text-sm">v.01</span>
    </div>
    <nav className="space-y-4 mt-12">
      {[{ title: 'Dashboard', icon: <KeyRound /> },
  { title: 'Calendar', icon: <Calendar /> },
  { title: 'CrashReport', icon:<UserRoundPen /> },
  { title: 'Payments', icon: <HandCoins /> },
  { title: 'Email', icon:  <Mail /> },
  { title: 'Settings', icon:  <FolderCog /> }].map((item, index) => (
        <Link
          key={index}
          href={`/dashboard/${item.title}`}
          className="flex items-center p-2 rounded-lg text-gray-600  bg-gray-100 hover:bg-purple-100 hover:text-purple-600"
        >
          <div className={`w-5 h-5 mr-8 rounded `}>{item.icon}</div>
          {item.title}
          
        </Link>
      ))}
    </nav>
  </aside>
    </>
  );
}

