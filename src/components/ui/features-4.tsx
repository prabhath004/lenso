import { Mic, FileText, Scissors, Captions, Zap, Eye } from 'lucide-react'

export function Features() {
    const features = [
        {
            icon: FileText,
            title: "AI Teleprompter",
            description: "Natural eyeline placement near the lens. AI drafts scripts from your ideas, or add your own. Scrolls at your pace. Never break eye contact."
        },
        {
            icon: Eye,
            title: "Framing Director",
            description: "Get real-time nudges like 'Move slightly right' or 'Raise the camera'. Perfect headroom and centering, without you checking."
        },
        {
            icon: Mic,
            title: "Voice Commands",
            description: "Say 'Lenso, start' to begin. Say 'Cut' to finish. Pause scroll anytime. Hands free. Stumble? Keep going, we'll clean it up."
        },
        {
            icon: Scissors,
            title: "Instant Cleanup",
            description: "Auto-trims dead air and command words. Removes 'start'/'cut' from your clip. Clean, tight cut ready in &lt;10 seconds."
        },
        {
            icon: Captions,
            title: "Auto-Captions",
            description: "Captions generate automatically as you speak. Styled for shorts with perfect timing. One less thing to think about."
        },
        {
            icon: Zap,
            title: "Vertical Export",
            description: "Smart face tracking keeps you centered. Exports vertical format optimized for TikTok, Reels, and Shorts. Ready to post right away."
        },
    ]

    return (
        <section id="features" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-5xl font-medium md:text-6xl lg:text-7xl">
                        A tiny crew{" "}
                        <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                            in your phone
                        </span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Director guides you. Camera op keeps you framed. Editor cleans the clip and captions it. <span className="text-foreground font-medium">All without touching the camera or a timeline.</span>
                    </p>
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

