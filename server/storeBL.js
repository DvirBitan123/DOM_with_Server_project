const DAL = require('./storeDAL');

const allProducts = () => {
    const products = DAL.getProducts();
    return products
}

const categoryFilter = (categ) => {
    const products = DAL.getProducts();
    let filteredProducts = 
    products.filter((product) => product.category === categ);
    return filteredProducts
}

module.exports = {allProducts, categoryFilter}