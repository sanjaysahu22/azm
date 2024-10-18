'use client'
import {  Download,  RefreshCw,  } from "lucide-react"
import Image from "next/image"

import { useState } from "react";

export function Payments() {
    const [state ,setState] = useState(null);
    
      
    const str = "<";
    return (
      <>
     <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Companies Invoices</h2>
                <div className="flex space-x-2">
                  <RefreshCw className="h-6 w-6 text-gray-500" />
                  <Download className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="McDonald's"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <span className="text-xl font-medium">McDonalds</span>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Description</th>
                    <th className="pb-3">Billing Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(12)].map((_, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4">Feb 2, 2024</td>
                      <td className="py-4">
                        <div>Quarterly true-up</div>
                        <div className="text-sm text-gray-500">July 14, 2023 - July 5,2024</div>
                      </td>
                      <td className="py-4">Rs 50,00.00</td>
                      <td className="py-4">
                        <span className="text-green-600 font-medium">Paid</span>
                        <div className="text-sm text-purple-600">View Invoice</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>      </>
    );
}
