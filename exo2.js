/*
  Description:

	On va cree une fonction nommer modifyArrayByIndex qui modifie le contenu d'un array a un index precis

	- Cree une fonction nommer modifyArray qui prend 3 parametres:
	  1. le tableau a modifer -> type array
	  2. l'index a modifer -> type interger
	  3. la valeur en question (n'importe quelle type de valeur est accepter)

	la fonction renvoi le tableau modifier

	exemple d'utilisation de la fonction:
	  modifyArrayByIndex(arr, 3, "bonjour")

	PS: Pas besoin de boucle
*/

//Le tableau qui doit etre passer dans ta fonction. Une fois ta fonction coder utilise ta fonction pour corriger la faute de frappe a l'index 1
const arr = ["Hello", "Bongour", "Buenos dias", "Hey"]



const modifyArrayByIndex = (a, b,c) => {

	let newArray = a;

	let i = b;

	newArray[i] = c;

	return newArray;

}

let arrayModify = modifyArrayByIndex(arr, 1, 'Bonjour');

console.log(arrayModify);