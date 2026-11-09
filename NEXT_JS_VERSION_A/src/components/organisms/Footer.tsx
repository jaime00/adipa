import { Logo } from '@/components/atoms/Logo'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  Prodotti: [
    'Test Clinici',
    'Test Educativi',
    'Test Organizzativi',
    'Batterie Digitali'
  ],
  Formazione: [
    'Corsi Online',
    'Workshop in Presenza',
    'Webinar Gratuiti',
    'Certificazioni'
  ],
  Azienda: [
    'Chi Siamo',
    'Lavora con Noi',
    'Privacy Policy',
    'Termini di Servizio'
  ]
}

export function Footer() {
  return (
    <footer className="relative bg-gp-primary-dark text-white">
      <div className="h-1 bg-gradient-to-r from-gp-primary via-gp-accent to-gp-primary-light" />

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo
              className="text-white [&>span]:text-gp-accent-light text-2xl"
              imgClassName="brightness-0 invert"
            />
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Leader nella pubblicazione di test psicologici e strumenti di
              valutazione per professionisti della salute mentale dal 1950.
            </p>
            <SocialLinks />
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                {title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; 2025 Giunti Psychometrics S.r.l. Tutti i diritti riservati.
          </p>
          <p className="text-sm text-white/40">
            P.IVA 00421250481 &middot; Firenze, Italia
          </p>
        </div>
      </div>
    </footer>
  )
}
