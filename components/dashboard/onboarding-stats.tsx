export function OnboardingStats() {
    return (
        <div className="bg-white p-6 rounded-3xl h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-gray-800">Onboarding</h3>
                <span className="text-4xl font-light text-gray-800">18%</span>
            </div>

            <div className="flex gap-2 mb-2">
                <div className="flex-1 h-12 bg-accent rounded-xl flex items-center justify-center text-xs font-medium text-primary">Task</div>
                <div className="flex-1 h-12 bg-primary rounded-xl"></div>
                <div className="flex-1 h-12 bg-gray-400 rounded-xl"></div>
            </div>

            <div className="flex justify-between text-xs text-gray-400 px-1">
                <span>30%</span>
                <span>25%</span>
                <span>0%</span>
            </div>
        </div>
    );
}
