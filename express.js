const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Sample product data (this would typically come from a database)
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 }
];

// Get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Handle orders
app.post('/api/order', (req, res) => {
    const order = req.body;
    // Process the order (e.g., save to database, send confirmation email)
    res.status(201).send('Order received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
