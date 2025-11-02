"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/ui/play-store-button";
import { AppStoreButton } from "@/components/ui/app-store-button";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#waitlist", label: "Join Waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#waitlist", label: "Contact" },
    ],
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: TwitterIcon, href: "#" },
];

export function Footer2() {
  return (
    <footer className="bg-card/60 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Grid container with headings and links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {footerLinks.map((item, i) => (
            <div key={i}>
              <h3 className="mb-4 text-xs font-medium">{item.title}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-border" />
        {/* Social Buttons + App Links */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                href={href}
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
                key={i}
              >
                <Icon className="size-5 text-muted-foreground" />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#">
              <AppStoreButton variant="outline" />
            </a>

            <a href="#">
              <PlayStoreButton variant="outline" />
            </a>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="text-center text-xs text-muted-foreground py-4">
          <p>
            © {new Date().getFullYear()} Lenso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

