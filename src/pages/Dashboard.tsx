
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign, ShoppingCart, Trash2, TrendingUp } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// Sample data for charts
const weeklyWasteData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 8 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 10 },
  { name: "Fri", value: 18 },
  { name: "Sat", value: 24 },
  { name: "Sun", value: 20 },
];

const inventoryUsageData = [
  { name: "Vegetables", value: 45 },
  { name: "Meats", value: 30 },
  { name: "Dairy", value: 15 },
  { name: "Grains", value: 10 },
];

const inventoryPredictionData = [
  { name: "Week 1", current: 120, predicted: 130 },
  { name: "Week 2", current: 110, predicted: 115 },
  { name: "Week 3", current: 130, predicted: 125 },
  { name: "Week 4", current: 120, predicted: 115 },
];

const COLORS = ["#22C7A9", "#0B5563", "#FF9D4D", "#E67E22"];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Your restaurant's financial and operational overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$24,389</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Inventory Cost</p>
                <p className="text-2xl font-bold">$8,492</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <ShoppingCart className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-red-500">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Food Waste Cost</p>
                <p className="text-2xl font-bold">$1,238</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Trash2 className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>18% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
                <p className="text-2xl font-bold">32.4%</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>5% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Food Waste Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyWasteData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Waste Cost']} 
                  labelStyle={{ color: '#0B5563' }}
                />
                <Bar dataKey="value" fill="#22C7A9" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Prediction (Next 4 Weeks)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryPredictionData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="#0B5563" 
                  strokeWidth={2} 
                  name="Current Inventory"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#FF9D4D" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Predicted Needs"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Inventory Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={inventoryUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {inventoryUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Waste Reduction Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Trash2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Vegetables Storage Optimization</h4>
                  <p className="text-sm text-muted-foreground">Predicted savings of $345/month by improving storage conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Order Frequency Adjustment</h4>
                  <p className="text-sm text-muted-foreground">Potential $280/month savings by adjusting seafood order frequency.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <ArrowUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Menu Item Profitability</h4>
                  <p className="text-sm text-muted-foreground">Consider removing 3 low-profit items to increase overall margins by 4%.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
