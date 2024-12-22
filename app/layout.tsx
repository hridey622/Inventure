import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventure',
  description: 'Invest in the next big thing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navigation />
        <main className="container mx-auto px-4 py-6 max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  )
}

