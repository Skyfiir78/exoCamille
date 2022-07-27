/*
  Description:
  - Cree une fonction qui compte le nombre d'element present dans un tableau avec un return de ce nombre
  nom de fonction: countInArray
  parametres: array, elementToCount

  exemple: combien il y a t il de 6 dans un tableau
*/

const generateRandomArray = () => {
  let arr = []
  for (var i = 0; i < 10000000; i++) {
    arr[i] = Math.trunc(Math.random() * 1000)
  }
  return arr
}



//Tableau a utiliser
const arr = generateRandomArray()
