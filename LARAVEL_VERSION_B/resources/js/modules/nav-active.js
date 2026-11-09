$(function () {
    var sections = ['test', 'catalogo', 'contatti'];
    var $links = $('.header__nav-link[data-section]');
    var currentActive = 'test';

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                currentActive = entry.target.id;
                updateLinks();
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    function updateLinks() {
        $links.each(function () {
            var $link = $(this);
            var section = $link.data('section');
            var isActive = section === currentActive ||
                (section === 'test' && !currentActive);

            $link.toggleClass('header__nav-link--active', isActive);
        });
    }
});
