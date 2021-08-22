import $ from '../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElem = document.querySelectorAll(`${target} [data-close]`);
        closeElem.forEach(btn => {
            $(btn).click((e) => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });
    
        $(target).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });

        document.body.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                $(target).fadeOut(500);
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');

        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames = [], close, callback]]} 
        const buttons = [];
        const {settings} = btns;

        for (let j = 0;j < btns.count; j++){
            let btn = document.createElement('button');
            btn.classList.add('btn', ...settings[j][1]);
            btn.textContent = settings[j][0];
            if (settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (settings[j][3] && typeof(settings[j][3]) === 'function') {
                btn.addEventListener('click', settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close><span>&times;</span></button>
                <div class="modal-header">
                    <div class="modal-title">${text.title}</div>
                </div>
                <div class="modal-body">${text.body}</div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};