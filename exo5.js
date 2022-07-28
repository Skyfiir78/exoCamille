/*
  Description: On va reprendre la problematique de ton projet en plus simplifier pour commencer
  tu a un tableau d'objet qui sont des produit et de l'autre coter un objet contenant l'id du produit, sa couleur et sa quantiter
  tu va devoir recuperer la bonne data pour remplir ton produit des donnees manquante
*/
/*
  Astuce essai d'utilier le spread operator: un exmple ci dessous

  const obj1 = { x: 1, y: 2 };
  const obj2 = { z: 3 };

  // add obj1 and obj2  to obj3
  const obj3 = {...obj1, ...obj2};

  console.log(obj3); // {x: 1, y: 2, z: 3}

*/

const products = require("./utils/data/products") // Les produits

const storedProducts = { //L'objet a completer
  id: 3,
  color: "red",
  quantity: 3
}
// A toi de jouer ma patate <3







const finalProduct = {
  ...storedProducts,

  ...products[2],

}

console.log(finalProduct);