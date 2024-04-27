'use strict';

(function(){
    const ul = document.getElementById('ulId');
    const attributesUl = []
    const attributesNameUl = []

    for(let attr of ul.attributes){
        attributesUl.push(attr.nodeValue)
        attributesNameUl.push(attr)
    }
    console.log(attributesUl);
    console.log(attributesNameUl);


    ul.lastElementChild.innerHTML = 'Привіт мене звати Олександр'
    console.log(ul.lastElementChild.innerText);


    ul.firstElementChild.setAttribute('data-my-name',
        'Oleksandr')
    console.log(ul.firstElementChild);


    ul.removeAttribute('data-dog-tail')
    console.log(ul.attributes);
})()

