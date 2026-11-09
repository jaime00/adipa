$(function () {
    var $toggle = $('#mobile-menu-toggle');
    var $overlay = $('#mobile-overlay');
    var $drawer = $('#mobile-drawer');
    var isOpen = false;

    function openMenu() {
        isOpen = true;
        $overlay.addClass('mobile-menu__overlay--open');
        $drawer.addClass('mobile-menu__drawer--open');
        $toggle.attr('aria-label', 'Chiudi menu');
        $('body').css('overflow', 'hidden');
    }

    function closeMenu() {
        isOpen = false;
        $overlay.removeClass('mobile-menu__overlay--open');
        $drawer.removeClass('mobile-menu__drawer--open');
        $toggle.attr('aria-label', 'Apri menu');
        $('body').css('overflow', '');
    }

    $toggle.on('click', function () {
        isOpen ? closeMenu() : openMenu();
    });

    $overlay.on('click', closeMenu);

    $drawer.on('click', '[data-close-menu]', function () {
        closeMenu();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && isOpen) closeMenu();
    });

    $(window).on('resize', function () {
        if (window.innerWidth >= 768 && isOpen) closeMenu();
    });

    // Sync mobile search with desktop
    $('#mobile-search').on('input', function () {
        $('#desktop-search').val($(this).val()).trigger('input');
    });
});
