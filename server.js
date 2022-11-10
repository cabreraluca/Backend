const express = require('express');
const app = express();
const { Router } = express;
const PORT = 8080;
const Contenedor = require('./desafio2');
const routerProducts = Router();
const bodyParser = require("body-parser");
app.set('views', './views');
app.set()
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use("/api/products", routerProducts);
app.get('/productos', async (req, res) =>{
    const contenedor = new Contenedor();
    const allProducts = await contenedor.getAll();
    res.json(allProducts);
});
app.get('/productsForm', async (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});
app.post("/productsForm", (req, res)=>{
    const {body} = req;
    contenedor.save(body);
    res.send('thank you');
})
routerProducts.get('/', async (req, res)=>{
    const products = await contenedor.getAll();
    if(products != []){
        res.json(products); 
    }else{
        res.json({error: true, msg: "No hay productos"})
    }
    
})
routerProducts.get("/:id", (req, res)=>{
    const {id} = req.params;
    const products = contenedor.getAll();
    const productoFiltrado = contenedor.getById(parseInt(id));
    if (products.length < id){
        res.json({
            error: "el producto no fue encontrado",
        })
    }
    else{
        res.json(productoFiltrado);
    }
});
routerProducts.delete("/:id", async (req, res)=>{
    const {id} = req.params;
    const products = await contenedor.getAll();
    const productoFiltrado = await contenedor.getById(parseInt(id))
    if (id > products.length){
        res.json({
            error: "el producto no existe",
            productList: products,
        });
    }
    else{
        res.json({
            msg: "producto eliminado",
            productList: productoFiltrado,
        })
    }
});
routerProducts.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, precio, thumbnail} = req.body;
        const guardado = contenedor.updateById(id, titulo, precio, thumbnail);
        console.log(guardado)
        if (guardado) {
            res.send("Producto modificado")
        } else{
            res.send("Producto no encontrado")
        }  
    } catch (error) {
        console.log("error")
    }
});
app.listen(PORT, () =>{
    console.log(`Servidor http escuchando el puerto localhost:${PORT}`)
});
const contenedor = new Contenedor();

