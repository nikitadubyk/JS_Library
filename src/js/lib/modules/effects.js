import $ from '../core';

$.prototype.startAnimation = function(dur, callback, fin) {
    let timeStart;

    function _startAnimation(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElepsed = time - timeStart;
        let complaction = Math.min(timeElepsed / dur, 1);

        callback(complaction);

        if (timeElepsed < dur) {
            requestAnimationFrame(_startAnimation);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _startAnimation;
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block";

        const _fadeIn = (complaction) => {
            this[i].style.opacity = complaction;
        };

        const ani = this.startAnimation(dur, _fadeIn, fin);
        requestAnimationFrame(ani);  
    }

    return this;
}; 

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.startAnimation(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};