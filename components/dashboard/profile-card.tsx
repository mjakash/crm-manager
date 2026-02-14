import Image from "next/image";

export function ProfileCard() {
    return (
        <div className="relative h-96 rounded-3xl overflow-hidden group">
            <Image
                src="/profile.png"
                alt="Lora Piterson"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                    <h3 className="text-2xl font-medium text-white mb-1">Lora Piterson</h3>
                    <p className="text-white/80 text-sm">UX/UI Designer</p>
                </div>

                <div className="glass-panel px-4 py-2 rounded-full text-white font-medium">
                    $1,200
                </div>
            </div>
        </div>
    );
}
