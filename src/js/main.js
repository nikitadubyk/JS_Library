import './lib/lib';
import $ from './lib/lib';

$('#first').click(function() {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').click(function() {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).click(function() {
    $('.w-500').fadeOut(800);
});

