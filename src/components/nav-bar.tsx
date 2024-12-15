import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu, ShoppingCart, UserCheck2Icon } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { getPayloadClient } from '@/get-payload'
import { AuthenticationStatus } from './auth-status'
import { currentUser } from '@/lib/payload'
import { ModeToggle } from './mode-toggle'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'New', href: '/new' },
  { name: 'Sales', href: '/sales' },
  { name: 'Orders', href: '/orders' },
  { name: 'Profiles', href: '/profiles' },
  { name: 'Statistics', href: '/admin/statistics' },
]

export const Navbar = async () => {
  const { user } = await currentUser()

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-8">
            eWardrobe
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) =>
              item.href !== '/statistics' ? (
                <Link key={item.name} href={item.href} className="text-sm font-medium">
                  {item.name}
                </Link>
              ) : user?.role === 'admin' ? (
                <Link key={item.name} href={item.href} className="text-sm font-medium">
                  {item.name}
                </Link>
              ) : null,
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {['admin', 'super_admin'].includes(user?.role || 'user') && (
            <Link href="/admin">
              <Button variant="default">
                <UserCheck2Icon className="h-5 w-5" />
                Admin
              </Button>
            </Link>
          )}
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
          <AuthenticationStatus isAuth={Boolean(user)} />
          <div className='hidden md:block'>
            <ModeToggle />
          </div>
          <Sheet>
            <SheetTitle className="hidden">Menu</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) =>
                  item.href !== '/statistics' ? (
                    <Link key={item.name} href={item.href} className="text-sm font-medium">
                      {item.name}
                    </Link>
                  ) : user?.role === 'admin' ? (
                    <Link key={item.name} href={item.href} className="text-sm font-medium">
                      {item.name}
                    </Link>
                  ) : null,
                )}
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
