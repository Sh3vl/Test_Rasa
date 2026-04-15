const btnCardsEl = document.getElementById('btnCards')
const bestCardEl = document.getElementById('bestCard-box')
const cardEl = document.getElementById('card-box')

let isOpen = true;

function renderBestCards() {
    bestCardEl.innerHTML = "";

    DataBestCar.forEach(item => {
        const bestCardBlock = document.createElement("div");
        bestCardBlock.className = "bestCard";

        bestCardBlock.innerHTML = `
    <div class="bestCard-left">
        <p class="bestOffer">${item.bestOffer}</p>
        <h2 class="nameCar">${item.name}</h2>
        <p class="descCar">${item.description}</p>
        <p class="priceCar">${item.price} ₽</p>
        <a href="${item.link}" class="linkMoreInfo">Подробнее
        <img src="media/img/arrow-left.svg" alt=">"></a>
    </div>

    <div class="bestCard-right">
        <img class="bestCard__img" src="${item.carImg}" alt="car">
        <img class="bestCard__buttonArrow" src="${item.arImg}" alt=">">
    </div>
    `;

        bestCardEl.appendChild(bestCardBlock);
    });

};

function renderCards() {
    cardEl.innerHTML = "";

    DataCar.forEach(item => {
        const cardBlock = document.createElement("div");
        cardBlock.className = "card";

        cardBlock.innerHTML = `
            <img src="${item.carImg}" alt="car" class="card__img">
            <h4 class="car-name">${item.name}</h4>
            <p class="car-city">${item.city}</p>

            <div class="card-down">
                <p class="car-price">${item.price} ₽</p>
                <a href="${item.link}" class="card__link-moreInfo">Подробнее</a>    
            </div>
        `;

        cardEl.appendChild(cardBlock);
    });
}

renderCards();
renderBestCards();

console.log("cardEl", cardEl);
console.log("DataCar", DataCar);

btnCardsEl.addEventListener('click', () => {
    isOpen = !isOpen;
    bestCardEl.style.display = isOpen ? "" : "none";
    cardEl.style.display = isOpen ? "" : "none";

    btnCardsEl.textContent = isOpen ? "Свернуть список машин ^" : "Открыть список машин";
});
