import { RefreshCw, Download, ArrowUp } from "lucide-react";

 export const CompanyStatsTable = () => (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Company Stats</h2>
        <div className="flex space-x-2">
          <RefreshCw size={20} />
          <Download size={20} />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Company</th>
            <th className="py-2">Plan</th>
            <th className="py-2">Next Due</th>
            <th className="py-2">Assignee</th>
            <th className="py-2">Employee</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(7)].map((_, i) => (
            <tr key={i} className="border-t">
              <td className="py-3">TATA</td>
              <td className="py-3">Premium</td>
              <td className="py-3">Sep 30, 24</td>
              <td className="py-3 flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                John Smith
              </td>
              <td className="py-3">
                <span className="flex items-center text-orange-500">
                  <ArrowUp size={16} />
                  Medium
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )