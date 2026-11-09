<section id="contatti" class="contact">
    <div class="contact__container">
        @include('partials.section-header', [
            'label' => 'Contatti',
            'title' => 'Parliamo del tuo progetto',
            'description' => 'Hai domande sui nostri prodotti o corsi? Compila il modulo e ti risponderemo entro 24 ore.',
        ])

        <div class="contact__grid">
            <div class="contact__form-card card">
                <div class="card__header">
                    <h3 class="card__title">Inviaci un messaggio</h3>
                    <p class="card__description">Compila tutti i campi per contattarci</p>
                </div>
                <div class="card__content">
                    <form id="contact-form" class="contact__form" novalidate>
                        <div class="contact__field">
                            <label class="contact__label" for="field-name">Nome completo</label>
                            <input
                                class="input"
                                type="text"
                                id="field-name"
                                name="name"
                                placeholder="Mario Rossi"
                                aria-invalid="false"
                            >
                            <span class="contact__error" id="field-name-error" aria-live="polite"></span>
                        </div>

                        <div class="contact__field">
                            <label class="contact__label" for="field-email">Email</label>
                            <input
                                class="input"
                                type="email"
                                id="field-email"
                                name="email"
                                placeholder="mario.rossi@email.com"
                                aria-invalid="false"
                            >
                            <span class="contact__error" id="field-email-error" aria-live="polite"></span>
                        </div>

                        <div class="contact__field">
                            <label class="contact__label" for="field-message">Messaggio</label>
                            <textarea
                                class="textarea"
                                id="field-message"
                                name="message"
                                placeholder="Scrivi qui il tuo messaggio..."
                                aria-invalid="false"
                            ></textarea>
                            <span class="contact__error" id="field-message-error" aria-live="polite"></span>
                        </div>

                        <button class="button button--accent button--full" type="submit" id="submit-button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                            Invia messaggio
                        </button>
                    </form>
                </div>
            </div>

            <div class="contact__info-column">
                <div class="card">
                    <div class="card__content">
                        <div class="contact__info-grid">
                            <div class="contact__info-item">
                                <div class="contact__info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="contact__info-title">Sede principale</h3>
                                    <p class="contact__info-text">Via Giuseppe Verdi, 8<br>50122 Firenze, Italia</p>
                                </div>
                            </div>

                            <div class="contact__info-item">
                                <div class="contact__info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="contact__info-title">Telefono</h3>
                                    <p class="contact__info-text">+39 055 6236 801</p>
                                </div>
                            </div>

                            <div class="contact__info-item contact__info-item--full">
                                <div class="contact__info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="contact__info-title">Orari</h3>
                                    <p class="contact__info-text">Lunedi - Venerdi: 9:00 - 18:00<br>Sabato - Domenica: Chiuso</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact__map-card">
                    <iframe
                        title="Sede Giunti Psychometrics, Firenze"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.4!2d11.2558!3d43.7696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403c8e2e3e7%3A0x6a29c87f1e1b2d3f!2sVia%20Giuseppe%20Verdi%2C%208%2C%2050122%20Firenze%20FI%2C%20Italy!5e0!3m2!1sit!2sit!4v1700000000000"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        sandbox="allow-scripts"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
