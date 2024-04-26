'use strict';

(function(){

    const ul = document.getElementById('ulId');
    const childElementsText = []

    for(let child of ul.childNodes){
        if(child.nodeType === 1){
            console.log(child);
            childElementsText.push(child.innerHTML)
        }
    }

    console.log(childElementsText.length);
    console.log(childElementsText);

})()