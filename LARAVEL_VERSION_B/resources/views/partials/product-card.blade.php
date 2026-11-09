@php
    $formatClassMap = [
        'Cartaceo' => 'badge--cartaceo',
        'Digitale' => 'badge--digitale',
        'Corso online' => 'badge--corso',
        'In presenza' => 'badge--in-presenza',
    ];
    $formatClass = $formatClassMap[$product['format']] ?? '';
    $hasDiscount = $product['discountedPrice'] < $product['originalPrice'];
    $searchable = strtolower(implode(' ', [
        $product['name'],
        $product['author'],
        $product['description'],
        $product['format'],
    ]));
@endphp

<article
    class="product-card"
    data-category="{{ $product['category'] }}"
    data-searchable="{{ $searchable }}"
    data-tag="{{ $product['tag'] ?? '' }}"
>
    <div class="product-card__image-wrapper">
        <img
            class="product-card__image"
            src="{{ $product['imageUrl'] }}"
            alt="{{ $product['imageAlt'] }}"
            loading="lazy"
            width="600"
            height="400"
        >
    </div>

    <div class="product-card__body">
        <div>
            <h3 class="product-card__name">{{ $product['name'] }}</h3>
            <p class="product-card__author">{{ $product['author'] }}</p>
        </div>

        <div class="product-card__meta">
            @if(!empty($product['tag']))
                <span class="badge badge--tag">{{ $product['tag'] }}</span>
            @endif
            <div class="product-card__rating">
                <svg class="product-card__star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="product-card__rating-value">{{ $product['rating'] }}</span>
            </div>
            <span class="product-card__review-count">
                {{ number_format($product['reviewCount'], 0, ',', '.') }} valutazioni
            </span>
        </div>

        <div class="product-card__badges">
            <span class="badge {{ $formatClass }}">{{ $product['format'] }}</span>
            <span class="badge badge--secondary">{{ $product['ageRange'] }}</span>
            @if(!empty($product['startDate']))
                <span class="badge badge--secondary">{{ $product['startDate'] }}</span>
            @endif
        </div>
    </div>

    <div class="product-card__footer">
        <div class="product-card__prices">
            <span class="product-card__price">{{ formatPrice($product['discountedPrice']) }}</span>
            @if($hasDiscount)
                <span class="product-card__original-price">{{ formatPrice($product['originalPrice']) }}</span>
            @endif
        </div>
        <button class="button button--outline button--sm" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            Aggiungi al carrello
        </button>
    </div>
</article>
