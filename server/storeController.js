const BL = require('./storeBL');

const allProducts = (req, res) => {
    const products = BL.allProducts();
    res.send(products)
}

const filteredProducts = (req, res) => {
    const onlyProducts = BL.categoryFilter(req.params.category);
    res.send(onlyProducts)
}

module.exports = {allProducts, filteredProducts}