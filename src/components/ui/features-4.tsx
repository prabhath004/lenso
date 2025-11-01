import { Mic, FileText, Scissors, Captions, Camera, Zap } from 'lucide-react'

export function Features() {
    const features = [
        {
            icon: Mic,
            title: "Hands-Free",
            description: "Voice-controlled recording. Start and stop without touching your device."
        },
        {
            icon: Camera,
            title: "Frame Guidance",
            description: "Real-time AI guidance on positioning, angles, and composition."
        },
        {
            icon: FileText,
            title: "AI Teleprompter",
            description: "Generate scripts and read naturally with built-in teleprompter."
        },
        {
            icon: Scissors,
            title: "Auto Editing",
            description: "Automatically trim silence, setup moments, and create clean clips."
        },
        {
            icon: Captions,
            title: "Live Captions",
            description: "See captions as you speak, styled for TikTok and Reels."
        },
        {
            icon: Zap,
            title: "Export Ready",
            description: "Clean clips in vertical formats, ready to post immediately."
        },
    ]

    return (
        <section id="features" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-5xl font-medium md:text-6xl lg:text-7xl">
                        Everything you need to{" "}
                        <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                            create better
                        </span>
                    </h2>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border border-border *:p-16 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4 text-primary" />
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

