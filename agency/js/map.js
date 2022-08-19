$('.js-number').each(function() {
    var count = $(this).children('[data-count]');
    $(this).mouseenter(function() {

        if (count.data('count') > 3) {
            count.prop('Counter', 0).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function(now) {
                    count.text(Math.ceil(now));
                }
            });
        } else {
            count.prop('Counter', 8).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function(now) {
                    count.text(Math.ceil(now));
                }
            });
        }
    });
});
$('.js-location').click(function() {
    if ($(window).width() < 768) {
        window.location.href = 'https://www.google.com/maps/search/40.981564,29.086037'
    }
})