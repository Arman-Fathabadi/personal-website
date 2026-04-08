import './globals.css'
import { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Arman Fathabadi | Portfolio',
  description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
  icons: {
    icon: '/brand-icon.ico',
  },
  openGraph: {
    title: 'Arman Fathabadi | Portfolio',
    description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arman Fathabadi | Portfolio',
    description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/brand-icon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}