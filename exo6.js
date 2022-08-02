/*
  Description:
  On va reprendre la problematique de ton projet

  tu a un tableau d'objet qui sont des produit et de l'autre coter un tableau d'objets contenant les id de produit faisant reference a ton localstorage

  tu va devoir completer ton tableau provenant du localstorage avec les data de produit

  tu aura au moin une boucle for
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

const storedProducts = [ //Le Tableau a completer
  { id: 1},
  { id: 2},
  { id: 3},
  { id: 4},
  { id: 5},
  { id: 6},
  { id: 7},
]
