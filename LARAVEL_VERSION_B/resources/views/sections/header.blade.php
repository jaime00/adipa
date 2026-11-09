<header class="header" id="site-header">
    <div class="header__inner">
        @include('partials.logo')

        <nav class="header__nav" aria-label="Navigazione principale">
            <a href="#test" class="header__nav-link header__nav-link--active" data-section="test">Test</a>
            <a href="#catalogo" class="header__nav-link" data-section="catalogo">Formazione</a>
            <a href="#" class="header__nav-link">Risorse</a>
            <a href="#contatti" class="header__nav-link" data-section="contatti">Contatti</a>
        </nav>

        <div class="header__actions">
            <div class="header__search-wrapper">
                <svg class="header__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                    type="search"
                    class="input input--with-icon header__search-input"
                    id="desktop-search"
                    placeholder="Cerca test, corsi..."
                    aria-label="Cerca prodotti"
                >
            </div>
            <button class="button button--outline" type="button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                Accedi
            </button>
        </div>

        <button
            class="button button--ghost button--icon header__menu-button"
            type="button"
            id="mobile-menu-toggle"
            aria-label="Apri menu"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
        </button>
    </div>

    <div class="scroll-progress" id="scroll-progress"></div>
</header>

{{-- Mobile Menu --}}
<div class="mobile-menu__overlay" id="mobile-overlay"></div>
<div class="mobile-menu__drawer" id="mobile-drawer" aria-label="Menu mobile">
    <div class="mobile-menu__header">
        @include('partials.logo')
    </div>
    <div class="mobile-menu__body">
        <div class="header__search-wrapper" style="position: relative;">
            <svg class="header__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
                type="search"
                class="input input--with-icon"
                id="mobile-search"
                placeholder="Cerca test, corsi..."
                aria-label="Cerca prodotti"
                style="width: 100%;"
            >
        </div>
        <div class="mobile-menu__separator"></div>
        <nav class="mobile-menu__nav">
            <a href="#test" class="mobile-menu__link" data-close-menu>Test</a>
            <a href="#catalogo" class="mobile-menu__link" data-close-menu>Formazione</a>
            <a href="#" class="mobile-menu__link" data-close-menu>Risorse</a>
            <a href="#contatti" class="mobile-menu__link" data-close-menu>Contatti</a>
        </nav>
        <div class="mobile-menu__separator"></div>
        <button class="button button--primary button--full" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            Accedi
        </button>
    </div>
</div>
