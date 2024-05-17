'use strict';

const div = document.createElement('div')
div.classList.add('wrapper')

const product = document.createElement('div')
product.classList.add('product')

const list = document.createElement('div')
list.classList.add('list')

const descriptionThing  = document.createElement('div')
descriptionThing.classList.add('price-info')

const body = document.querySelector('body')
body.append(div)
div.append(product, list, descriptionThing)

const ul = `
    <ul>
        <li data-id="bike">Велосипеди</li>
        <li  data-id="scooters">Електросамокати</li>
        <li data-id="treadmills">Бігові доріжки</li>
    </ul>
`;

product.innerHTML = ul;
const data = {
    bike: [
        {name: 'Crossride Skyline 24" 13" 2023',  description: `Розмір рами
        13". 
        Діаметр коліс
        24". 
        Клас
        Міський. 
        Колір
        Жовтогарячий.`},
        {name: 'Cross 26" Smile 2023 Рама-13"',  description: `Розмір рами
        13". 
        Діаметр коліс
        26". 
        Клас
        Гірський 
        Хардтейл. 
        Колір
        Чорно-рожевий.`},
        {name: 'Ardis CXR 29" 16" 2023', description: `Розмір рами
        16". 
        Діаметр коліс
        29". 
        Клас
        Гірський.
        Колір
        Жовтогарячий.`}
    ],
    scooters: [
        {name: 'Acer Electrical Scooter 5 Black',  description: `Максимальна швидкість
        25 км/год. 
        Максимальне рекомендоване навантаження
        100 кг. 
        Номінальна потужність
        350 Вт.`},
        {name: 'URBiS U3.2 Electric Scooter Black', description: `Максимальна швидкість
        25 км/год. 
        Максимальне рекомендоване навантаження
        100 кг. 
        Номінальна потужність
        350 Вт.`},
        {name: 'Nash Bobster S500 Black',  description: `Максимальна швидкість
        25 км/год. 
        Максимальне рекомендоване навантаження
        100 кг. 
        Номінальна потужність
        270 Вт.`},
        {name: 'Yadea KS5 Black/Grey',  description: `Максимальна швидкість
        30 км/год. 
        Максимальне рекомендоване навантаження
        110 кг. 
        Номінальна потужність
        350 Вт.`}
    ],
    treadmills: [
        {name: 'KingSmith Walkingpad&Treadmill R2', description: `Максимальне навантаження
        110 кг
        Особливості
        Амортизація
        Транспортувальні ролики
        Конструкція
        Портативні
        Тип
        Електричні
        Клас
        Домашні
        Максимальна швидкість
        12 км/год
        Вага
        36 кг
        Дисплей
        Так`},
        {name: 'EnergyFIT EF-U12', description: `Максимальне навантаження
        110 кг
        Особливості
        Компенсатори нерівності підлоги
        Підставка для аксесуарів
        Регулювання кута нахилу
        Транспортувальні ролики
        Конструкція
        Складані
        Тип
        Електричні
        Регулювання кута нахилу
        Електрична`},
        {name: 'FitLogic T102E', description: `Максимальне навантаження
        90 кг
        Особливості
        Амортизація
        Вбудована аудіосистема
        Конструкція
        Портативні
        Тип
        Електричні
        Клас
        Домашні`},
        {name: 'EnergyFIT 815 new (818)',  description: `Максимальне навантаження
        110 кг
        Особливості
        Амортизація
        Підставка для аксесуарів
        Транспортувальні ролики
        Тримач для пляшки
        Тип
        Електричні
        Регулювання кута нахилу
        Механічна
        Клас
        Домашні`}
    ]
}

const dataId = document.querySelectorAll('[data-id]')

dataId.forEach((item)=>{
    item.addEventListener('click', () => {
        const midlleProduct = data[item.dataset.id]
        list.innerHTML = ''
        descriptionThing.innerHTML = ''

        midlleProduct.forEach((i) => {
            const li = document.createElement('li')
            li.append(i.name)
            const ul = document.createElement('ul')
            ul.append(li)
            list.append(ul)

            ul.addEventListener('click', () => {
                descriptionThing.innerHTML = ''
                const li = document.createElement('li')
                li.append(i.description)
                const ul = document.createElement('ul')
                ul.append(li)
                const button = document.createElement('button')
                button.classList.add('btn')
                button.innerText = 'Купити'
                ul.append(button)
                descriptionThing.append(ul)

                button.addEventListener('click', () => {
                    const modal = document.createElement('div')
                    div.append(modal)
                    modal.classList.add('modal')
                    const p = document.createElement('p')
                    p.innerText = 'Товар куплений.'
                    const button = document.createElement('button')
                    button.innerText = 'ok'
                    button.classList.add('button')
                    modal.append(p, button)
                    modal.style.display = 'block'

                    button.addEventListener('click', () => {
                        list.innerHTML = ''
                        descriptionThing.innerHTML = ''
                        modal.style.display = 'none'
                    })
                })
            })
        })
    })
})

