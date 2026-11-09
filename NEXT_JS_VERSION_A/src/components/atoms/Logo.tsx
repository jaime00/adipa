import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  imgClassName?: string
}

export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(className)}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Image
        src="https://www.giuntipsy.com/it-it/media/logo/default/Logo_Color_RGB-2026.png"
        alt="Giunti Psychometrics"
        width={220}
        height={48}
        className={cn('h-10 w-auto', imgClassName)}
        priority
      />
    </Link>
  )
}
