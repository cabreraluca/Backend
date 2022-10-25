const express = require('express');
const app = express();
const PORT = 8080;
const Contenedor = require('./desafio2');
app.get('/', async (req, res) =>{
    res.send('bienvenido, dirijase a /productos o /productorandom')
});
app.get('/productos', async (req, res) =>{
    const contenedor = new Contenedor();
    const allProducts = await contenedor.getAll();
    res.json(allProducts);
});
app.get('/productorandom', async(req, res) => {
    const contenedor = new Contenedor();
    const allProducts = await contenedor.getAll();
    const productoRandom = allProducts[Math.ceil(Math.random() * allProducts.length)];
    res.json(productoRandom);
  });
app.listen(PORT, () =>{
    console.log(`Servidor http escuchando el puerto localhost:${PORT}`)
});
const contenedor = new Contenedor();

