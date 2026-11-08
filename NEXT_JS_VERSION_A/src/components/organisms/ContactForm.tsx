'use client'

import { m } from 'framer-motion'
import { useCallback } from 'react'

import { Toast } from '@/components/atoms/Toast'
import { ContactInfoItem } from '@/components/molecules/ContactInfoItem'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { AnimatedIconButton } from '@/components/ui/animated-icon-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ClockIcon } from '@/components/ui/clock'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { MapPinIcon } from '@/components/ui/map-pin'
import { PhoneIcon } from '@/components/ui/phone'
import { SendIcon } from '@/components/ui/send'
import { Textarea } from '@/components/ui/textarea'

import { useContactForm } from '@/hooks/useContactForm'

import {
  durationDefault,
  slideLeft,
  slideRight,
  viewportOnceNear
} from '@/lib/motion'

export function ContactForm() {
  const { formData, errors, status, updateField, handleSubmit, reset } =
    useContactForm()

  const showToast = status === 'success'
  const handleToastClose = useCallback(() => {
    reset()
  }, [reset])

  return (
    <section id="contatti" className="py-16 md:py-24 bg-card relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          label="Contatti"
          title="Parliamo del tuo progetto"
          description="Hai domande sui nostri prodotti o corsi? Compila il modulo e ti risponderemo entro 24 ore."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 items-stretch">
          <m.div
            className="h-full"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceNear}
            transition={durationDefault}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Inviaci un messaggio</CardTitle>
                <CardDescription>
                  Compila tutti i campi per contattarci
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  noValidate
                >
                  <FieldGroup>
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel htmlFor="field-name">
                        Nome completo
                      </FieldLabel>
                      <Input
                        id="field-name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Mario Rossi"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? 'field-name-error' : undefined
                        }
                      />
                      {errors.name && (
                        <FieldError id="field-name-error">
                          {errors.name}
                        </FieldError>
                      )}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel htmlFor="field-email">Email</FieldLabel>
                      <Input
                        id="field-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="mario.rossi@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? 'field-email-error' : undefined
                        }
                      />
                      {errors.email && (
                        <FieldError id="field-email-error">
                          {errors.email}
                        </FieldError>
                      )}
                    </Field>

                    <Field data-invalid={errors.message ? true : undefined}>
                      <FieldLabel htmlFor="field-message">Messaggio</FieldLabel>
                      <Textarea
                        id="field-message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Scrivi qui il tuo messaggio..."
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? 'field-message-error' : undefined
                        }
                      />
                      {errors.message && (
                        <FieldError id="field-message-error">
                          {errors.message}
                        </FieldError>
                      )}
                    </Field>

                    <AnimatedIconButton
                      icon={SendIcon}
                      iconSize={18}
                      type="submit"
                      className="w-full h-11 bg-gp-accent text-white hover:bg-gp-accent-light shadow-lg shadow-gp-accent/25"
                      disabled={
                        status === 'validating' && !Object.keys(errors).length
                      }
                    >
                      {status === 'validating' && !Object.keys(errors).length
                        ? 'Invio in corso...'
                        : 'Invia messaggio'}
                    </AnimatedIconButton>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
            <Toast
              message="Messaggio inviato! Ti risponderemo il prima possibile."
              visible={showToast}
              onClose={handleToastClose}
            />
          </m.div>

          <m.div
            className="flex h-full flex-col gap-6"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceNear}
            transition={{ ...durationDefault, delay: 0.1 }}
          >
            <Card>
              <CardContent className="grid grid-cols-2 gap-5">
                <ContactInfoItem icon={MapPinIcon} title="Sede principale">
                  Via Giuseppe Verdi, 8
                  <br />
                  50122 Firenze, Italia
                </ContactInfoItem>

                <ContactInfoItem icon={PhoneIcon} title="Telefono">
                  +39 055 6236 801
                </ContactInfoItem>

                <ContactInfoItem
                  icon={ClockIcon}
                  title="Orari"
                  className="col-span-2"
                >
                  Lunedi - Venerdi: 9:00 - 18:00
                  <br />
                  Sabato - Domenica: Chiuso
                </ContactInfoItem>
              </CardContent>
            </Card>

            <Card className="flex-1 overflow-hidden p-0">
              <iframe
                title="Sede Giunti Psychometrics, Firenze"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.4!2d11.2558!3d43.7696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403c8e2e3e7%3A0x6a29c87f1e1b2d3f!2sVia%20Giuseppe%20Verdi%2C%208%2C%2050122%20Firenze%20FI%2C%20Italy!5e0!3m2!1sit!2sit!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 220 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts"
              />
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  )
}
