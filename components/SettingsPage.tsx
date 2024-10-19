import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



 export const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("my-details")
  
    return (
  
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="relative">
              <div className="h-48 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-b-lg"></div>
              <Avatar className="absolute bottom-0 left-8 transform translate-y-1/2 w-24 h-24 border-4 border-white">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="max-w-4xl mx-auto mt-16 p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="my-details">My details</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  </TabsList>
                  <div>
                    <Button variant="outline" className="mr-2">Cancel</Button>
                    <Button>Save</Button>
                  </div>
                </div>
                <TabsContent value="my-details">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="username">USERNAME</Label>
                          <Input id="username" value="Elonn" readOnly className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="status">STATUS</Label>
                          <Input id="status" value="Active" readOnly className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="work-phone">WORK PHONE</Label>
                          <Input id="work-phone" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="mobile">MOBILE</Label>
                          <Input id="mobile" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="address">ADDRESS</Label>
                          <Input id="address" className="mt-1" />
                        </div>
                      </div>
                      <div className="mt-6">
                        <Label htmlFor="description">Description</Label>
                        <div className="flex space-x-2 mt-1 mb-2">
                          {["Image", "Color", "Text", "Align", "Link"].map((item) => (
                            <Button key={item} variant="outline" size="sm">{item}</Button>
                          ))}
                        </div>
                        <textarea
                          id="description"
                          className="w-full h-32 p-2 border rounded-md"
                          placeholder="Type your description here..."
                        ></textarea>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="old-password">Enter old Password</Label>
                          <Input id="old-password" type="password" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="new-password">Enter Password</Label>
                          <Input id="new-password" type="password" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input id="confirm-password" type="password" className="mt-1" />
                        </div>
                      </div>
                      <div className="mt-6 space-y-2">
                        <p className="text-sm text-green-600">✓ Password Length should be greater than 8.</p>
                        <p className="text-sm text-green-600">✓ Minimum 1 digit in password.</p>
                        <p className="text-sm text-gray-500">○ Minimum 1 capital letter in password.</p>
                        <p className="text-sm text-gray-500">○ Minimum 1 special word in password like @,#,$.</p>
                        <p className="text-sm text-gray-500">○ Password should be match with confirm password</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications">
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Issue Activity</p>
                          <p className="text-sm text-gray-500">Send me email notifications for every crash report</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Tracking Activity</p>
                          <p className="text-sm text-gray-500">Send me notifications when someone've mailed me</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Comments</p>
                          <p className="text-sm text-gray-500">Send me notifications when someone've sent the comment</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center space-x-2 mt-6">
                        <Checkbox id="after-9pm" />
                        <label htmlFor="after-9pm" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Don't send me notifications after 9:00 PM
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
    )
  }