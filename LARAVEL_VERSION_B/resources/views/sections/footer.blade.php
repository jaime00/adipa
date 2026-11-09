<footer class="footer">
    <div class="footer__gradient-bar"></div>

    <div class="footer__inner">
        <div class="footer__grid">
            <div class="footer__brand">
                <a href="/" class="footer__brand-logo" onclick="event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });">
                    <img
                        src="https://www.giuntipsy.com/it-it/media/logo/default/Logo_Color_RGB-2026.png"
                        alt="Giunti Psychometrics"
                        width="180"
                        height="40"
                        style="height: 2.5rem; width: auto; filter: brightness(0) invert(1);"
                    >
                </a>
                <p class="footer__brand-description">
                    Leader nella pubblicazione di test psicologici e strumenti di
                    valutazione per professionisti della salute mentale dal 1950.
                </p>
                @include('partials.social-links')
            </div>

            <div>
                <h4 class="footer__column-title">Prodotti</h4>
                <ul class="footer__links">
                    <li><a href="#" class="footer__link">Test Clinici</a></li>
                    <li><a href="#" class="footer__link">Test Educativi</a></li>
                    <li><a href="#" class="footer__link">Test Organizzativi</a></li>
                    <li><a href="#" class="footer__link">Batterie Digitali</a></li>
                </ul>
            </div>

            <div>
                <h4 class="footer__column-title">Formazione</h4>
                <ul class="footer__links">
                    <li><a href="#" class="footer__link">Corsi Online</a></li>
                    <li><a href="#" class="footer__link">Workshop in Presenza</a></li>
                    <li><a href="#" class="footer__link">Webinar Gratuiti</a></li>
                    <li><a href="#" class="footer__link">Certificazioni</a></li>
                </ul>
            </div>

            <div>
                <h4 class="footer__column-title">Azienda</h4>
                <ul class="footer__links">
                    <li><a href="#" class="footer__link">Chi Siamo</a></li>
                    <li><a href="#" class="footer__link">Lavora con Noi</a></li>
                    <li><a href="#" class="footer__link">Privacy Policy</a></li>
                    <li><a href="#" class="footer__link">Termini di Servizio</a></li>
                </ul>
            </div>
        </div>

        <div class="footer__separator"></div>

        <div class="footer__bottom">
            <p class="footer__copyright">
                &copy; 2025 Giunti Psychometrics S.r.l. Tutti i diritti riservati.
            </p>
            <p class="footer__copyright">
                P.IVA 00421250481 &middot; Firenze, Italia
            </p>
        </div>
    </div>
</footer>
