const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}


function ShowAll(producstArray) {
    let myLi = ''

    producstArray.forEach((product) => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>
              `

    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dar 10% de desconto
    }))

    ShowAll(newPrices)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
            <p>O valor total dos intens é <br> R$ ${formatCurrency(totalValue)}</p>
    </li>

    `
}

function filterAllItems() {
    const filterJustVagan = menuOptions.filter((product) => product.vegan)

    ShowAll(filterJustVagan)
}


buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItems)
