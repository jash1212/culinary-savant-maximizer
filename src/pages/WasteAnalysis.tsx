
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Legend, PieChart, Pie, Cell } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const monthlyWasteData = [
  { name: "Jan", amount: 1200 },
  { name: "Feb", amount: 900 },
  { name: "Mar", amount: 1100 },
  { name: "Apr", amount: 1300 },
  { name: "May", amount: 800 },
  { name: "Jun", amount: 1400 },
  { name: "Jul", amount: 1500 },
  { name: "Aug", amount: 1200 },
  { name: "Sep", amount: 900 },
  { name: "Oct", amount: 700 },
  { name: "Nov", amount: 950 },
  { name: "Dec", amount: 1100 },
];

const wasteByCategory = [
  { name: "Vegetables", value: 35 },
  { name: "Meats", value: 25 },
  { name: "Dairy", value: 20 },
  { name: "Bread", value: 15 },
  { name: "Seafood", value: 5 },
];

const wasteReasonData = [
  { name: "Over Production", value: 40 },
  { name: "Expiration", value: 30 },
  { name: "Cooking Errors", value: 15 },
  { name: "Quality Issues", value: 10 },
  { name: "Other", value: 5 },
];

const COLORS = ["#22C7A9", "#0B5563", "#FF9D4D", "#E67E22", "#9B59B6"];

const topWastedItems = [
  { id: 1, name: "Fresh Greens", amount: "$243", percent: 12 },
  { id: 2, name: "Chicken Breast", amount: "$198", percent: 10 },
  { id: 3, name: "Tomatoes", amount: "$156", percent: 8 },
  { id: 4, name: "Bread", amount: "$134", percent: 7 },
  { id: 5, name: "Seafood Mix", amount: "$112", percent: 6 },
];

const WasteAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Waste Analysis</h1>
        <p className="text-muted-foreground">Detailed breakdown of food waste costs and opportunities for improvement.</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Waste by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={wasteByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {wasteByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Waste Reasons</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={wasteReasonData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {wasteReasonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top 5 Wasted Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topWastedItems.map(item => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-1/3 font-medium">{item.name}</div>
                    <div className="w-1/3 text-muted-foreground">{item.amount}</div>
                    <div className="w-1/3 flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Waste Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyWasteData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Waste Cost']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#22C7A9" 
                    strokeWidth={2}
                    name="Waste Cost ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold text-primary mb-2">Trend Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Food waste costs have decreased by 18% in the last quarter. The implementation of portion control 
                    and better storage methods appear to be working effectively.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                  <h3 className="font-semibold text-secondary mb-2">Projections</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on current trends, we project you could reduce waste costs by an additional $320/month 
                    by addressing the overproduction of fresh greens and optimizing seafood ordering frequency.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste by Category (Monthly)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={wasteByCategory}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  <Bar dataKey="value" fill="#22C7A9" name="Percentage" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Category-Specific Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2">Vegetables (35%)</h3>
                  <p className="text-sm text-muted-foreground">
                    Main issue: Overstocking and improper storage leading to quick spoilage. 
                    Recommendation: Adjust ordering frequency and implement vacuum sealing for select items.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                  <h3 className="font-semibold mb-2">Meats (25%)</h3>
                  <p className="text-sm text-muted-foreground">
                    Main issue: Over-preparation during slow periods.
                    Recommendation: Implement better sales forecasting and prep smaller batches more frequently.
                  </p>
                </div>
                
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <h3 className="font-semibold mb-2">Dairy (20%)</h3>
                  <p className="text-sm text-muted-foreground">
                    Main issue: Temperature fluctuations in storage.
                    Recommendation: Upgrade refrigeration monitoring and improve staff training.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WasteAnalysis;
