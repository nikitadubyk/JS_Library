import './lib/lib';

$('.active').addClass('test', 'test1', 'test2');

// $('.active').removeClass('test1', 'test2');

// $('.active').removeClass();

$('.btn').click(function() {
    $(this).toggleClass('active');
});
