import { ChevronDown, Search, Settings } from "lucide-react";
export  function CrashReport() {
    return (
    <> 
        <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
          <span className="text-lg font-semibold text-gray-500">Crash Frequency</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
          <span className="text-lg font-semibold text-gray-500">User Impact</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
          <span className="text-lg font-semibold text-gray-500">Error Types</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border rounded-md pl-4 pr-10 py-2">
              <option>Ticket Raised on</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-3"></th>
              <th className="pb-3">ID</th>
              <th className="pb-3">DESIGNATED PERSON</th>
              <th className="pb-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-md mr-3"></div>
                    <div>
                      <div className="font-medium">Tesla</div>
                      <div className="text-sm text-gray-500">12/2/22</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">PRE22{index + 8}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    John Smith
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>  
        </table>
      </div>
    </div>
      </>
    );
  }