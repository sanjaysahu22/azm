import {
  RefreshCw,
  Download,
  ArrowUp,
  Filter,
  ArrowDown,
  Search,
} from "lucide-react";

export const CompanyStatsTable = () => (
  <div className="bg-white p-4 rounded-lg shadow mt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Company Stats</h2>
      <div className="flex space-x-2">
        <Search size={20} />
        <RefreshCw size={20} />
        <ArrowDown size={20} />
        <Filter size={20} />
      </div>
    </div>
    <table className="w-full table-auto bg-zinc-100">
      <tbody className="">
        {[...Array(7)].map((_, i) => (
          <tr key={i} className="border-t ">
            <td className="text-center">
              <div className="text-xs py-1">Company</div>
              <div className="py-2 my-2">TATA</div>
            </td>
            <td className="text-center">
              <div className="text-xs py-1">Plan</div>
              <div className="py-2 my-2">Premium</div>
            </td>
            <td className="text-center">
              <div className="text-xs py-1">Next Due</div>
              <div className="py-2 my-2">Sep 30, 2024</div>
            </td>
            <td className="text-center ">
              <div className="text-xs pb-2 ">Assignee</div>
              <div className="flex justify-center items-center  my-2 gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="">John Smith</div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-xs py-1">Employee</div>
              <span className="flex justify-center items-center my-4 text-orange-500">
                <ArrowUp size={16} />
                Medium
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
