import $ from '../core';

$.prototype.get = async function(url, dataType = 'json') {
    let res = await fetch(url);
    
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    switch (dataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};

$.prototype.post = async function(url, data, dataType = 'text') {
    let res = await fetch(url, {
        method: 'post',
        body: data
    });

    switch (dataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};