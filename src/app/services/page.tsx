"use client";

import { PageTransition } from "@/components/PageTransition";
import { PremiumServices } from "@/components/PremiumServices";
import { ProjectCTA } from "@/components/ProjectCTA";

export default function ServicesPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Our <span className="text-tecobit-mint">Services</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to explode your growth.
                    </p>
                </div>

                <PremiumServices />

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
