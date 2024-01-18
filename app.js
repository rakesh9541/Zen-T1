const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

async function fetchAndSortProducts() {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const data = await response.json();
    return Object.values(data.products).sort((a, b) => b.popularity - a.popularity);
}

app.get('/products', async (req, res) => {
    try {
        const products = await fetchAndSortProducts();
        res.json(products);
    } catch (error) {
        res.status(500).send("Error fetching products");
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000`);
});

