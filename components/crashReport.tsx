import { ArrowDown, ChevronDown, Filter, Search } from "lucide-react";

export function CrashReport() {
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

        <div className="bg-white p-4 rounded-lg shadow ">
          <div className="flex justify-between  mb-4 w-[96%] relative">
            {/* Search and Filters */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md w-full"
              />
            </div>

            <div className="relative">
              <select className="appearance-none bg-white border rounded-md pl-4 pr-10 py-2">
                <option>Ticket Raised on</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="px-3 rounded-full py-1 bg-zinc-100  text-center">ID</div>
            <div className="px-3 rounded-full py-2 bg-zinc-100 text-center">Designated Person</div>
            <div className=" flex justify-between  items-center w-32 ">
              <div className=" rounded-full py-1 px-3 bg-zinc-100 ">STATUS</div>
              <div  className="flex">               <ArrowDown size={15} />
              <Filter size={15} />
</div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="max-h-96 overflow-y-auto  ">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4"
              >
                {/* Tesla */}
                <div className="flex items-center w-1/5 text-left">
                  <div className="w-12 h-12">
                    <img
                      src="https://logo.clearbit.com/tesla.com" // Example Tesla logo
                      alt="Tesla"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-lg">Tesla</div>
                  </div>
                </div>

                {/* Date */}
                <div className="w-1/5 text-center text-gray-600">12/2/22</div>

                {/* ID */}
                <div className="w-1/5 text-center text-gray-600">PRE2209</div>

                {/* Designated Person */}
                <div className="flex items-center justify-center w-1/5 text-center">
                  <div className="w-8 h-8 bg-zinc-300 rounded-full overflow-hidden mr-2">
                   
                  </div>
                  <div>John Smith</div>
                </div>

                {/* Status */}
                <div className="w-1/5 text-center">
                  <span className="px-3 py-1 text-sky-800 font-semibold rounded-full">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
