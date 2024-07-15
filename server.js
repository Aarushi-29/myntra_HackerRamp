const express = require('express');
const app = express();
const port = 9090;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample products data
const products = [
    {
      id: 601,
      name: "Floral Red Shirt",
      description: "Full Length Sleeve",
      price: 1200,
      brandId: 901
    },
    {
      id: 602,
      name: "Red Shirt with Blue Lines",
      description: "Full Length Sleeve",
      price: 1700,
      brandId: 902
    },
    {
      id: 603,
      name: "White Chikankari Cut Sleeves Kurta",
      description: "Elegant white kurta with chikankari cut sleeves.",
      price: 2000,
      brandId: 903
    },
    {
      id: 604,
      name: "White Printed Floral Dress",
      description: "A white dress with floral prints.",
      price: 2500,
      brandId: 904
    }
  ];

// Endpoint to get all products
app.get('/myntra/products', (req, res) => {
  res.json(products);
});

// Endpoint to get product by ID
app.get('/myntra/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Endpoint to search products by description keyword
app.get('/myntra/products/search', (req, res) => {
  const query = req.query.description.toLowerCase();
  const filteredProducts = products.filter(p => p.description.toLowerCase().includes(query));
  res.json(filteredProducts);
});

// Start the server
app.listen(port, () => {
  console.log(`Myntra API server running at http://localhost:${port}`);
});
