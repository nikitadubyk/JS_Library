import './lib/lib';
import $ from './lib/lib';

$('.active').addClass('test', 'test1', 'test2');

// $('.active').removeClass('test1', 'test2');

// $('.active').removeClass();

$('.btn').click(function() {
    $(this).toggleClass('active');
});

$('.btn').setAtr('data-btn', 'btn').removeAtr('data-btn');