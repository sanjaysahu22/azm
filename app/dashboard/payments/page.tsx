'use client'
import { Navbar } from "@/components/navbar"
import { Payments } from "@/components/payments";
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar />  
        <div className="flex-1 flex flex-col ">
        <Navbar />
        <Payments />
        </div>
      </div>
  );
}
