"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/page-shell";
// Admin (Statistics) Components
import { PerformersChart } from "@/components/dashboard/performers-chart";
import { TaskDistribution } from "@/components/dashboard/task-distribution";
import { OperationalMetrics } from "@/components/dashboard/operational-metrics";
import { FMSBottleneck } from "@/components/dashboard/fms-bottleneck";
import { AttendanceStatus } from "@/components/dashboard/attendance-status";
import { DoerPerformanceReport } from "@/components/dashboard/doer-performance-report";
import { DepartmentTaskChart } from "@/components/dashboard/department-task-chart";
import { DoerPerformanceFilter } from "@/components/dashboard/doer-performance-filter";
import { DoerDetailChart } from "@/components/dashboard/doer-detail-chart";
// Doer (Task) Components
import { CheckInHeader } from "@/components/dashboard/doer/check-in-header";
import { WeekScore } from "@/components/dashboard/doer/week-score";
import { PendingTasks } from "@/components/dashboard/doer/pending-tasks";
import { WeeklyTaskChart } from "@/components/dashboard/doer/weekly-task-chart";
import { DoerAttendanceCard } from "@/components/dashboard/doer/doer-attendance-card";
import { TaskFilters } from "@/components/dashboard/doer/task-filters";
import { TaskListTable } from "@/components/dashboard/doer/task-list-table";

export default function Home() {
  const [view, setView] = useState<'statistics' | 'task'>('task');

  const topPerformersData = [
    { name: "abhijit", value: -0.1 },
    { name: "aditi", value: -0.1 },
    // ... rest of data
    { name: "Anjali", value: -0.1 },
    { name: "Binita", value: -0.1 },
    { name: "Doer", value: -0.1 },
  ];

  const bottomPerformersData = [
    { name: "A", value: -100 },
    { name: "a2", value: -100 },
    { name: "ab", value: -100 },
    { name: "brishti2", value: -100 },
    { name: "S", value: -100 },
  ];

  const taskChartData = [
    { name: "Completed", value: 364, color: "#34D399" }, // Emerald 400
    { name: "Pending", value: 956, color: "#FBBF24" }, // Amber 400
    { name: "Delay", value: 1207, color: "#F87171" }, // Red 400
  ];

  const fmsTaskData = [
    { name: "Completed", value: 476, color: "#34D399" },
    { name: "Pending", value: 363, color: "#FBBF24" },
    { name: "Delay", value: 363, color: "#F87171" },
  ];

  return (
    <PageShell>
      {/* Toggle Section */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <span className={`text-sm font-medium transition-colors ${view === 'statistics' ? 'text-gray-900' : 'text-gray-400'}`}>Statistics Dashboard</span>

          <button
            onClick={() => setView(view === 'statistics' ? 'task' : 'statistics')}
            className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${view === 'task' ? 'bg-[#06B6D4]' : 'bg-gray-200'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${view === 'task' ? 'left-7' : 'left-1'}`}></div>
          </button>

          <div className="relative">
            <span className={`text-sm font-medium transition-colors ${view === 'task' ? 'text-gray-900' : 'text-gray-400'}`}>Task Dashboard</span>
            {view === 'statistics' && <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
          </div>
        </div>
      </div>

      {view === 'statistics' ? (
        <div className="space-y-6">
          {/* Admin View Part 1: Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 h-[350px]">
            <PerformersChart title="Top Performers (Last Week)" data={topPerformersData} type="top" />
            <PerformersChart title="Bottom Performers (Last Week)" data={bottomPerformersData} type="bottom" />
            <TaskDistribution title="Task Chart (Last 30 Days)" data={taskChartData} />
            <TaskDistribution title="FMS Task" data={fmsTaskData} />
          </div>

          {/* Admin View Part 2: Operational Data */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-[400px]">
            <div className="xl:col-span-2">
              <OperationalMetrics />
            </div>
            <div className="xl:col-span-7">
              <FMSBottleneck />
            </div>
            <div className="xl:col-span-3">
              <AttendanceStatus />
            </div>
          </div>

          {/* Admin View Part 3: Charts Moved from Doer View */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-[400px]">
            <div className="xl:col-span-4 h-full">
              <DoerPerformanceReport />
            </div>
            <div className="xl:col-span-8 h-full">
              <DepartmentTaskChart />
            </div>
          </div>

          {/* Admin View Part 4: Filter Moved from Doer View */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">DOER PERFORMANCE CHART</h3>
              <DoerPerformanceFilter />
              <DoerDetailChart />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Real Doer View */}
          <CheckInHeader />

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <WeekScore />
            <PendingTasks />
            <div className="h-64 xl:h-auto">
              <WeeklyTaskChart />
            </div>
            <DoerAttendanceCard />
          </div>

          {/* Tasks Section */}
          <div>
            <TaskFilters />
            <TaskListTable />
          </div>
        </div>
      )}
    </PageShell>
  );
}
