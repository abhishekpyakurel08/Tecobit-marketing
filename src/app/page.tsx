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
import { MarqueeBanner } from "@/components/MarqueeBanner";

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

        <MarqueeBanner />

        <FeatureGrid />

        <PremiumServices />

        <ProcessSection />

        <PortfolioLogos />

        <FaqSection />

        <ProjectCTA />


      </div>
    </PageTransition>
  )
}
