import { startups } from '../../lib/data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function StartupPage({ params }: { params: { id: string } }) {
  const startup = startups.find((s) => s.id === params.id)

  if (!startup) {
    notFound()
  }

  const progress = (startup.currentFunding / startup.fundingGoal) * 100

  return (
    <div className="card max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{startup.name}</h1>
      <p className="text-xl mb-4 text-gray-600">{startup.category}</p>
      <p className="mb-6 text-gray-700">{startup.description}</p>
      <div className="mb-6">
        <Progress value={progress} className="w-full mb-2" />
        <p className="text-sm text-gray-600">
          ${startup.currentFunding.toLocaleString()} raised of ${startup.fundingGoal.toLocaleString()}
        </p>
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Invest Now</Button>
    </div>
  )
}

