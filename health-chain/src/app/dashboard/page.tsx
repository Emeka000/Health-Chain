"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShieldCheck, Hospital, Wallet } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="space-y-8 max-md:mt-11">
      <div className="space-y-2 flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to Health-Chain Nexus
        </h1>
        <p className="text-muted-foreground">
          Your decentralized health records at your fingertips
        </p>
      </div>

      <div className="flex items-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Your blockchain identity is active</h3>
          <p className="text-sm text-muted-foreground">
            Token ID: #8734-2900-1257-3991
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center">
              <Hospital className="mr-2 h-5 w-5 text-primary" />
              My Health Records
            </CardTitle>
            <CardDescription>
              View and manage your health records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div className="flex justify-between py-1 border-b">
                <span>Total Records</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Latest Update</span>
                <span className="font-medium">2 days ago</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Doctors with Access</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/records">View Records</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              Access Management
            </CardTitle>
            <CardDescription>Control who can access your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div className="flex justify-between py-1 border-b">
                <span>Access Requests</span>
                <span className="font-medium">1 pending</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Active Permissions</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Recent Activity</span>
                <span className="font-medium">Today</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/access">Manage Access</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-primary" />
              NHIS Payments
            </CardTitle>
            <CardDescription>Manage your insurance payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div className="flex justify-between py-1 border-b">
                <span>Payment Status</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span>Next Payment</span>
                <span className="font-medium">15 May 2025</span>
              </div>
              <div className="flex justify-between py-1">
                <span>StarkNet Wallet</span>
                <span className="font-medium">Connected</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/payment">Manage Payments</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Health-Chain Blockchain Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">Records Stored</p>
            <p className="text-2xl font-bold">1.2M</p>
          </div>
          <div className="bg-card p-4 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">Patients Registered</p>
            <p className="text-2xl font-bold">245K</p>
          </div>
          <div className="bg-card p-4 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">Providers</p>
            <p className="text-2xl font-bold">2,341</p>
          </div>
          <div className="bg-card p-4 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">Network Health</p>
            <p className="text-2xl font-bold text-green-600">99.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
