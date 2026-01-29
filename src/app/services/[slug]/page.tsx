import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { CheckCircle2 } from "lucide-react";
import { RippleButton } from "@/components/RippleButton";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "services",
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    const service = docs[0];

    if (!service) {
        return notFound();
    }

    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                {/* Hero */}
                <div className="container mx-auto px-6 mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-8">{service.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="container mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            {typeof service.heroImage === 'object' && service.heroImage?.url ? (
                                <Image
                                    src={service.heroImage.url}
                                    alt={service.heroImage.alt || service.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                // Fallback image if no hero image
                                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                                    <span className="text-tecobit-mint opacity-20 font-bold text-4xl">TECOBIT</span>
                                </div>
                            )}
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold uppercase mb-4">Why Choose Tecobit for {service.title}?</h2>
                            <div className="space-y-4">
                                {service.features && service.features.length > 0 ? (
                                    service.features.map((item: any, index: number) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="mt-1 text-tecobit-mint"><CheckCircle2 size={24} /></div>
                                            <p className="text-muted-foreground text-lg">{item.feature}</p>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        {/* Dummy features for now since we might not have them in seed */}
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1 text-tecobit-mint"><CheckCircle2 size={24} /></div>
                                            <p className="text-muted-foreground text-lg">Data-driven strategies tailored to your market.</p>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1 text-tecobit-mint"><CheckCircle2 size={24} /></div>
                                            <p className="text-muted-foreground text-lg">Transparent reporting and real-time analytics.</p>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1 text-tecobit-mint"><CheckCircle2 size={24} /></div>
                                            <p className="text-muted-foreground text-lg">Expert team with years of industry experience.</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <RippleButton variant="primary" className="px-8 py-4 rounded-xl mt-4">
                                Get a Free Strategy Session
                            </RippleButton>
                        </div>
                    </div>
                </div>

                {/* Process Section if available */}
                {service.process && service.process.length > 0 && (
                    <div className="container mx-auto px-6 mb-24">
                        <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.process.map((step: any, idx: number) => (
                                <div key={idx} className="bg-muted/10 p-8 rounded-3xl border border-border">
                                    <span className="text-2xl font-bold text-tecobit-mint/20 mb-4 block">0{idx + 1}</span>
                                    <h3 className="text-xl font-bold uppercase mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
