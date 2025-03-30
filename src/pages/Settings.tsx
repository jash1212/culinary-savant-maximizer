
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your restaurant profile and system preferences.</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Restaurant Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Update your restaurant details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input id="restaurant-name" defaultValue="Culinary Savant" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-type">Restaurant Type</Label>
                  <Select defaultValue="fine-dining">
                    <SelectTrigger>
                      <SelectValue placeholder="Select restaurant type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Dining</SelectItem>
                      <SelectItem value="fine-dining">Fine Dining</SelectItem>
                      <SelectItem value="fast-casual">Fast Casual</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                      <SelectItem value="bistro">Bistro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Gourmet Avenue, Culinary District" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Gastroville" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Postal Code</Label>
                  <Input id="postal-code" defaultValue="90210" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="info@culinarysavant.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
              </div>
              
              <Button className="mt-2">Save Changes</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Hours</CardTitle>
              <CardDescription>Set your regular business hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="font-medium w-28">{day}</span>
                    <div className="flex items-center gap-2">
                      <Select defaultValue={day === "Sunday" ? "closed" : "10:00"}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Open" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="closed">Closed</SelectItem>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select defaultValue={day === "Sunday" ? "closed" : day === "Friday" || day === "Saturday" ? "23:00" : "22:00"}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Close" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="closed">Closed</SelectItem>
                          <SelectItem value="21:00">9:00 PM</SelectItem>
                          <SelectItem value="22:00">10:00 PM</SelectItem>
                          <SelectItem value="23:00">11:00 PM</SelectItem>
                          <SelectItem value="24:00">12:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
                <Button className="mt-2">Save Hours</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose when and how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Inventory Alerts</h4>
                    <p className="text-sm text-muted-foreground">Get notified when inventory items are running low.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Expiration Notifications</h4>
                    <p className="text-sm text-muted-foreground">Get alerts about items nearing their expiration date.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Waste Reports</h4>
                    <p className="text-sm text-muted-foreground">Receive weekly waste analysis reports.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Financial Insights</h4>
                    <p className="text-sm text-muted-foreground">Get monthly financial performance summaries.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">AI Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Receive AI-generated optimization suggestions.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Notification Channels</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email</Label>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-notifications">SMS</Label>
                    <Switch id="sms-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-notifications">In-App Notifications</Label>
                    <Switch id="app-notifications" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Button className="mt-2">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure system-wide preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="cad">CAD ($)</SelectItem>
                      <SelectItem value="aud">AUD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <Select defaultValue="12h">
                    <SelectTrigger id="time-format">
                      <SelectValue placeholder="Select time format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <Label htmlFor="data-backup">Automatic Data Backup</Label>
                    <p className="text-sm text-muted-foreground">Daily backup of all your restaurant data.</p>
                  </div>
                  <Switch id="data-backup" defaultChecked />
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="ai-settings">AI Sensitivity</Label>
                <p className="text-sm text-muted-foreground mb-2">Adjust how aggressively the AI makes recommendations.</p>
                <Select defaultValue="balanced">
                  <SelectTrigger id="ai-settings">
                    <SelectValue placeholder="Select AI mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative (fewer suggestions)</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="aggressive">Aggressive (more suggestions)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="mt-4">Save Settings</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Manage your restaurant's data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Export Data</h4>
                <p className="text-sm text-muted-foreground">Download your restaurant data for backup or analysis.</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline">Export All Data</Button>
                  <Button variant="outline">Export Reports</Button>
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <h4 className="font-medium">Reset System</h4>
                <p className="text-sm text-muted-foreground">Clear all data and reset the system to default settings.</p>
                <Button variant="destructive" className="mt-2">Reset System</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
