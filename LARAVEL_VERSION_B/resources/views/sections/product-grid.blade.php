<section id="catalogo" class="product-grid">
    <div class="product-grid__container">
        @include('partials.section-header', [
            'label' => 'Catalogo',
            'title' => 'I nostri strumenti',
            'description' => 'Esplora la selezione di test psicologici e corsi di formazione accreditati per professionisti',
        ])

        <div class="product-grid__tabs-wrapper">
            <div class="product-grid__tabs" role="tablist" aria-label="Filtra per categoria">
                @foreach($categories as $category)
                    <button
                        class="product-grid__tab {{ $category['slug'] === 'tutti' ? 'product-grid__tab--active' : '' }}"
                        type="button"
                        role="tab"
                        aria-selected="{{ $category['slug'] === 'tutti' ? 'true' : 'false' }}"
                        data-category="{{ $category['slug'] }}"
                    >
                        {{ $category['label'] }}
                    </button>
                @endforeach
            </div>
        </div>

        <div class="product-grid__grid" id="product-grid">
            @foreach($products as $product)
                @include('partials.product-card', ['product' => $product])
            @endforeach
        </div>

        <p class="product-grid__empty" id="empty-state">
            Nessun prodotto trovato. Prova a modificare i filtri o la ricerca.
        </p>
    </div>
</section>
