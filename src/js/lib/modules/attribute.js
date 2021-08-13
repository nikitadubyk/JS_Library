import $ from '../core';

$.prototype.setAtr = function(attrName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName || !value) {
            return this;
        } 

        this[i].setAttribute(attrName, value);
    }

    return this;
};

$.prototype.removeAtr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName) {
            return this;
        } 

        this[i].removeAttribute(attrName);
    }

    return this;
};

$.prototype.getAtr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName) {
            return this;
        } 

        this[i].getAttribute(attrName);
    }

    return this;
};