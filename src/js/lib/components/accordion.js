import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-heading--active', contentActive = 'accordion-block--active', padding = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + padding + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = 0;
            }
        });
    }
};

$('.accordion-heading').accordion();