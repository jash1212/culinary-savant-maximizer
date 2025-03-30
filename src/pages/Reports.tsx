
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Sample financial data
const monthlyRevenue = [
  { name: "Jan", revenue: 22500, expenses: 14500, profit: 8000 },
  { name: "Feb", revenue: 20000, expenses: 13000, profit: 7000 },
  { name: "Mar", revenue: 24000, expenses: 15000, profit: 9000 },
  { name: "Apr", revenue: 25500, expenses: 16000, profit: 9500 },
  { name: "May", revenue: 27000, expenses: 16500, profit: 10500 },
  { name: "Jun", revenue: 30000, expenses: 18000, profit: 12000 },
  { name: "Jul", revenue: 32000, expenses: 19500, profit: 12500 },
  { name: "Aug", revenue: 31000, expenses: 19000, profit: 12000 },
  { name: "Sep", revenue: 29000, expenses: 18000, profit: 11000 },
  { name: "Oct", revenue: 28000, expenses: 17500, profit: 10500 },
  { name: "Nov", revenue: 26000, expenses: 16500, profit: 9500 },
  { name: "Dec", revenue: 30000, expenses: 18500, profit: 11500 },
];

const costBreakdown = [
  { name: "Food", value: 45 },
  { name: "Labor", value: 30 },
  { name: "Rent", value: 12 },
  { name: "Utilities", value: 8 },
  { name: "Other", value: 5 },
];

const foodCostData = [
  { name: "Meat", value: 35 },
  { name: "Produce", value: 25 },
  { name: "Dairy", value: 15 },
  { name: "Seafood", value: 15 },
  { name: "Dry Goods", value: 10 },
];

const wasteCostTrend = [
  { name: "Jan", previousYear: 1800, currentYear: 1600 },
  { name: "Feb", previousYear: 1700, currentYear: 1500 },
  { name: "Mar", previousYear: 1900, currentYear: 1650 },
  { name: "Apr", previousYear: 2000, currentYear: 1700 },
  { name: "May", previousYear: 1950, currentYear: 1600 },
  { name: "Jun", previousYear: 1850, currentYear: 1550 },
  { name: "Jul", previousYear: 1900, currentYear: 1500 },
  { name: "Aug", previousYear: 1750, currentYear: 1400 },
  { name: "Sep", previousYear: 1650, currentYear: 1350 },
  { name: "Oct", previousYear: 1600, currentYear: 1250 },
  { name: "Nov", previousYear: 1700, currentYear: 1300 },
  { name: "Dec", previousYear: 1800, currentYear: 1400 },
];

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-muted-foreground">Track your restaurant's financial performance and cost metrics.</p>
        </div>
        
        <div className="flex space-x-2">
          <Select defaultValue="2023">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
          <TabsTrigger value="waste">Waste Metrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue & Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyRevenue} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#0B5563" strokeWidth={2} name="Revenue" />
                  <Line type="monotone" dataKey="expenses" stroke="#FF9D4D" strokeWidth={2} name="Expenses" />
                  <Line type="monotone" dataKey="profit" stroke="#22C7A9" strokeWidth={2} name="Profit" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costBreakdown} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Bar dataKey="value" fill="#22C7A9" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={foodCostData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Bar dataKey="value" fill="#0B5563" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat-card">
                    <p className="stat-title">Average Food Cost</p>
                    <p className="stat-value">28.3%</p>
                    <p className="trend-down text-sm">
                      <span>↓ 2.4% vs. previous year</span>
                    </p>
                  </div>
                  
                  <div className="stat-card">
                    <p className="stat-title">Labor Cost Ratio</p>
                    <p className="stat-value">32.1%</p>
                    <p className="trend-up text-sm">
                      <span>↑ 1.8% vs. previous year</span>
                    </p>
                  </div>
                  
                  <div className="stat-card">
                    <p className="stat-title">Prime Cost</p>
                    <p className="stat-value">60.4%</p>
                    <p className="trend-down text-sm">
                      <span>↓ 0.6% vs. previous year</span>
                    </p>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="mb-4">
                    <p className="stat-title">Cost Reduction Opportunities</p>
                    <p className="stat-value">$36,500</p>
                    <p className="text-sm text-muted-foreground">Estimated annual savings potential</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Food Waste Reduction</span>
                        <span>$18,200</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Labor Optimization</span>
                        <span>$12,300</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "34%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Energy Efficiency</span>
                        <span>$6,000</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "16%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="waste" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste Cost Trend (Year-over-Year)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={wasteCostTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="previousYear" stroke="#FF9D4D" strokeWidth={2} name="Previous Year" />
                  <Line type="monotone" dataKey="currentYear" stroke="#22C7A9" strokeWidth={2} name="Current Year" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Waste Reduction Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="stat-card">
                    <p className="stat-title">Annual Waste Reduction</p>
                    <p className="stat-value">23.4%</p>
                    <p className="text-sm text-muted-foreground">Year-over-year improvement</p>
                  </div>
                  
                  <div className="stat-card">
                    <p className="stat-title">Financial Impact</p>
                    <p className="stat-value">$18,200</p>
                    <p className="text-sm text-muted-foreground">Annual savings from waste reduction</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Waste Reduction by Category</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Vegetables</span>
                        <span>32% reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Meats</span>
                        <span>28% reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Dairy</span>
                        <span>18% reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Seafood</span>
                        <span>22% reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
