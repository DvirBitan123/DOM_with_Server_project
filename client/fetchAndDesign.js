const root = document.getElementById('root');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
let cardsArr = []

function myCreateElement(type, parent, text = "") {
    const element = document.createElement(type);
    parent.appendChild(element);
    element.textContent = text;
    return element;
};

function cardCreator(dataArr) {
    for (const product of dataArr) {
        const card = document.createElement("div");
        const imgPart = document.createElement("div");
        const imgForMenue = document.createElement("img");
        const namePart = document.createElement("div");
        const dividedLine = document.createElement("div");
        const actPart = document.createElement("div");

        imgForMenue.src = product.image;
        namePart.textContent = product.title;

        card.classList.add("card");
        imgPart.classList.add("imgPart");
        imgForMenue.classList.add("fitImg");
        namePart.classList.add("fitImg");

        cardsArr.push({
            element: card,
            category: product.category
        })

        imgPart.append(imgForMenue);
        card.append(imgPart,namePart,dividedLine,actPart);
        main.append(card);
    }
}

const getAllProducts = () => {
    fetch('http://localhost:3000/api/allProducts')
    .then((data) => data.json())
    .then((products) => cardCreator(products))
}

// const categoryFilter = (categ) => {
//     fetch(`http://localhost:3000/api/productsByCategory/${categ}`)
//     .then((data) => data.json())
//     .then((products) => cardCreator(products))
// }

const CategoryButton = (categ) => {
    for (const card of cardsArr) {
        card.element.style.display = 
            card.category !== categ ? "none" : "block";
    }
}

const showAllProd = () => {
    for (const card of cardsArr) {
        card.element.style.display = "block";
    }
}

const CategorySwitchCreator = () => {
    const switchContainer = myCreateElement("div", header);
    const buttonsContainer = myCreateElement("div", switchContainer);
    const allProdBtn = myCreateElement("div", buttonsContainer, "All Products");
    const menButton = myCreateElement("div", buttonsContainer, "Men");
    const womenButton = myCreateElement("div", buttonsContainer, "Women");
    const jeweleryButton = myCreateElement("div", buttonsContainer, "Jewelery");
    const ElectroButton = myCreateElement("div", buttonsContainer, "Electronics");

    const searchContainer = myCreateElement("div", switchContainer);
    const serchInput = myCreateElement("input", searchContainer);

    switchContainer.classList.add("switchContainer");
    buttonsContainer.classList.add("flex-row");
    allProdBtn.classList.add("categoryBtn");
    menButton.classList.add("categoryBtn");
    womenButton.classList.add("categoryBtn");
    jeweleryButton.classList.add("categoryBtn");
    ElectroButton.classList.add("categoryBtn");

    allProdBtn.addEventListener("click",() => showAllProd());
    menButton.addEventListener("click",() => CategoryButton("men's clothing"));    
    womenButton.addEventListener("click",() => CategoryButton("women's clothing"));    
    jeweleryButton.addEventListener("click",() => CategoryButton("jewelery"));    
    ElectroButton.addEventListener("click",() => CategoryButton("electronics"));    
}

window.addEventListener('load', getAllProducts())
window.addEventListener('load', CategorySwitchCreator())




