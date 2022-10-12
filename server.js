class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log("El nombre completo es: " + this.nombre + ' ' + this.apellido);
    }
    addMascotas(){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBook(title, autor){
        this.libros.push({title: title, autor: autor})
    }
    getBookNames(){
            this.libros.forEach((libro) => {
                titulosLibros.push(libro.title);
            });
            return console.log(titulosLibros);
    }
}
const titulosLibros= [];
const usuario = new Usuario('Luca', 'Cabrera',[{title: 'Flow', autor:'Mihaly Csikszentmihalyi'}], [{nombre: 'Perro'}, {nombre: 'gato'}])
usuario.addBook('Despierte su gigante interior', 'Tony Robbins');
console.log(usuario);
usuario.getFullName();
usuario.getBookNames();
usuario.countMascotas();