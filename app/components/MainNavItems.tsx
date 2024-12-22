import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainNavItems() {
  const pathname = usePathname()

  const navItems = [
    { href: '/startups', label: 'Startups' },
    { href: '/startup-categories', label: 'Categories' },
    { href: '/investments', label: 'My Investments' },
    { href: '/payment-methods', label: 'Payment Methods' },
    { href: '/investment-insights', label: 'Insights' },
    { href: '/feedback', label: 'Feedback' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            pathname === item.href
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}

