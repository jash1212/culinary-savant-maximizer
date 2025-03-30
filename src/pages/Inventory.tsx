
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Sample inventory data
const inventoryItems = [
  { 
    id: 1, 
    name: "Tomatoes", 
    category: "Vegetables", 
    stockLevel: 12.5, 
    unit: "kg", 
    lastRestocked: "2023-10-15", 
    expiryDate: "2023-10-22",
    status: "normal" 
  },
  { 
    id: 2, 
    name: "Chicken Breast", 
    category: "Meats", 
    stockLevel: 8.2, 
    unit: "kg", 
    lastRestocked: "2023-10-16", 
    expiryDate: "2023-10-23",
    status: "normal" 
  },
  { 
    id: 3, 
    name: "Lettuce", 
    category: "Vegetables", 
    stockLevel: 3.0, 
    unit: "kg", 
    lastRestocked: "2023-10-14", 
    expiryDate: "2023-10-18",
    status: "expiring" 
  },
  { 
    id: 4, 
    name: "Milk", 
    category: "Dairy", 
    stockLevel: 5.5, 
    unit: "L", 
    lastRestocked: "2023-10-15", 
    expiryDate: "2023-10-22",
    status: "normal" 
  },
  { 
    id: 5, 
    name: "Salmon", 
    category: "Seafood", 
    stockLevel: 1.2, 
    unit: "kg", 
    lastRestocked: "2023-10-16", 
    expiryDate: "2023-10-19",
    status: "low" 
  },
  { 
    id: 6, 
    name: "Avocados", 
    category: "Fruits", 
    stockLevel: 8, 
    unit: "pcs", 
    lastRestocked: "2023-10-15", 
    expiryDate: "2023-10-20",
    status: "expiring" 
  },
  { 
    id: 7, 
    name: "Rice", 
    category: "Grains", 
    stockLevel: 25, 
    unit: "kg", 
    lastRestocked: "2023-10-10", 
    expiryDate: "2023-12-10",
    status: "normal" 
  },
  { 
    id: 8, 
    name: "Heavy Cream", 
    category: "Dairy", 
    stockLevel: 1.5, 
    unit: "L", 
    lastRestocked: "2023-10-14", 
    expiryDate: "2023-10-21",
    status: "normal" 
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "low":
      return <Badge variant="destructive">Low Stock</Badge>;
    case "expiring":
      return <Badge variant="outline" className="border-amber-500 text-amber-500">Expiring Soon</Badge>;
    default:
      return <Badge variant="outline" className="border-green-500 text-green-500">Normal</Badge>;
  }
};

const Inventory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Inventory Management</h1>
        <p className="text-muted-foreground">Track your inventory levels and upcoming expirations.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search inventory..." className="pl-8" />
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Attention Required</AlertTitle>
        <AlertDescription>
          2 items are expiring soon and 1 item is running low on stock.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    {item.stockLevel} {item.unit}
                  </TableCell>
                  <TableCell>{item.lastRestocked}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
