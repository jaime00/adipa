'use client'

import { m } from 'framer-motion'
import { useRef, useState } from 'react'

import { Logo } from '@/components/atoms/Logo'
import { ScrollProgress } from '@/components/atoms/ScrollProgress'
import { AnimatedIconButton } from '@/components/ui/animated-icon-button'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MenuIcon } from '@/components/ui/menu'
import { SearchIcon } from '@/components/ui/search'
import type { SearchIconHandle } from '@/components/ui/search'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { UserIcon } from '@/components/ui/user'

import { useNavActive } from '@/hooks/useNavActive'

import { springSnappy } from '@/lib/motion'
import { scrollTo } from '@/lib/scrollTo'

const navLinks = [
  { href: '#test', label: 'Test', sectionId: 'test' },
  { href: '#catalogo', label: 'Formazione', sectionId: 'catalogo' },
  { href: '#', label: 'Risorse', sectionId: '' },
  { href: '#contatti', label: 'Contatti', sectionId: 'contatti' }
]

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [sheetOpen, setSheetOpen] = useState(false)
  const searchIconRef = useRef<SearchIconHandle>(null)
  const activeId = useNavActive(
    navLinks.map((l) => l.sectionId).filter(Boolean)
  )

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navigazione principale"
        >
          {navLinks.map((link) => {
            const isActive =
              link.label === 'Test'
                ? !activeId || activeId === 'test'
                : link.sectionId !== '' && activeId === link.sectionId
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
                data-active={isActive}
              >
                {link.label}
                {isActive && (
                  <m.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gp-accent"
                    transition={springSnappy}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div
            className="relative"
            onMouseEnter={() => searchIconRef.current?.startAnimation()}
            onMouseLeave={() => searchIconRef.current?.stopAnimation()}
          >
            <SearchIcon
              ref={searchIconRef}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              size={14}
            />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value
                if (val && !searchQuery) {
                  scrollTo('catalogo')
                }
                onSearchChange(val)
              }}
              placeholder="Cerca test, corsi..."
              aria-label="Cerca prodotti"
              className="w-52 lg:w-64 pl-8"
            />
          </div>
          <AnimatedIconButton
            icon={UserIcon}
            iconSize={14}
            iconClassName="inline-flex"
            variant="outline"
            size="default"
          >
            Accedi
          </AnimatedIconButton>
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={sheetOpen ? 'Chiudi menu' : 'Apri menu'}
              />
            }
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <div
                className="relative"
                onMouseEnter={() => searchIconRef.current?.startAnimation()}
                onMouseLeave={() => searchIconRef.current?.stopAnimation()}
              >
                <SearchIcon
                  ref={searchIconRef}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  size={14}
                />
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Cerca test, corsi..."
                  aria-label="Cerca prodotti"
                  className="pl-8"
                />
              </div>
              <Separator />
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Separator />
              <AnimatedIconButton
                icon={UserIcon}
                iconSize={14}
                iconClassName="inline-flex"
                variant="default"
                className="w-full"
              >
                Accedi
              </AnimatedIconButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <ScrollProgress />
    </header>
  )
}
