import { Header } from "@/components/layout/header";
import { CreateCampaignButton } from "@/components/dashboard/create-campaign-button";
import { PerformanceStats } from "@/components/dashboard/performance-stats";
import { CampaignChart } from "@/components/dashboard/campaign-chart";
import { ScheduleTimeline } from "@/components/dashboard/schedule-timeline";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Header />

      <div className="flex-1 px-8 py-8 overflow-y-auto custom-scrollbar">
        {/* Title Section */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Dashboard</h1>
            <p className="text-gray-500 font-medium">Welcome, Let&apos;s dive into your personalized setup guide.</p>
          </div>
          <CreateCampaignButton />
        </div>

        {/* Widgets Grid */}
        <div className="space-y-6">
          {/* Top Row: Performance Stats */}
          <PerformanceStats />

          {/* Bottom Row: Charts & Schedule */}
          <div className="grid grid-cols-12 gap-6 h-[500px]">
            <div className="col-span-12 lg:col-span-7 h-full">
              <CampaignChart />
            </div>
            <div className="col-span-12 lg:col-span-5 h-full relative">
              <ScheduleTimeline />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
