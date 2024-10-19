import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { X, CalendarIcon, Search } from "lucide-react";
import { Input } from "./ui/input"; 
import { Button } from "./ui/button";
import { useState } from "react";

export const FilterComponent = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<div className="bg-white rounded-lg shadow-lg w-[320px]">
  <div className="p-4 border-b">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">Filters</h2>
      <Button variant="ghost" size="sm" onClick={toggleFilter}>
        <X className="h-4 w-4" />
      </Button>
    </div>
    <p className="text-sm text-gray-500">Showing 789 to 893 results</p>
  </div>

  <div className="p-4 space-y-4">
    <div className="space-y-2">
      <Label htmlFor="period" className="text-sm font-medium">Period</Label>
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
          <label htmlFor="due-date" className="text-sm ml-2">By Due Date</label>
        </div>
        <div className="flex items-center">
          <Checkbox id="user-count" className="border-gray-300" />
          <label htmlFor="user-count" className="text-sm ml-2">By User Count</label>
        </div>
        <div className="flex items-center">
          <Checkbox id="testing" className="border-gray-300" />
          <label htmlFor="testing" className="text-sm ml-2">Testing</label>
        </div>
      </div>
    </div>

    <div className="space-y-2">
      <Label className="text-sm font-medium">Assignees</Label>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <Input type="search" placeholder="Search" className="pl-8" />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Violet Robbins" />
          <AvatarFallback>VR</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Ronald Robbins" />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Birdie Garner" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Marvin Cooper" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="estimate" className="text-sm font-medium">Estimate</Label>
      <Input id="estimate" placeholder="Employees" className="bg-gray-100" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="plan" className="text-sm font-medium">Plan</Label>
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
    <span className="text-sm text-blue-600 font-medium">10 matches found</span>
    <Button className="bg-blue-600 text-white hover:bg-blue-700">Save Filters (3)</Button>
  </div>
</div>
</div>
    )
}
