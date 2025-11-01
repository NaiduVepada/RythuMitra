"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ChartComponent from "@/components/ChartComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, TrendingUp, DollarSign, Package, Calendar, Plus } from "lucide-react";

export default function FarmManagementPage() {
  const expenseData = [
    { label: "Seeds", value: 15000, color: "#10b981" },
    { label: "Fertilizers", value: 22000, color: "#3b82f6" },
    { label: "Labor", value: 35000, color: "#f59e0b" },
    { label: "Equipment", value: 18000, color: "#8b5cf6" },
    { label: "Irrigation", value: 12000, color: "#06b6d4" },
  ];

  const yieldData = [
    { label: "Wheat", value: 4500, color: "#f59e0b" },
    { label: "Rice", value: 3800, color: "#10b981" },
    { label: "Cotton", value: 2200, color: "#3b82f6" },
    { label: "Vegetables", value: 1600, color: "#ef4444" },
  ];

  const recentActivities = [
    {
      date: "Nov 1, 2024",
      activity: "Applied NPK Fertilizer",
      field: "Field A",
      cost: "₹5,000",
    },
    {
      date: "Oct 28, 2024",
      activity: "Harvested Wheat",
      field: "Field B",
      yield: "4.2 tons",
    },
    {
      date: "Oct 25, 2024",
      activity: "Irrigation System Maintenance",
      field: "All Fields",
      cost: "₹2,500",
    },
    {
      date: "Oct 22, 2024",
      activity: "Pest Control Spraying",
      field: "Field C",
      cost: "₹3,200",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Farm Management"
        description="Track your farm operations, expenses, yields, and profitability in one place"
        icon={LineChart}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">₹2.4L</p>
                <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Expenses
                </CardTitle>
                <DollarSign className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-red-600">₹1.02L</p>
                <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Net Profit
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">₹1.38L</p>
                <p className="text-xs text-muted-foreground mt-1">+18% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Yield
                </CardTitle>
                <Package className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600">12.1 tons</p>
                <p className="text-xs text-muted-foreground mt-1">This season</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartComponent
              title="Expense Breakdown"
              description="Monthly expenses by category"
              data={expenseData}
            />
            <ChartComponent
              title="Crop Yield (kg/hectare)"
              description="Production by crop type"
              data={yieldData}
            />
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Recent Farm Activities
                  </CardTitle>
                  <CardDescription>Track your daily farm operations</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Activity
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{activity.activity}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.date} • {activity.field}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.cost && (
                        <p className="font-semibold text-red-600">{activity.cost}</p>
                      )}
                      {activity.yield && (
                        <p className="font-semibold text-green-600">{activity.yield}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common farm management tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto flex flex-col gap-2 py-6">
                  <Plus className="h-6 w-6" />
                  <span>Record Expense</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col gap-2 py-6">
                  <Package className="h-6 w-6" />
                  <span>Log Harvest</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col gap-2 py-6">
                  <Calendar className="h-6 w-6" />
                  <span>Schedule Task</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col gap-2 py-6">
                  <TrendingUp className="h-6 w-6" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
