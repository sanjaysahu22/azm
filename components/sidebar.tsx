'use client'
import Link from "next/link";

const str = ">"
export  function Sidebar() {
  return (
    <> 
        <div className="w-1/5 bg-white h-screen flex fixed flex-col items-center ">
        <div className="text-3xl p-8 font-semibold"> Dashboard <span className="text-sm text-zinc-400">v.01</span></div>
        <div className="flex flex-col w-2/3 gap-3 text-sm   mt-5 text-zinc-400">
          <div className="flex justify-between  rounded-lg  py-2 px-1    ">
            <div className="flex  w-3/4   px-1 ">
            <div className="bg-red-300 w-6 rounded-full"></div>
           <Link href='/dashboard/main' className=" ml-5">Dashboard</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          <div className="flex justify-between  rounded-lg  py-2 px-1 ">
            <div className="flex  w-3/4 px-1 ">
            <div className="bg-red-300 w-6 rounded-full"></div>
           <Link href='/dashboard/calender' className="ml-5">Calender</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          <div className="flex justify-between  rounded-lg  py-2 px-1 ">
            <div className="flex  w-3/4  px-1 ">
            <div className="bg-red-300 w-6  rounded-full"></div>
           <Link href='/dashboard/crashReport' className="ml-5">Crash Report</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          <div className="flex justify-between  rounded-lg  py-2 px-1 ">
            <div className="flex  w-3/4 px-1 ">
            <div className="bg-red-300 w-6   rounded-full"></div>
           <Link href='/dashboard/payments' className="ml-5">payments</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          <div className="flex justify-between  rounded-lg  py-2 px-1 ">
            <div className="flex  w-3/4   px-1 ">
            <div className="bg-red-300 w-6 rounded-full"></div>
           <Link href='/dashboard/email' className="ml-5">Email</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          <div className="flex justify-between  rounded-lg  py-2 px-1 ">
            <div className="flex  w-3/4 px-1 ">
            <div className="bg-red-300 w-6 rounded-full"></div>
           <Link href='/dashboard/settings' className="ml-5">Settings</Link>
           </div>
          <div className="mr-2">{str}</div>
          </div>
          
       

           
            
           
        </div>
            
        </div>
    
    </>
  );
}

