$(function () {
    var $bar = $('#scroll-progress');

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var progress = docHeight > 0 ? scrollTop / docHeight : 0;
        $bar.css('transform', 'scaleX(' + Math.min(progress, 1) + ')');
    });
});
