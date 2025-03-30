
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

// Sample menu data
const menuItems = [
  { 
    id: 1, 
    name: "Grilled Salmon", 
    category: "Mains", 
    price: 24.99, 
    cost: 8.75, 
    margin: 65, 
    popularity: "high",
    wastage: "low",
    recommendation: "keep"
  },
  { 
    id: 2, 
    name: "Beef Wellington", 
    category: "Mains", 
    price: 32.99, 
    cost: 15.50, 
    margin: 53, 
    popularity: "medium",
    wastage: "high",
    recommendation: "modify"
  },
  { 
    id: 3, 
    name: "Caesar Salad", 
    category: "Starters", 
    price: 12.99, 
    cost: 3.25, 
    margin: 75, 
    popularity: "high",
    wastage: "low",
    recommendation: "promote"
  },
  { 
    id: 4, 
    name: "Vegetable Risotto", 
    category: "Mains", 
    price: 18.99, 
    cost: 4.50, 
    margin: 76, 
    popularity: "low",
    wastage: "medium",
    recommendation: "modify"
  },
  { 
    id: 5, 
    name: "Chocolate Lava Cake", 
    category: "Desserts", 
    price: 9.99, 
    cost: 2.00, 
    margin: 80, 
    popularity: "high",
    wastage: "low",
    recommendation: "promote"
  },
  { 
    id: 6, 
    name: "Seafood Pasta", 
    category: "Mains", 
    price: 22.99, 
    cost: 9.75, 
    margin: 58, 
    popularity: "medium",
    wastage: "high",
    recommendation: "modify"
  },
  { 
    id: 7, 
    name: "Truffle Fries", 
    category: "Sides", 
    price: 8.99, 
    cost: 3.25, 
    margin: 64, 
    popularity: "high",
    wastage: "low",
    recommendation: "keep"
  },
  { 
    id: 8, 
    name: "Duck Confit", 
    category: "Mains", 
    price: 26.99, 
    cost: 11.50, 
    margin: 57, 
    popularity: "low",
    wastage: "high",
    recommendation: "remove"
  },
];

const marginData = [
  { name: "Excellent (75%+)", value: 2 },
  { name: "Good (65-74%)", value: 2 },
  { name: "Average (55-64%)", value: 3 },
  { name: "Poor (<55%)", value: 1 },
];

const popularityData = [
  { name: "High", value: 4 },
  { name: "Medium", value: 2 },
  { name: "Low", value: 2 },
];

const wastageData = [
  { name: "Low", value: 4 },
  { name: "Medium", value: 1 },
  { name: "High", value: 3 },
];

const MARGIN_COLORS = ["#22C7A9", "#4CAF50", "#FFC107", "#F44336"];
const POPULARITY_COLORS = ["#22C7A9", "#FFC107", "#F44336"];
const WASTAGE_COLORS = ["#22C7A9", "#FFC107", "#F44336"];

const getRecommendationBadge = (recommendation: string) => {
  switch (recommendation) {
    case "promote":
      return <Badge className="bg-green-500">Promote</Badge>;
    case "keep":
      return <Badge variant="outline" className="border-primary text-primary">Keep</Badge>;
    case "modify":
      return <Badge variant="outline" className="border-amber-500 text-amber-500">Modify</Badge>;
    case "remove":
      return <Badge variant="destructive">Remove</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const MenuOptimization: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Menu Optimization</h1>
        <p className="text-muted-foreground">Analyze and optimize your menu for maximum profitability and minimal waste.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={marginData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(value) => [`${value} items`, 'Count']} />
                <Bar dataKey="value" fill="#22C7A9">
                  {marginData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={MARGIN_COLORS[index % MARGIN_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Item Popularity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={popularityData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(value) => [`${value} items`, 'Count']} />
                <Bar dataKey="value" fill="#22C7A9">
                  {popularityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={POPULARITY_COLORS[index % POPULARITY_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Food Wastage</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={wastageData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(value) => [`${value} items`, 'Count']} />
                <Bar dataKey="value" fill="#22C7A9">
                  {wastageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={WASTAGE_COLORS[index % WASTAGE_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Menu Analysis & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Food Cost</TableHead>
                <TableHead>Margin</TableHead>
                <TableHead>Popularity</TableHead>
                <TableHead>Wastage</TableHead>
                <TableHead>Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>${item.cost.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.margin}%
                      {item.margin >= 70 ? (
                        <ArrowUp className="h-4 w-4 ml-1 text-green-500" />
                      ) : item.margin <= 55 ? (
                        <ArrowDown className="h-4 w-4 ml-1 text-red-500" />
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.popularity === "high" ? "default" : item.popularity === "medium" ? "outline" : "secondary"}>
                      {item.popularity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.wastage === "low" ? "outline" : item.wastage === "medium" ? "secondary" : "destructive"}>
                      {item.wastage}
                    </Badge>
                  </TableCell>
                  <TableCell>{getRecommendationBadge(item.recommendation)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="flex items-center font-semibold text-green-800 mb-2">
                <DollarSign className="h-5 w-5 mr-1" />
                High-Profit Items to Promote
              </h3>
              <p className="text-sm text-green-700">
                Caesar Salad and Chocolate Lava Cake have excellent margins (75%+ profit) and low wastage. 
                Consider featuring these items prominently on your menu or creating combo deals to increase sales.
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="flex items-center font-semibold text-amber-800 mb-2">
                <ArrowUp className="h-5 w-5 mr-1" />
                Items Needing Modification
              </h3>
              <p className="text-sm text-amber-700">
                Beef Wellington and Seafood Pasta have high wastage and moderate margins. Consider:
                <br />
                - Reducing portion sizes by 15%
                <br />
                - Adjusting prep quantities based on day-of-week demand
                <br />
                - Repurposing ingredients for daily specials
              </p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h3 className="flex items-center font-semibold text-red-800 mb-2">
                <ArrowDown className="h-5 w-5 mr-1" />
                Recommended for Removal
              </h3>
              <p className="text-sm text-red-700">
                Duck Confit has low popularity, high wastage, and below-average margins. 
                Consider replacing it with a more profitable dish or reimagining it as 
                a lower-cost special offered only on select days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenuOptimization;
