import { getPayload } from 'payload'
import config from '@/payload.config'
import { HomeHero } from "@/components/HomeHero";
import Features from "@/components/Features";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioLogos } from "@/components/PortfolioLogos";
import { FaqSection } from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Link from 'next/link';
import { PageTransition } from '@/components/PageTransition';
import Services from "@/components/Services";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { LocationSection } from "@/components/LocationSection";

export const metadata = {
  title: 'Digital Excellence & Software Solutions | Tecobit Technology',
  description: 'Tecobit Technology delivers high-performance software, IT solutions, and digital growth strategies for businesses globally.',
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

        <Features />

        <Services />

        <ProcessSection />

        <PortfolioLogos />

        <FaqSection />

        <LocationSection />

        <CallToAction />

      </div>
    </PageTransition>
  )
}
