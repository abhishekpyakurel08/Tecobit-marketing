"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { Navbar } from "@/components/Navbar";
import { RippleButton } from "@/components/RippleButton";
import { GlassCard } from "@/components/PremiumCards";
import {
    Sparkles,
    Send,
    Terminal,
    History,
    Layers,
    Settings2,
    Copy,
    Save,
    RefreshCcw,
    Zap
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function AIStudioPage() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [output, setOutput] = useState("");

    const handleGenerate = () => {
        if (!prompt) return;
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => {
            setOutput(`Generated high-converting marketing content for: "${prompt}"\n\n1. Headline: Transform Your Vision into Value with Tecobit\n2. Body: Our data-driven strategies ensure your brand reaches the right audience at the right time in the Nepalese market.\n3. CTA: Book your free consultation today!`);
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground">
                <div className="container mx-auto px-6 py-12 lg:py-24 max-w-7xl">
                    <header className="mb-12">
                        <div className="flex items-center space-x-3 text-tecobit-mint mb-4">
                            <Zap size={24} className="fill-current" />
                            <span className="font-black tracking-[0.4em] text-xs uppercase">Premium Lab</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                            AI <span className="text-tecobit-mint">Studio</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            The advanced content generation engine for high-performance digital marketing. Build, iterate, and deploy at scale.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Editor Section */}
                        <div className="lg:col-span-8 space-y-8">
                            <GlassCard className="p-1">
                                <div className="bg-muted/10 rounded-[14px]">
                                    {/* Toolbar */}
                                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-2 text-xs font-bold text-muted-foreground">
                                                <Terminal size={14} />
                                                <span>PROMPT EDITOR</span>
                                            </div>
                                            <div className="h-4 w-px bg-white/10" />
                                            <select className="bg-transparent border-none text-xs font-black uppercase tracking-widest outline-none text-tecobit-mint cursor-pointer">
                                                <option>GPT-4o (Default)</option>
                                                <option>Claude 3.5 Sonnet</option>
                                                <option>Llama 3 (Tecobit Fine-tuned)</option>
                                            </select>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground"><History size={18} /></button>
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground"><Settings2 size={18} /></button>
                                        </div>
                                    </div>

                                    {/* Textarea */}
                                    <textarea
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Describe the content you want to generate (e.g. '3 SEO optimization strategies for a local coffee shop in Kathmandu')..."
                                        className="w-full h-64 bg-transparent p-8 outline-none text-lg resize-none placeholder:text-muted-foreground/30 font-medium leading-relaxed"
                                    />

                                    {/* Footer */}
                                    <div className="p-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex space-x-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Temperature</span>
                                                <input type="range" className="w-24 accent-tecobit-mint h-1 mt-2" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Tokens</span>
                                                <span className="text-xs font-bold text-foreground mt-1">2,048</span>
                                            </div>
                                        </div>
                                        <RippleButton
                                            variant="primary"
                                            className="px-10 flex items-center space-x-3 min-w-[200px]"
                                            onClick={handleGenerate}
                                            disabled={isGenerating}
                                        >
                                            {isGenerating ? (
                                                <RefreshCcw size={18} className="animate-spin" />
                                            ) : (
                                                <Sparkles size={18} />
                                            )}
                                            <span>{isGenerating ? "GENERATING..." : "GENERATE ✨"}</span>
                                        </RippleButton>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Output Section */}
                            {output && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <GlassCard className="p-1 border-tecobit-mint/20">
                                        <div className="bg-tecobit-mint/5 rounded-[14px] p-8">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center space-x-3 text-tecobit-mint">
                                                    <span className="w-2 h-2 bg-tecobit-mint rounded-full animate-pulse" />
                                                    <span className="font-black tracking-[0.3em] text-[10px] uppercase">OUTPUT READY</span>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-tecobit-mint transition-colors">
                                                        <Copy size={16} />
                                                        <span>Copy</span>
                                                    </button>
                                                    <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-tecobit-mint transition-colors">
                                                        <Save size={16} />
                                                        <span>Save</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="whitespace-pre-wrap text-foreground text-lg leading-relaxed font-medium">
                                                {output}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar Section */}
                        <div className="lg:col-span-4 space-y-8">
                            <GlassCard className="p-8">
                                <h3 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center">
                                    <Layers size={18} className="mr-3 text-tecobit-mint" />
                                    Smart Presets
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "SEO Meta Description",
                                        "Social Ad Copy",
                                        "Email Subject Lines",
                                        "Blog Intro",
                                        "Brand Taglines"
                                    ].map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setPrompt(`Generate a ${preset} for...`)}
                                            className="w-full text-left p-4 rounded-xl border border-white/5 hover:border-tecobit-mint/30 hover:bg-tecobit-mint/5 transition-all text-sm font-bold group"
                                        >
                                            <span className="group-hover:text-tecobit-mint transition-colors">{preset}</span>
                                        </button>
                                    ))}
                                </div>
                            </GlassCard>

                            <div className="bg-gradient-to-br from-tecobit-deep-teal to-tecobit-green rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 text-white/10 group-hover:scale-150 transition-transform duration-700">
                                    <Sparkles size={120} />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Unlimited Power</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    Unlock advanced features like full blog generation and visual asset creation.
                                </p>
                                <RippleButton variant="primary" className="w-full bg-white text-black hover:shadow-white/20">
                                    UPGRADE TO PRO
                                </RippleButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
