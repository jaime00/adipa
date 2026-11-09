$(function () {
    var $tabs = $('.product-grid__tab');
    var $cards = $('#product-grid .product-card');
    var $empty = $('#empty-state');
    var $desktopSearch = $('#desktop-search');
    var activeCategory = 'tutti';
    var debounceTimer = null;
    var hasScrolled = false;

    // Click "Tutti" tab on first search character
    $desktopSearch.on('input', function () {
        if ($(this).val() && !hasScrolled) {
            hasScrolled = true;
            $tabs.filter('[data-category="tutti"]').trigger('click');
        }
        if (!$(this).val()) {
            hasScrolled = false;
        }
    });

    // Category tabs
    $tabs.on('click', function () {
        var $tab = $(this);
        activeCategory = $tab.data('category');

        $tabs.removeClass('product-grid__tab--active').attr('aria-selected', 'false');
        $tab.addClass('product-grid__tab--active').attr('aria-selected', 'true');

        filterProducts();
    });

    // Search input with debounce
    $desktopSearch.on('input', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterProducts, 300);
    });

    function filterProducts() {
        var query = $desktopSearch.val().toLowerCase().trim();

        // Auto-reset to "tutti" when searching
        var effectiveCategory = query ? 'tutti' : activeCategory;

        if (query) {
            $tabs.removeClass('product-grid__tab--active').attr('aria-selected', 'false');
            $tabs.filter('[data-category="tutti"]').addClass('product-grid__tab--active').attr('aria-selected', 'true');
        }

        var visible = [];

        $cards.each(function () {
            var $card = $(this);
            var cardCategory = $card.data('category');
            var searchable = $card.data('searchable');

            var matchesCategory = effectiveCategory === 'tutti' || cardCategory === effectiveCategory;
            var matchesSearch = !query || searchable.indexOf(query) !== -1;

            if (matchesCategory && matchesSearch) {
                visible.push($card);
            } else {
                $card.hide();
            }
        });

        // Sort: bestsellers first
        visible.sort(function (a, b) {
            var aTag = a.data('tag');
            var bTag = b.data('tag');
            var aScore = aTag === 'Bestseller' ? 0 : 1;
            var bScore = bTag === 'Bestseller' ? 0 : 1;
            return aScore - bScore;
        });

        var $grid = $('#product-grid');
        visible.forEach(function ($card) {
            $card.show().appendTo($grid);
        });

        // Toggle empty state
        if (visible.length === 0) {
            $empty.addClass('product-grid__empty--visible');
        } else {
            $empty.removeClass('product-grid__empty--visible');
        }
    }
});
