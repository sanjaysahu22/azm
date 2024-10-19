import {
  ArrowDown,
  CalendarIcon,
  ChevronDown,
  Filter,
  Search,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Input } from "./ui/input";
export function CrashReport() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-lg font-semibold text-gray-500">
              Crash Frequency
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-lg font-semibold text-gray-500">
              User Impact
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-lg font-semibold text-gray-500">
              Error Types
            </span>
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

            <div className="px-3 rounded-full py-1 bg-zinc-100  text-center">
              ID
            </div>
            <div className="px-3 rounded-full py-2 bg-zinc-100 text-center">
              Designated Person
            </div>
            <div className=" flex justify-between  items-center w-32 ">
              <div className=" rounded-full py-1 px-3 bg-zinc-100 ">STATUS</div>
              <div className="flex justify-center items-center ml-4">
                {" "}
                <ArrowDown size={20} />
                <Button variant="ghost" className=" " onClick={toggleFilter}>
                  <Filter size={30} className="" />
                </Button>
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
                  <div className="w-8 h-8 bg-zinc-300 rounded-full overflow-hidden mr-2"></div>
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
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg w-[320px]">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={toggleFilter}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Showing 789 to 893 results
                  </p>
                </div>

                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="period" className="text-sm font-medium">
                      Period
                    </Label>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-gray-500"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Select Period
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Sort</Label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox id="due-date" className="border-gray-300" />
                        <label htmlFor="due-date" className="text-sm ml-2">
                          By Due Date
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="user-count" className="border-gray-300" />
                        <label htmlFor="user-count" className="text-sm ml-2">
                          By User Count
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="testing" className="border-gray-300" />
                        <label htmlFor="testing" className="text-sm ml-2">
                          Testing
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Assignees</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Search"
                        className="pl-8"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="Violet Robbins"
                        />
                        <AvatarFallback>VR</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="Ronald Robbins"
                        />
                        <AvatarFallback>RR</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="Birdie Garner"
                        />
                        <AvatarFallback>BG</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="Marvin Cooper"
                        />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimate" className="text-sm font-medium">
                      Estimate
                    </Label>
                    <Input
                      id="estimate"
                      placeholder="Employees"
                      className="bg-gray-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-sm font-medium">
                      Plan
                    </Label>
                    <Select>
                      <SelectTrigger id="plan" className="bg-gray-100">
                        <SelectValue placeholder="Premium" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="pro">Pro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    10 matches found
                  </span>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Save Filters (3)
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
