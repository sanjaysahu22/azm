'use client'

export function Navbar() {
    const str = "<";
    return (
      <>
        <div className="bg-white h-full flex justify-between items-center sticky top-0 pl-6 z-50">
          {/* Search Input */}
          <div className="relative w-3/4 max-w-md">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-3/4 h-8 rounded-lg pl-3 font-semibold placeholder-blue-600 bg-gray-100 shadow-sm focus:outline-none"
            />
            {/* Search Icon */}
            <div className="absolute w-[5%] top-1 right-[30%] h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm8-8l-4.35-4.35"
                />
              </svg>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-around items-center w-1/4">
            <div className="w-6 h-8 bg-red-300 rounded-md"></div>
            <div className="w-6 h-8 bg-red-300 rounded-md"></div>
            <div className="flex gap-2 items-center w-1/2">
              <div className="w-8 h-8 bg-red-300 rounded-full"></div>
              <div className="leading-4">
                <div className="">Profile</div>
                <div className="text-xs">Manager</div>
              </div>
              <div>{str}</div>
            </div>
          </div>
        </div>
      </>
    );
}
