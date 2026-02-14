import { CheckCircle2, Circle, MoreHorizontal, Monitor, Zap, MessageSquare, Briefcase, Link as LinkIcon } from "lucide-react";

const tasks = [
    { id: 1, title: "Interview", time: "Sep 13, 08:30", completed: true, icon: Monitor }, // Laptop/Monitor icon
    { id: 2, title: "Team Meeting", time: "Sep 13, 10:30", completed: true, icon: Zap }, // Lightning icon
    { id: 3, title: "Project Update", time: "Sep 13, 13:00", completed: false, icon: MessageSquare }, // Chat icon
    { id: 4, title: "Discuss Q3 Goals", time: "Sep 13, 14:45", completed: false, icon: Briefcase }, // Briefcase/Note icon
    { id: 5, title: "HR Policy Review", time: "Sep 13, 16:30", completed: false, icon: LinkIcon }, // Link icon
];

export function OnboardingTaskList() {
    return (
        <div className="bg-primary p-6 rounded-3xl h-full text-white flex flex-col">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h3 className="text-xl font-light opacity-90">Onboarding Task</h3>
                </div>
                <span className="text-4xl font-light">2/8</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-4 group">
                        <div className={`p-3 rounded-full ${task.completed ? 'bg-white/10 text-white/50' : 'bg-white text-primary'}`}>
                            <task.icon size={20} />
                        </div>

                        <div className="flex-1">
                            <h4 className={`text-sm font-medium ${task.completed ? 'text-white/50 line-through' : 'text-white'}`}>{task.title}</h4>
                            <p className="text-xs text-white/40">{task.time}</p>
                        </div>

                        <button className="text-accent">
                            {task.completed ? <CheckCircle2 size={20} className="fill-accent text-primary" /> : <div className="w-5 h-5 rounded-full border-2 border-white/20"></div>}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
