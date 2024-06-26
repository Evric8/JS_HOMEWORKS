import { arrFromStorage } from "./ModelDocument.js"

 function paintingPhoto(argPhoto){
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.classList.add('div')

    for(const f of argPhoto){
        const a =  f.thumbnailUrl
        const img = document.createElement('img')
        img.setAttribute('src', `${a}`)
        img.setAttribute('alt', 'photo')
        div.append(img)
    }

    body.append(div)

}

paintingPhoto(arrFromStorage)