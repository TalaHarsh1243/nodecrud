const express = require('express');
const Sequelize = require('sequelize');

const productRoutes = require('./routes/productRoute');
const app = express();
const PORT = 3000;

app. use(express.json);
app.use('/products',productRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});