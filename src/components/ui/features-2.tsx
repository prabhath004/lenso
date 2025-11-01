import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Video, Zap, TrendingUp } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="py-16 md:py-24 border-y border-border">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-5xl font-semibold md:text-6xl lg:text-7xl">
                        Why it{" "}
                        <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                            matters
                        </span>
                    </h2>
                </div>
                <div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-16 md:max-w-full md:grid-cols-3">
                    <Card className="group border border-border/50 bg-card/50 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Video className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-2xl md:text-3xl text-foreground">Film Better</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm md:text-base text-muted-foreground">Never worry about framing, lighting, or timing again</p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-border/50 bg-card/50 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-2xl md:text-3xl text-foreground">Edit Faster</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm md:text-base text-muted-foreground">Automatic trimming, captions, & clip cuts</p>
                        </CardContent>
                    </Card>

                    <Card className="group border border-border/50 bg-card/50 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <TrendingUp className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-2xl md:text-3xl text-foreground">Create More</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm md:text-base text-muted-foreground">Spend time recording, not editing</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.06]"/>
        <div className="bg-card/80 backdrop-blur-sm absolute inset-0 m-auto flex size-14 items-center justify-center border border-border rounded-lg shadow-sm">{children}</div>
    </div>
)

