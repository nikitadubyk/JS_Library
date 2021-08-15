import './lib/lib';
import $ from './lib/lib';

$('.active').addClass('test', 'test1', 'test2');

// $('.active').removeClass('test1', 'test2');

// $('.active').removeClass();

$('.btn').click(function() {
    $('div').eq(2).toggleClass('active');
});

$('.btn').setAtr('data-btn', 'btn').removeAtr('data-btn');

// console.log($('button').html('change'));

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(3).find('.more'));