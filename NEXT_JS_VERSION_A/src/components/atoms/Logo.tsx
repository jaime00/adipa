import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn(className)}>
      <Image
        src="https://www.giuntipsy.com/it-it/media/logo/default/Logo_Color_RGB-2026.png"
        alt="Giunti Psychometrics"
        width={220}
        height={48}
        className="h-10 w-auto"
        priority
      />
    </Link>
  )
}
