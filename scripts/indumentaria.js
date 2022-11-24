const URL = '/db/db.json';

const getData = ()=> {
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        loadList(data.products)
    })
    .catch(err => console.error(err))
}


const loadList = (products)=>{
    const productList = document.getElementById("product-list");
    products.forEach(e => {
        const card = document.createElement("div");
        card.classList.add("product-list__product-card");
        card.innerHTML += productCard(e);
        productList.appendChild(card);
    });

}

const productCard = (data) => {
    const { url, name, id, price, description } = data
    return `<div class="product-list__product-card__title">
                <img alr="${name}" src="${url}"/>
                <h2>${name}<h2>
            </div>
            <div class="product-list__product-card__details">
                <h3 class="product-list__product-card__details__price"> $ ${price}</h3>
                <p class='product-list__product-card__details__description'>${description}</p>
            </div>`
}

loadList(getData());