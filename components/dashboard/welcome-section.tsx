export function WelcomeSection() {
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-medium tracking-tight text-foreground mb-6">
                Welcome in, Nixtio
            </h1>

            <div className="flex items-center gap-4 overflow-x-auto pb-2">
                <div className="flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-3xl min-w-fit">
                    <span className="text-sm font-medium">Interviews</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">15%</span>
                </div>
                <div className="flex items-center gap-3 bg-accent text-primary px-5 py-3 rounded-3xl min-w-fit">
                    <span className="text-sm font-medium">Hired</span>
                    <span className="text-xs bg-black/10 px-2 py-1 rounded-full">15%</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-3xl min-w-fit text-gray-500">
                    <span className="text-sm font-medium">Project time</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">60%</span>
                </div>
                <div className="border border-dashed border-gray-300 h-10 w-24 rounded-3xl mx-2"></div>
                <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-3xl min-w-fit text-gray-500">
                    <span className="text-sm font-medium">Output</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">10%</span>
                </div>
            </div>
        </div>
    );
}
