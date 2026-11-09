$(function () {
    var numberFormat = new Intl.NumberFormat('it-IT');
    var duration = 2400;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var $el = $(entry.target);
                if ($el.data('counted')) return;
                $el.data('counted', true);

                var end = parseInt($el.data('end'), 10);
                var useSeparator = $el.data('separator') === true || $el.data('separator') === 'true';
                var suffix = end === 75 || end === 2500 ? '+' : '';
                var startTime = performance.now();

                function tick(now) {
                    var progress = Math.min((now - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var current = Math.round(eased * end);
                    var formatted = useSeparator ? numberFormat.format(current) : current.toString();
                    $el.text(formatted + suffix);

                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    }
                }

                requestAnimationFrame(tick);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    $('.hero__stat-number[data-end]').each(function () {
        observer.observe(this);
    });
});
