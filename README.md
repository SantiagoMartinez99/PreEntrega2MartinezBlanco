# E-commerce tienda venta de ropa

## Curso CoderHouse

### Profesor: Omar Jesús Maniás

### Alumno: David Santiago Martinez Blanco

---

Descripción del proyecto
En este avance se muestra el uso basico de los condicionales, funciones y ciclos mostrados en clase

Debido a que aun no se llega al tema de matrices/diccionarios se decide mantener temporalmente el codigo de la siguiente manera:

```javascript
const maleTee = 10;
const maleTeeType2 = 5;
const maleJeans = 12;
const maleBlueJeans = 10;
const sneakers = 15;
```

y se realiza la simulación de venta de la siguiente forma:

```javascript
function buyItemsMale(itemToBuy, cuantity) {
  switch (itemToBuy) {
    case "1":
      totalSale = maleTee * Number(cuantity);
      break;
    case "2":
      totalSale = maleTeeType2 * Number(cuantity);
      break;
    case "3":
      totalSale = maleJeans * Number(cuantity);
      break;
    case "4":
      totalSale = maleBlueJeans * Number(cuantity);
      break;
    case "5":
      totalSale = sneakers * Number(cuantity);
      break;

    default:
      break;
  }
  printTotal(totalSale);
}
```

#
