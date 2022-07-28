const generateRandomArray = require("./utils/generateRandomArray.js")
/*
  Description:
  - Cree une fonction qui compte le nombre d'element present dans un tableau avec un return de ce nombre
  nom de fonction: countInArray
  parametres: array, elementToCount

  exemple: combien il y a t il de 6 dans le tableau
*/

//Tableau a utiliser
const arr = [1,4,5,5,2,5,7,3,1,3,4,6,6,4,2,5,7,34,2,56]



const countInArray = (array, elementToCount) => {
  let foundElement = array.find(element => elementToCount === elementToCount);

  return foundElement;

}

let result = countInArray(arr, 6);

console.log(result);
