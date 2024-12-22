'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import MainNavItems from './MainNavItems'

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-semibold text-xl text-gray-900">
                Inventure
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isHomePage ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-700">Log In</Button>
                </Link>
                <Link href="/signup">
                  <Button className="ml-3 bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
                </Link>
              </>
            ) : (
              <MainNavItems />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

