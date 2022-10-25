const fs = require('fs');
class Contenedor{
    constructor(){
        this.file = "./productos.json"
    }
    getAll = async () =>{
        try{
            const ruta = await fs.promises.readFile(this.file, 'utf-8');
            const productos = JSON.parse(ruta);
            return productos;
        }
        catch(e){
            console.log(e)
        }
    } 
    save = async (producto) =>{
        try{
            let productos = await this.getAll();
            let id = productos.length === 0? 1 : productos[productos.length - 1].id + 1;
            producto.id = id;
            productos = [...productos, producto];
            console.log('producto guardado'); 
            await fs.promises.writeFile(this.file, JSON.stringify(productos, null));
        }
        catch(e){
            console.log(e)
        }
    }
    getById = async (id) =>{
        try{
            let productos = await this.getAll();
            const productoFiltrado = productos.find((data) => data.id === id);
            if(productoFiltrado == undefined || productoFiltrado.id !== id){
                console.log('No existe el producto');
            }else{
                console.log(productoFiltrado);
            }
        }
        catch(e){
            console.log(e)
        }
    }

    async deleteById(id) {
        try {
            const productos = await this.getAll();
            const productoEncontrado = productos.find((data) => data.id == id);
            if (productoEncontrado == undefined || productoEncontrado.id !== id) return console.log("el id no existe");
            const productosFiltrados = productos.filter((data) => data.id != id);
            await fs.promises.writeFile(this.file, JSON.stringify(productosFiltrados));
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    }
}
const contenedor = new Contenedor();
module.exports = Contenedor;





