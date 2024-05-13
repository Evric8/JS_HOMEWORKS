(function(){
    const generateList = (array) => {
        const ul = document.createElement('ul')
        const result = array.reduce((ul, item) => {
            const li = document.createElement('li')
            if (!Array.isArray(item)) {
                li.textContent = item
            } else {
                const innerUl = generateList(item)
                li.appendChild(innerUl)
            }

            ul.appendChild(li)
            return ul
        }, ul)

    return document.body.appendChild(result)
    }

    console.log(generateList([1,2, [1.1,1.2,1.3] ,3]))
})()
