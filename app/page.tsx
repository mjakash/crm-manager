"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";

// Dynamically import heavy chart components
const PerformersChart = dynamic(() => import("@/components/dashboard/performers-chart").then(mod => mod.PerformersChart), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const TaskDistribution = dynamic(() => import("@/components/dashboard/task-distribution").then(mod => mod.TaskDistribution), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const OperationalMetrics = dynamic(() => import("@/components/dashboard/operational-metrics").then(mod => mod.OperationalMetrics), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const FMSBottleneck = dynamic(() => import("@/components/dashboard/fms-bottleneck").then(mod => mod.FMSBottleneck), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const AttendanceStatus = dynamic(() => import("@/components/dashboard/attendance-status").then(mod => mod.AttendanceStatus), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const DoerPerformanceReport = dynamic(() => import("@/components/dashboard/doer-performance-report").then(mod => mod.DoerPerformanceReport), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const DepartmentTaskChart = dynamic(() => import("@/components/dashboard/department-task-chart").then(mod => mod.DepartmentTaskChart), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const DoerDetailChart = dynamic(() => import("@/components/dashboard/doer-detail-chart").then(mod => mod.DoerDetailChart), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});
const WeeklyTaskChart = dynamic(() => import("@/components/dashboard/doer/weekly-task-chart").then(mod => mod.WeeklyTaskChart), {
  loading: () => <div className="h-full w-full bg-gray-100/50 animate-pulse rounded-2xl" />,
  ssr: false
});

// Regular imports for lighter components
import { DoerPerformanceFilter } from "@/components/dashboard/doer-performance-filter";
import { CheckInHeader } from "@/components/dashboard/doer/check-in-header";
import { WeekScore } from "@/components/dashboard/doer/week-score";
import { PendingTasks } from "@/components/dashboard/doer/pending-tasks";
import { DoerAttendanceCard } from "@/components/dashboard/doer/doer-attendance-card";
import { TaskFilters } from "@/components/dashboard/doer/task-filters";
import { TaskListTable } from "@/components/dashboard/doer/task-list-table";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

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
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end mb-6"
      >
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all duration-300">
          <button
            onClick={() => setView('statistics')}
            className={`text-sm font-medium transition-colors cursor-pointer ${view === 'statistics' ? 'text-gray-900' : 'text-gray-400'}`}
          >
            Statistics Dashboard
          </button>

          <button
            onClick={() => setView(view === 'statistics' ? 'task' : 'statistics')}
            className={`w-12 h-6 rounded-full relative transition-colors duration-300 cursor-pointer ${view === 'task' ? 'bg-[#06B6D4]' : 'bg-gray-200'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${view === 'task' ? 'left-7' : 'left-1'}`}></div>
          </button>

          <div className="relative">
            <button
              onClick={() => setView('task')}
              className={`text-sm font-medium transition-colors cursor-pointer ${view === 'task' ? 'text-gray-900' : 'text-gray-400'}`}
            >
              Task Dashboard
            </button>
            {view === 'statistics' && <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
          </div>
        </div>
      </motion.div>

      {view === 'statistics' ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Admin View Part 1: Charts */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 h-[350px]">
            <PerformersChart title="Top Performers (Last Week)" data={topPerformersData} type="top" />
            <PerformersChart title="Bottom Performers (Last Week)" data={bottomPerformersData} type="bottom" />
            <TaskDistribution title="Task Chart (Last 30 Days)" data={taskChartData} />
            <TaskDistribution title="FMS Task" data={fmsTaskData} />
          </motion.div>

          {/* Admin View Part 2: Operational Data */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-[400px]">
            <div className="xl:col-span-2">
              <OperationalMetrics />
            </div>
            <div className="xl:col-span-7">
              <FMSBottleneck />
            </div>
            <div className="xl:col-span-3">
              <AttendanceStatus />
            </div>
          </motion.div>

          {/* Admin View Part 3: Charts Moved from Doer View */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-[400px]">
            <div className="xl:col-span-4 h-full">
              <DoerPerformanceReport />
            </div>
            <div className="xl:col-span-8 h-full">
              <DepartmentTaskChart />
            </div>
          </motion.div>

          {/* Admin View Part 4: Filter Moved from Doer View */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">DOER PERFORMANCE CHART</h3>
              <DoerPerformanceFilter />
              <DoerDetailChart />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Real Doer View */}
          <motion.div variants={itemVariants}>
            <CheckInHeader />
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <WeekScore />
            <PendingTasks />
            <div className="h-64 xl:h-auto">
              <WeeklyTaskChart />
            </div>
            <DoerAttendanceCard />
          </motion.div>

          {/* Tasks Section */}
          <motion.div variants={itemVariants}>
            <TaskFilters />
            <TaskListTable />
          </motion.div>
        </motion.div>
      )}
    </PageShell>
  );
}
