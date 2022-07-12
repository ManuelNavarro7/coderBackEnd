/*
let mostrarLista = (lista) => {
  let listaVisual = lista.forEach((element) => {
    console.log(element);

    if (element === "Fideos") {
      carro.push(element);
    }
  });
  const productoById = lista.find((el) => (el.lista = "Arroz"));

  carro.push(productoById);
  console.log(carro);
};
*/
let lista = ["Arroz", "Fideos", "Huevos"];

let carro = [];
//mostrarLista(lista);
//console.log("Hola");

//----------De la calse

function mostrarListaClase(lista) {
  if (lista.length === 0) {
    console.log("No hat nada");
  } else {
    console.log(`Los productos de la lista son ${lista}`);
    let r = lista.find((element) => element == "Huevos");
    console.log(r);
  }
}

mostrarListaClase(lista);

// Ej3 retornar una funcion anonima

let ListaMultiplicar = (numero1) => {
  return function (numero2) {
    return numero1 * numero2;
  };
};

const duplicar = ListaMultiplicar(2);
const triplicar = ListaMultiplicar(3);

console.log(duplicar(8));

//Clases---------

class Contador {
  static cuentaGlobal = 0; //para que varie cuando aumente los contadores

  constructor(responsable, nombre) {
    this.responsable = responsable;
    this.nombre = nombre;
    this.cuentaIndividual = 0;
  }
  obtenerResponsble() {
    return this.responsable;
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual;
  }
  obtenerCuentaGobal() {
    return Contador.cuentaGlobal; //De esta manera accedemos a la cuenta global
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
}

const responsable1 = new Contador("Gerente", "Mauricio");
const responsable2 = new Contador("Vp", "Federico");

responsable1.contar();
responsable2.contar();

console.log(responsable1.obtenerCuentaIndividual());
console.log(responsable2.obtenerCuentaIndividual());
console.log(responsable2.obtenerCuentaGobal());

console.log(responsable2);

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
    this.Usuario = {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Libros: this.libros,
      Mascotas: this.mascotas,
    };
  }

  getFullName() {
    console.log(this.nombre, this.apellido);
  }

  addMascota(Mascota) {
    this.mascotas.push(Mascota);
    return console.log(this.mascotas);
  }
  countMascotas() {
    let numeroDeMascotas = this.mascotas.length;
    console.log(numeroDeMascotas);
  }

  addBook(TituloLibro, AutorDelLibro) {
    this.libros.push({ Titulo: TituloLibro, Autor: AutorDelLibro });

    console.log(`Ud agrego ${TituloLibro} ${AutorDelLibro}`);
  }
  getBookNames() {
    console.log(this.libros);
  }

  UsuarioInfo() {
    console.log(this.Usuario);
  }
}

const Manuel = new Usuario("Manuel", " Navarro");

Manuel.getFullName();
Manuel.addMascota("Loro");
Manuel.addMascota("Perro");
Manuel.countMascotas();
Manuel.addBook("La Odisea", "Homero");
Manuel.getBookNames();
Manuel.UsuarioInfo();
