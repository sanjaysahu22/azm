'use client';
import { ArrowDown, Download, Filter, RefreshCw, Search } from "lucide-react";
import { useState } from "react";

export function Payments() {
  const [state, setState] = useState(null);

  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Companies Invoices</h2>
              <div className="flex space-x-2">
              <Search size={20} />
        <RefreshCw size={20} />
        <ArrowDown size={20} />
        <Filter size={20} />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg bg-red-300"></div>
              <span className="text-xl font-medium ml-4">McDonald's</span>
            </div>

            <div className="overflow-y-auto max-h-96"> {/* Set the height for the scrollable area */}
              <table className="w-full">
                {/* Sticky header */}
                <thead className="bg-zinc-200 sticky top-0 h-10 rounded-md z-10">
                  <tr className="py-2 text-gray-500 text-sm">
                    <th className=""><div className="">Date</div></th>
                    <th className="">Description</th>
                    <th className="">Billing Amount</th>
                    <th className="">Status</th>
                  </tr>
                </thead>

                {/* Scrollable body */}
                <tbody className="text-center space-y-2">
                  {[...Array(10 )].map((_, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4">Feb 2, 2024</td>
                      <td className="py-4">
                        <div>Quarterly true-up</div>
                        <div className="text-sm text-gray-500">
                          July 14, 2023 - July 5, 2024
                        </div>
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
        </div>
      </main>
    </>
  );
}
