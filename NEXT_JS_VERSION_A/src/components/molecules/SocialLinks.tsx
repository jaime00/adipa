import { FacebookIcon } from '@/components/ui/facebook'
import { InstagramIcon } from '@/components/ui/instagram'
import { LinkedinIcon } from '@/components/ui/linkedin'
import { TwitterIcon } from '@/components/ui/twitter'

const socials = [
  {
    Icon: FacebookIcon,
    label: 'Facebook',
    href: 'https://www.facebook.com/GiuntiPsychometricsItaly/'
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/giunti-psychometrics-global/'
  },
  {
    Icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/giuntipsychometrics/'
  },
  { Icon: TwitterIcon, label: 'X', href: 'https://x.com/vetoreditora' }
]

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socials.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}
