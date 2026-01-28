import { Inter, Anybody } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const anybody = Anybody({
  subsets: ['latin'],
  variable: '--font-anybody',
})

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tecobit Marketing | Digital Growth Agency Nepal',
    template: '%s | Tecobit Marketing'
  },
  description: 'Tecobit Marketing is the leading digital growth agency in Nepal. We provide expert SEO, Social Media Marketing, Web Development, and Branding services to scale your business.',
  keywords: ['Digital Marketing Nepal', 'SEO Services Kathmandu', 'Web Development Nepal', 'Social Media Marketing Nepal', 'Tecobit Marketing'],
  authors: [{ name: 'Tecobit Team' }],
  creator: 'Tecobit Marketing',
  publisher: 'Tecobit Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Tecobit Marketing | Digital Growth Agency Nepal',
    description: 'Empowering brands with data-driven digital marketing and world-class technology.',
    url: baseUrl,
    siteName: 'Tecobit Marketing',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Tecobit Marketing Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecobit Marketing | Digital Growth Agency',
    description: 'Leading digital marketing services in Nepal.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import { ThemeProvider } from '@/components/ThemeProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { BackToTop } from '@/components/BackToTop'
import { StructuredData } from '@/components/StructuredData'
import { ThreeBackground } from '@/components/ThreeBackground' // Import
import { Navbar } from '@/components/Navbar'
import { SiteFooter } from '@/components/SiteFooter'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config })
  const headerData = await payload.findGlobal({ slug: 'header' })
  const footerData = await payload.findGlobal({ slug: 'footer' })

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${anybody.variable} font-sans grain relative selection:bg-tecobit-mint selection:text-black`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThreeBackground />
          <CustomCursor />
          <BackToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar data={headerData} />
            <main className="flex-grow">
              {children}
            </main>
            <SiteFooter data={footerData} />
          </div>
          <ToastContainer position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  )
}


