'use client'

import { useState } from 'react'
import { useEventCallback } from 'usehooks-ts'

import type { ContactFormData, FormStatus } from '@/types/form'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Il nome è obbligatorio'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Il nome deve contenere almeno 2 caratteri'
  }

  if (!data.email.trim()) {
    errors.email = "L'email è obbligatoria"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Inserisci un indirizzo email valido'
  }

  if (!data.message.trim()) {
    errors.message = 'Il messaggio è obbligatorio'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Il messaggio deve contenere almeno 10 caratteri'
  }

  return errors
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const updateField = useEventCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  )

  const handleSubmit = useEventCallback(() => {
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('validating')
      return
    }

    setStatus('validating')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    }, 1000)
  })

  const reset = useEventCallback(() => {
    setStatus('idle')
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  })

  return { formData, errors, status, updateField, handleSubmit, reset }
}
