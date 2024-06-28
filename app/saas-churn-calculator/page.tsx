"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SaaSChurnCalculator() {
    const [newMrrEachMonth, setNewMrrEachMonth] = useState(1000);
    const [revenueChurnRate, setRevenueChurnRate] = useState(.05);


  return (
    <>
    <div className="container">

      <Card className="max-w-[450px] mx-auto mt-10">
        <CardHeader>
          <CardTitle>SaaS Churn Calculator</CardTitle>
          <CardDescription>
            Calculate when your SaaS monthly recurring revenue will churn based on your gross churn and acquisition trends.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            <Label>New MRR acquired each month</Label>
          <Input type="number" placeholder="Enter the number of users" value={newMrrEachMonth} onChange={(e) => setNewMrrEachMonth(Number(e.target.value))} />
          <Label>Revenue Churn Rate (%)</Label>
          <Input type="number" placeholder="Enter the revenue churn rate" value={revenueChurnRate * 100} onChange={(e) => setRevenueChurnRate(Number(e.target.value) / 100)} />
        </CardContent>
        <CardFooter>
            <p>
            Your SaaS will plateau at <span className="font-bold">${(Math.round((newMrrEachMonth / (revenueChurnRate)))).toLocaleString()}</span> <span className="">at monthly recurring revenue.</span>
            </p>
        </CardFooter>
      </Card>
    </div>
    </>
  );
}