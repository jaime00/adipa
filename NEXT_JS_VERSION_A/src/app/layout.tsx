import type { Metadata } from 'next'

import { TooltipProvider } from '@/components/ui/tooltip'

import './globals.css'

export const metadata: Metadata = {
  title: 'Giunti Psychometrics | Test Psicologici e Formazione',
  description:
    'Scopri il catalogo completo di test psicologici, batterie diagnostiche e corsi di formazione per professionisti della salute mentale.'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
