"use client";

import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { RippleButton } from "@/components/RippleButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
    return (
        <PageTransition>
            <div className="bg-transparent min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
                        Join the <span className="text-tecobit-mint italic">Architects</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        We are searching for elite talent to join our high-growth movement. Build the digital future with us.
                    </p>
                </div>

                <div className="container mx-auto px-6 mb-24 max-w-5xl">
                    <div className="space-y-6">
                        {[
                            { title: "Senior React Developer", type: "Full-time", location: "Kathmandu / Remote", dept: "Engineering" },
                            { title: "Digital Marketing Strategist", type: "Full-time", location: "Kathmandu", dept: "Marketing" },
                            { title: "UI/UX Designer", type: "Part-time", location: "Remote", dept: "Design" },
                        ].map((job, idx) => (
                            <div key={idx} className="bg-muted/10 border border-border p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between group hover:border-tecobit-mint transition-all hover:scale-[1.01] cursor-pointer">
                                <div className="mb-6 md:mb-0 text-center md:text-left">
                                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4 group-hover:text-tecobit-mint transition-colors italic">{job.title}</h3>
                                    <div className="flex flex-wrap gap-6 justify-center md:justify-start text-base md:text-lg text-muted-foreground font-bold">
                                        <span className="flex items-center"><CheckCircle2 size={20} className="mr-3 text-tecobit-mint" /> {job.dept}</span>
                                        <span className="flex items-center"><CheckCircle2 size={20} className="mr-3 text-tecobit-mint" /> {job.type}</span>
                                        <span className="flex items-center"><CheckCircle2 size={20} className="mr-3 text-tecobit-mint" /> {job.location}</span>
                                    </div>
                                </div>
                                <RippleButton variant="primary" size="lg" className="min-w-[200px] shadow-lg shadow-tecobit-mint/10">
                                    Apply Now
                                </RippleButton>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="bg-tecobit-mint text-black py-28 px-6 mb-12 shadow-[0_0_50px_rgba(61,255,197,0.2)]">
                    <div className="container mx-auto text-center">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-16 leading-[0.85]">Built on <span className="italic">Values</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                            <div className="p-10 bg-black/5 rounded-3xl">
                                <h4 className="font-bold text-2xl md:text-3xl uppercase tracking-tighter mb-4">Elite Growth</h4>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">Continuous high-performance learning and paid sector certifications.</p>
                            </div>
                            <div className="p-10 bg-black/5 rounded-3xl">
                                <h4 className="font-bold text-2xl md:text-3xl uppercase tracking-tighter mb-4">Prime Culture</h4>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">Fun, collaborative, and hyper-inclusive high-tech environment.</p>
                            </div>
                            <div className="p-10 bg-black/5 rounded-3xl">
                                <h4 className="font-bold text-2xl md:text-3xl uppercase tracking-tighter mb-4">Fluid Flex</h4>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">Advanced hybrid work architectures and performance-based flexibility.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
