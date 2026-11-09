$(function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    $(document).on('click', 'a[href^="#"]', function (e) {
        var target = $(this).attr('href');
        if (target === '#') return;

        var $el = $(target);
        if ($el.length) {
            e.preventDefault();
            $el[0].scrollIntoView({ behavior: 'smooth' });
        }
    });
});
