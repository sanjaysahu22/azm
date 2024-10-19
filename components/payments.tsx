'use client';
import { ArrowDown, CalendarIcon, Download, Filter, RefreshCw, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Input } from "./ui/input"; 

export function Payments() {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false)

  const openInvoice = () => {
    setIsInvoiceOpen(true)
  }

  const closeInvoice = () => {
    setIsInvoiceOpen(false)
  }

  const invoiceData = {
    invoiceNumber: '#27346733-022',
    invoiceDate: '6 March, 2023',
    dueDate: '7 March, 2023',
    billedTo: {
      name: 'Din Djarin',
      email: 'dindjarin@gmail.com',
      address: '9029 Salt Lake, Mandator',
      phone: '(+264) 724-453-233'
    },
    from: {
      name: 'Starfleet Alliance',
      email: 'starfleet.com',
      address: '9029 Arcane, Jupiter 2',
      phone: '(+264) 243-124-392'
    },
    items: [
      { description: 'Website Design', details: '5 page static website design', quantity: 5, price: 9000, amount: 45000 },
      { description: 'Logo Design', details: 'Responsive logo for web and print', quantity: 1, price: 50000, amount: 50000 },
      { description: 'PDF Export', details: 'Present all deliverables in pdf format', quantity: 1, price: 0, amount: 0 },
    ],
    subtotal: 95000,
    discount: 1900,
    total: 93100,
  }
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  return (
    <><main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Companies Invoices</h2>
          <div className="flex space-x-2">
            <Search size={20} />
            <RefreshCw size={20} />
            <ArrowDown size={20} />
            <Button variant="ghost" className="w-4" onClick={toggleFilter}>
              <Filter size={30} className="mb-3" />
            </Button>
          </div>
        </div>
  
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-lg bg-red-300"></div>
          <span className="text-xl font-medium ml-4">McDonald's</span>
        </div>
  
        {/* Add margin-top to create space above the header */}
        <div className="bg-zinc-200 w-full flex justify-between pl-10 mb-2">
          <div className="text-sm py-2 text-left">Date</div>
          <div className="text-sm py-2 text-left">Description</div>
          <div className="text-sm py-2 text-left">Billing Amount</div>
          <div className="text-sm py-2 text-left pr-20">Status</div>
        </div>
  
        <div className="overflow-y-auto max-h-96"> 
          <table className="w-full">
            <tbody className="text-center space-y-2">
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4">Feb 2, 2024</td>
                  <td className="py-4">
                    <div>Quarterly true-up</div>
                    <div className="text-sm text-gray-500">
                      July 14, 2023 - July 5, 2024
                    </div>
                  </td>
                  <td className="py-4">Rs 50,00.00</td>
                  <td className="py-4 flex flex-col ">
                    <span className="text-green-600 font-medium ">Paid</span>
                    <Button onClick={openInvoice} className="w-20 self-center " variant="outline" size="sm">
                      View Invoice
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  
  
             <Dialog open={isInvoiceOpen} onOpenChange={closeInvoice}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Invoice</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Invoice</h2>
                <p className="text-gray-600">{invoiceData.invoiceNumber}</p>
              </div>
              <div className="text-right">
                <p><span className="font-semibold">Invoice Date:</span> {invoiceData.invoiceDate}</p>
                <p><span className="font-semibold">Due Date:</span> {invoiceData.dueDate}</p>
              </div>
            </div>

            <div className="flex justify-between mb-8">
              <div>
                <h3 className="font-semibold mb-2">Billed To</h3>
                <p>{invoiceData.billedTo.name}</p>
                <p>{invoiceData.billedTo.email}</p>
                <p>{invoiceData.billedTo.address}</p>
                <p>{invoiceData.billedTo.phone}</p>
              </div>
              <div className="text-right">
                <h3 className="font-semibold mb-2">From</h3>
                <p>{invoiceData.from.name}</p>
                <p>{invoiceData.from.email}</p>
                <p>{invoiceData.from.address}</p>
                <p>{invoiceData.from.phone}</p>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div>{item.description}</div>
                      <div className="text-sm text-gray-600">{item.details}</div>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>${item.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-8 text-right">
              <p><span className="font-semibold">Subtotal:</span> ${invoiceData.subtotal.toFixed(2)}</p>
              <p><span className="font-semibold">Discount (2%):</span> ${invoiceData.discount.toFixed(2)}</p>
              <p className="text-xl font-bold mt-2"><span className="font-semibold">Total:</span> ${invoiceData.total.toFixed(2)}</p>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>This is a footer sample. You can add a special message to your user to thank them.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
      )}
      
    </>
  );
}
