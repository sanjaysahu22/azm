'use client'
import { ChartSection } from "@/components/ChartSection";
import { CompanyStatsTable } from "@/components/CompanyStatsTable";
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { LineChart, PieChart, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <ChartSection title="Sales statistic">
            <LineChart />
          </ChartSection>
          <ChartSection title="Renewal status">
            <LineChart />
          </ChartSection>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <ChartSection title="Plans Status">
            <PieChart />
          </ChartSection>
          <ChartSection title="Visitors">
            <BarChart />
          </ChartSection>
          <ChartSection title="Revenue">
            <LineChart />
          </ChartSection>
        </div>
        <CompanyStatsTable />
      </main>
    </div>
  </div>
  );    
}
