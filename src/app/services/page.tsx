"use client";

import { PageTransition } from "@/components/PageTransition";
import { PremiumServices } from "@/components/PremiumServices";
import { ProjectCTA } from "@/components/ProjectCTA";

export default function ServicesPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        Our <span className="text-tecobit-mint italic">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        Architecting comprehensive digital infrastructure tailored for explosive, scalable growth.
                    </p>
                </div>

                <PremiumServices />

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
