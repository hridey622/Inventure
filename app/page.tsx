import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Inventure</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-600">
        Discover and invest in the next generation of groundbreaking startups. 
        Be part of the future of innovation and technology.
      </p>
      <div className="flex space-x-4">
        <Link href="/signup">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-6 py-3">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  )
}

