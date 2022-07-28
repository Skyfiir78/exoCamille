const generateRandomArray = require("./utils/generateRandomArray.js")
/*
  Description:
  - Cree une fonction qui compte le nombre d'element present dans un tableau avec un return de ce nombre
  nom de fonction: countInArray
  parametres: array, elementToCount

  exemple: combien il y a t il de 6 dans le tableau
*/

//Tableau a utiliser
const arr = generateRandomArray()



const countInArray = (array, elementToCount) => {

  let newArray = array;

  // let elementToCount = e;

  let foundElement = newArray.find(element => elementToCount === elementToCount);

  return foundElement;

}

let result = countInArray(arr, 9);

console.log(result);
