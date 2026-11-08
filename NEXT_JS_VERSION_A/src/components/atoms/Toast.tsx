'use client'

import { AnimatePresence, m } from 'framer-motion'
import { CircleCheck, X } from 'lucide-react'
import { useEffect } from 'react'

import { springSnappy } from '@/lib/motion'

interface ToastProps {
  message: string
  visible: boolean
  onClose: () => void
  duration?: number
}

export function Toast({
  message,
  visible,
  onClose,
  duration = 4000
}: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [visible, onClose, duration])

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0, y: 40, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={springSnappy}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl bg-gp-text px-5 py-4 text-white shadow-xl"
          role="status"
          aria-live="polite"
        >
          <CircleCheck className="h-5 w-5 shrink-0 text-emerald-400" />
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 shrink-0 rounded-lg p-1 transition-colors hover:bg-white/10"
            aria-label="Chiudi notifica"
          >
            <X className="h-4 w-4" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  )
}
