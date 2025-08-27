'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Companions', href: '/companions' },
    { name: 'My journey', href: '/my-journey' },
]

const NavItems = () => {

    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ name, href }) => (
                <Link href={href} key={name} className={cn(pathname === href
                    && 'text-primary font-semibold')}>
                    {name}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems
