'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as PricingCard from '@/components/ui/pricing-card';
import {
	CheckCircle2,
	Sparkles,
	Camera,
	Briefcase,
} from 'lucide-react';

function MultiCards() {
	const plans = [
		{
			icon: <Sparkles />,
			description: 'Perfect for trying out Lenso',
			name: 'Starter',
			price: 'Free',
			variant: 'outline' as const,
			features: [
				'Voice commands',
				'Basic auto-captions',
				'5 hours/month',
				'720p export',
				'Email support',
			],
		},
		{
			icon: <Camera />,
			description: 'Best for serious content creators',
			name: 'Creator',
			badge: 'Popular',
			price: '$29',
			period: '/month',
			variant: 'default' as const,
			features: [
				'Everything in Starter',
				'AI teleprompter',
				'Auto-editing & trimming',
				'20 hours/month',
				'1080p export',
				'Priority support',
			],
		},
		{
			icon: <Briefcase />,
			name: 'Pro',
			description: 'For professional filmmakers and teams',
			price: '$99',
			period: '/month',
			variant: 'outline' as const,
			features: [
				'Everything in Creator',
				'Unlimited hours',
				'4K export',
				'Custom branding',
				'API access',
				'Dedicated support',
			],
		},
	];

	const handleClick = (plan: string) => {
		window.location.href = '#waitlist';
	};

	return (
		<div className="grid gap-4 md:grid-cols-3">
			{plans.map((plan) => (
				<PricingCard.Card className="md:min-w-[260px]" key={plan.name}>
					<PricingCard.Header>
						<PricingCard.Plan>
							<PricingCard.PlanName>
								{plan.icon}
								<span className="text-muted-foreground">{plan.name}</span>
							</PricingCard.PlanName>
							{plan.badge && (
								<PricingCard.Badge className="bg-primary/10 text-primary border-primary/20">
									{plan.badge}
								</PricingCard.Badge>
							)}
						</PricingCard.Plan>
						<PricingCard.Price>
							<PricingCard.MainPrice className="text-primary">{plan.price}</PricingCard.MainPrice>
							<PricingCard.Period>{plan.period}</PricingCard.Period>
						</PricingCard.Price>
						<Button
							variant={plan.variant === 'default' ? 'hero' : 'ghost-outline'}
							className={cn('w-full font-semibold')}
							onClick={() => handleClick(plan.name)}
						>
							Join Waitlist
						</Button>
					</PricingCard.Header>

					<PricingCard.Body>
						<PricingCard.Description>
							{plan.description}
						</PricingCard.Description>
						<PricingCard.List>
							{plan.features.map((item) => (
								<PricingCard.ListItem key={item}>
									<CheckCircle2
										className="text-primary h-4 w-4"
										aria-hidden="true"
									/>
									<span>{item}</span>
								</PricingCard.ListItem>
							))}
						</PricingCard.List>
					</PricingCard.Body>
				</PricingCard.Card>
			))}
		</div>
	);
}

export default function PricingSection() {
	return (
		<section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
			{/* Subtle dotted grid background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
					backgroundSize: '14px 14px',
					maskImage:
						'radial-gradient( circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70% )',
				}}
			/>

			{/* Left spotlight */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>

			<div className="mx-auto max-w-5xl px-6 sm:px-8 relative z-10">
				<div className="flex flex-col items-center gap-4 text-center mb-12">
					<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
						Pricing
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground opacity-70">
						Select the plan that best suits your needs.
					</p>
				</div>

				<MultiCards />
			</div>
		</section>
	);
}

