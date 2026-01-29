import { Inter, Anybody } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const anybody = Anybody({
  subsets: ['latin'],
  variable: '--font-anybody',
})

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Tecobit Technology - Premium Software & Digital Solutions',
  description: 'Empowering businesses with high-performance software and architecture-driven digital growth strategies.',
  keywords: ['software development', 'IT solutions', 'brand strategy', 'web development', 'SEO', 'content marketing'],
  authors: [{ name: 'Tecobit Technology' }],
  creator: 'Tecobit Technology',
  publisher: 'Tecobit Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/tecobit-logo.png?v=3',
    shortcut: '/tecobit-logo.png?v=3',
    apple: '/tecobit-logo.png?v=3',
  },
  openGraph: {
    title: 'Tecobit Technology - Premium Software & Digital Solutions',
    description: 'Transform your business with architecture-driven digital growth strategies.',
    url: baseUrl,
    siteName: 'Tecobit Technology',
    images: [
      {
        url: '/tecobit-logo.png?v=3',
        width: 800,
        height: 600,
        alt: 'Tecobit Technology Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tecobit Technology - Premium Software & Digital Solutions',
    description: 'Transform your business with architecture-driven digital growth strategies.',
    images: ['/tecobit-logo.png?v=3'],
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

import { HeaderData, FooterData } from '@/types/globals';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config })
  const headerData = (await payload.findGlobal({ slug: 'header' })) as unknown as HeaderData
  const footerData = (await payload.findGlobal({ slug: 'footer' })) as unknown as FooterData

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`font-sans grain relative selection:bg-tecobit-mint selection:text-black scrollbar-custom`}>
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


