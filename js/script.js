'use strict';

const input = document.querySelector('input')
const btn = document.querySelector('button')
const div = document.querySelector('div')

btn.addEventListener('click', handleBtn)

function handleBtn (){
    if(div.children.length > 0){
        div.innerHTML = ''
        div.style.border = `none`;
    }

    const id = input.value

    if(id <= 0 || id > 100){
        return alert('Введіть від 1 до 100')
    }

    const result = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const promise = new Promise((resolve, reject) => {
        if(id > 0 || id > 100){
            resolve(result)
        } else {
            reject(Error)
        }
    })

    promise
        .then((response)=>{
            response = response.json()
            return response
        })
        .then((data)=>{
            blok(data)
            return div
        })
        .catch((error)=>{
            console.log(error);
        })
}

function comment (){
    const btnComment = document.createElement('button')
    btnComment.innerHTML = 'Comment'
    click(btnComment)

    return btnComment
}

function blok(data){
    const newDiv = document.createElement('div')
    const ul = document.createElement('ul')
    const h3 = document.createElement('h3')
    h3.innerHTML = 'Пост'

    for(const key in data){
        const li = document.createElement('li')
        li.innerHTML = `${key} : ${data[key]}`

        if(key === 'id'){
            li.setAttribute('data-userId', data[key])
        }

        ul.append(li)
    }

    newDiv.append(h3)
    newDiv.append(ul)
    newDiv.append(comment())
    div.prepend(newDiv)

    newDiv.style.border = `1px solid firebrick`;
    div.style.border = `1px solid firebrick`;

    return div
}

function click (btn){
    btn.addEventListener('click',handleClick)
    onclick()
}

function newBlok (data){
    if(data.length === 0)return
    const comentDiv = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerHTML = 'Коментарі'

    data.forEach(element => {
        const ul = document.createElement('ul')
        for(const key in element){
            const li = document.createElement('li')
            li.innerHTML = `${key} : ${element[key]}`
            ul.append(li)
        }
        comentDiv.style.border = `1px solid firebrick`;

        comentDiv.append(ul)
        comentDiv.prepend(h3)
    })
    div.append(comentDiv)
}

function onclick (){
    btn.removeEventListener('click',handleClick)
}

function handleClick(){
    const postId = input.value
    const userId = document.querySelector('[data-userId]').getAttribute('data-userId')

    if(postId === userId){
        const result = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

        input.value = ''

        const promise = new Promise((resolve, reject) => {
            if(result){
                resolve(result)
            } else {
                reject(Error)
            }
        })

        promise
            .then((response)=>{
                response = response.json()
                return response
            })
            .then((data)=>{
                newBlok(data)
                return div
            })
            .catch((error)=>{
                console.log(error);
            })
    }
}

