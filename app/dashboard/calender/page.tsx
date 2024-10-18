'use client'
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="h-screen w-full flex bg-zinc-100 ">
     
      <div className="fixed w-1/5 h-full">
        <Sidebar />
      </div>
      <div className="ml-[20%] w-4/5 bg-red-300 h-[10%]">
        <Navbar />
        
      </div>
    </div>
  );    
}
