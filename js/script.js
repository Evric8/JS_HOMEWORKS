(function(){
    const list = function generateList(array) {
        const result = array.reduce((ul, item) => {
            const li = document.createElement('li')

            if (!Array.isArray(item)) {
                li.textContent = item
            } else {
                const innerUl = list(item)
                li.appendChild(innerUl)
            }

            ul.appendChild(li)
            return ul

        }, document.createElement('ul'))

        return document.body.appendChild(result)
    }

    console.log(list([1,2, [1.1,1.2,1.3] ,3]))
})()
