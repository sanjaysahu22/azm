'use client'

import { useState } from "react";

export function Payments() {
    const [state ,setState] = useState(null);
    
      
    const str = "<";
    return (
      <>
      <div className="ml-[20%] w-4/5 h-full bg-zinc-100 static  ">
        <div className="flex flex-col h-1/4 mt-2  w-[98%] rounded-md justify-between  px-5 py-4 m-auto bg-white  ">
          <div className="flex justify-between w-full items-center ">
              <div className="font-semibold text-xl ">Company invoices</div>
              <div className="flex w-1/6  justify-evenly">
                <div className="h-4 w-4 rounded-full bg-red-200"></div>
                <div  className="h-4 w-4 rounded-full bg-red-200"></div>
                <div  className="h-4 w-4 rounded-full bg-red-200"></div>
                <div  className="h-4 w-4 rounded-full bg-red-200"></div>
                </div>
          </div>

          <div className="flex gap-3  ">
            <div className="h-6 w-6 rounded-md bg-red-300 " ></div ><div className="font-bold text-sm  ">McDonalds</div></div>
            <div className="flex justify-between mt-2 w-full   py-2  rounded-full bg-zinc-100 self-center ">
            <div className="bg-zinc-200 px-2 rounded-full ml-8">Date</div>
            <div  className="bg-zinc-200 px-2 rounded-full">Description</div>
            <div  className="bg-zinc-200 px-2 rounded-full">Billing Amount</div>
            <div  className="bg-zinc-200 px-2 rounded-full mr-8">status</div>
          </div>
        </div>
       <div className="bg-white w-[98%] m-auto  mt-2 rounded-lg py-3 px-1 gap-3">
       <div className="flex justify-between px-10  text-sm   w-full h-16   rounded-md bg-zinc-100 items-center ">
            <div className=" ">Feb 2, 2024</div>
            <div  className="  flex flex-col  justify-center items-center">
                <div className="font-semibold">Quaterly true-up</div>
                <div className="text-sm ">July 1:2023 - July 5:2023</div>
            </div>
            <div  className="">Rs. 50,000</div>
            <div  className="  flex flex-col items-center leading-3 justify-center ">
                <div className="font-bold">Paid</div>
                <div className="    text-blue-500 text-sm">view invoice</div>
                </div>
          </div>
          </div> 
       
      </div>
      </>
    );
}
