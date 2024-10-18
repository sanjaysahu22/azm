'use client'
import { CrashReport } from "@/components/crashReport";
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />  
    <div className="flex-1 flex flex-col overflow-hidden">
    <Navbar />
    <CrashReport />
   
    </div>
  </div>
  );    
}
