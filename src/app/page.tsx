import { getPayload } from 'payload'
import config from '@/payload.config'
import { HomeHero } from "@/components/HomeHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioLogos } from "@/components/PortfolioLogos";
import { FaqSection } from "@/components/FaqSection";
import { ProjectCTA } from "@/components/ProjectCTA";
import Link from 'next/link';
import { PageTransition } from '@/components/PageTransition';
import { PremiumServices } from "@/components/PremiumServices";

export const metadata = {
  title: 'Digital Growth Agency in Nepal | Tecobit Marketing',
  description: 'Expert SEO, SMM, and Web Development services in Kathmandu. We transform your business into a digital brand with data-driven strategies.',
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const homeData = pages[0] || null;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background transition-colors duration-500">
        <HomeHero data={homeData as any} />

        <section className="bg-tecobit-mint py-6 text-center shadow-inner relative z-30">
          <p className="text-tecobit-deep-teal font-black uppercase tracking-widest text-xs animate-pulse">
            🚀 2026 Innovation: Helping Brands Scale with Data & Strategy
          </p>
        </section>

        <FeatureGrid />

        <PremiumServices />

        <ProcessSection />

        <PortfolioLogos />

        <FaqSection />

        <ProjectCTA />

        <div className="bg-background border-t border-border py-12 text-center transition-colors duration-500">
          <Link href="/contact" className="inline-block bg-tecobit-mint text-black px-12 py-4 rounded-full hover:shadow-[0_0_40px_rgba(61,255,197,0.4)] font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-2 active:scale-95">
            Ready to Scale? Contact Tecobit Today →
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}
