
class Item {
  constructor(id, name, size, description, price, genre, units) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.description = description;
    this.price = price;
    this.genre = genre;
    this.units = units;
  }
}

let maleClothes = [
  {
    id: 1,
    name: "Camiseta negra",
    size: "S",
    description:
      "Camisa de corte estándar en mezcla de algodón y lino. Modelo con cuello inglés, tapeta clásica y canesú en la espalda.",
    price: 10,
    genre: "M",
    units: 5,
  },
  {
    id: 2,
    name: "Camiseta negra",
    size: "M",
    description:
      "Camisa de corte estándar en mezcla de algodón y lino. Modelo con cuello inglés, tapeta clásica y canesú en la espalda.",
    price: 10,
    genre: "M",
    units: 5,
  },
  {
    id: 3,
    name: "Camiseta negra",
    size: "L",
    description:
      "Camisa de corte estándar en mezcla de algodón y lino. Modelo con cuello inglés, tapeta clásica y canesú en la espalda.",
    price: 10,
    genre: "M",
    units: 5,
  },
];

let femaleClothes = [
  {
    id: 1,
    name: "Pantalones azules",
    size: "S",
    description:
      "Jeans de cinco bolsillos en denim con estructura, ligeramente elástico para una comodidad óptima.",
    price: 15,
    genre: "F",
    units: 5,
  },
  {
    id: 2,
    name: "Pantalones azules",
    size: "M",
    description:
      "Jeans de cinco bolsillos en denim con estructura, ligeramente elástico para una comodidad óptima.",
    price: 15,
    genre: "F",
    units: 5,
  },
  {
    id: 3,
    name: "Pantalones azules",
    size: "L",
    description:
      "Jeans de cinco bolsillos en denim con estructura, ligeramente elástico para una comodidad óptima.",
    price: 15,
    genre: "F",
    units: 5,
  },
];
let carrito = [];
let totalSale = 0;

function welcome() {
  let categoryOption = "";
  categoryOption = prompt(
    "¡Bienvenido a nuestra tienda en línea!, Por favor elije la categoria la cual desees comprar: \n 1. Ropa para hombre \n 2. Ropa para mujer  \n 3. Ingresar nueva prenda(Modo administrador) \n 4. Salir"
  );
  while (categoryOption !== "4") {
    switch (categoryOption) {
      case "1":
        maleItems();
        break;
      case "2":
        femaleItems();
        break;
      case "3":
        addItems();
        break;
      case "4":
        alert("¡Gracias por visitarnos!");
        break;
      default:
        alert("La opción elegida no es valida, por favor intente nuevamente.");
        welcome();
        break;
    }
  }
}

function maleItems() {
  console.log(maleClothes);
  let mensaje = "Elija una prenda de la siguiente lista:\n\n";
  for (let i = 0; i < maleClothes.length; i++) {
    mensaje += maleClothes[i].id + ". Producto: " + maleClothes[i].name + "\n";
    mensaje += "Talla: " + maleClothes[i].size + "\n";
    mensaje += "Descripción: " + maleClothes[i].description + "\n";
    mensaje += "Precio: $" + maleClothes[i].price + "\n";
    mensaje += "Unidades disponibles: " + maleClothes[i].units + "\n\n";
  }

  let optionSelected = "";
  optionSelected = prompt(
    "Estos son los productos disponibles, para elegir alguno de estos escriba el numero del producto. \n \n " +
      mensaje
  );
  if (Number(optionSelected) > maleClothes.length) {
    alert("La opción elegida no es valida, por favor intente nuevamente.");
    maleItems();
  } else {
    if (maleClothes[Number(optionSelected - 1)].units < 1) {
      alert("Producto agotado, intenta comprar otra prenda.");
      maleItems();
    } else {
      maleClothes[Number(optionSelected - 1)].units =
        maleClothes[Number(optionSelected - 1)].units - 1;
      addToCart(maleClothes[Number(optionSelected - 1)]);
    }
  }
}

function femaleItems() {
  let mensaje = "Elija una prenda de la siguiente lista:\n\n";
  for (let i = 0; i < femaleClothes.length; i++) {
    mensaje +=
      femaleClothes[i].id + ". Producto: " + femaleClothes[i].name + "\n";
    mensaje += "Talla: " + femaleClothes[i].size + "\n";
    mensaje += "Descripción: " + femaleClothes[i].description + "\n";
    mensaje += "Precio: $" + femaleClothes[i].price + "\n";
    mensaje += "Unidades disponibles: " + femaleClothes[i].units + "\n\n";
  }

  let optionSelected = "";
  optionSelected = prompt(
    "Estos son los productos disponibles, para elegir alguno de estos escriba el numero del producto. \n \n " +
      mensaje
  );
  if (Number(optionSelected) > femaleClothes.length) {
    alert("La opción elegida no es valida, por favor intente nuevamente.");
    maleItems();
  } else {
    femaleClothes[Number(optionSelected - 1)].units =
      femaleClothes[Number(optionSelected - 1)].units - 1;
    addToCart(femaleClothes[Number(optionSelected - 1)]);
  }
}

function addToCart(producto) {
  let mensaje = "";
  carrito.push(producto);
  console.log(carrito);
  totalSale = totalSale + Number(carrito[carrito.length - 1].price);
  for (let i = 0; i < carrito.length; i++) {
    mensaje += carrito[i].id + ". Producto: " + carrito[i].name + "\n";
    mensaje += "Talla: " + carrito[i].size + "\n";
    mensaje += "Descripción: " + carrito[i].description + "\n";
    mensaje += "Precio: $" + carrito[i].price + "\n";
  }

  let elegircarrito = prompt(
    "El total de su compra es: $" +
      totalSale +
      " \n Su carrito tiene los siguientes items: \n \n" +
      mensaje +
      "\n 1. Seguir comprando \n 2. Realizar compra \n 3. Salir"
  );
  while (
    elegircarrito !== "1" ||
    elegircarrito !== "2" ||
    elegircarrito !== "3"
  ) {
    switch (elegircarrito) {
      case "1":
        welcome();
        break;
      case "2":
        alert(
          "Su compra ha sido realizada satisfactoriamente, gracias por confiar en nosotros. Oprima f5 para reingresar a la tienda."
        );
        break;
      case "3":
        alert(
          "¡Gracias por visitarnos!. Oprima f5 para reingresar a la tienda."
        );
        break;
      default:
        alert("La opción elegida no es valida, por favor intente nuevamente.");
        break;
    }
  }
}

function addItems() {
  let name = prompt("Por favor digite el nombre del producto");
  let size = prompt("Por favor digite la talla del producto(S,M,L,XL,XXL)");
  let description = prompt("Por favor digite la descripción  del producto");
  let price = prompt(
    "Por favor digite el precio del producto (no agregue ningun signo de $, solo unidades)"
  );
  let genre = prompt("Por favor digite el genero del producto (M/F)");
  let units = prompt("Por favor digite las unidades del producto a ingresar");
  if (genre == "M" || genre == "m") {
    let newId = maleClothes.length + 1;
    const newItem = new Item(
      newId,
      name,
      size,
      description,
      price,
      genre,
      units
    );
    maleClothes.push(newItem);
    console.log(maleClothes);
  }
  if (genre == "F" || genre == "f") {
    let newId = femaleClothes.length + 1;
    const newItem = new Item(
      newId,
      name,
      size,
      description,
      price,
      genre,
      units
    );
    femaleClothes.push(newItem);
  }
  alert("Su producto se ha creado satisfactoriamente");

  welcome();
}

welcome();
