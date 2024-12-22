import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Startup } from '../lib/types'

export default function StartupCard({ startup }: { startup: Startup }) {
  const progress = (startup.currentFunding / startup.fundingGoal) * 100

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{startup.category}</p>
      <p className="text-sm text-gray-700 mb-4">{startup.description}</p>
      <Progress value={progress} className="w-full mb-2" />
      <p className="text-sm text-gray-600 mb-4">
        ${startup.currentFunding.toLocaleString()} raised of ${startup.fundingGoal.toLocaleString()}
      </p>
      <Link href={`/startups/${startup.id}`}>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
      </Link>
    </div>
  )
}

