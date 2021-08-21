import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElem = document.querySelectorAll('[data-close]');
    closeElem.forEach(btn => {
        $(btn).click((e) => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
        } 
    });

    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            $('.modal').fadeOut(500);
        }
    });
};

$('[data-toggle="modal"]').modal();