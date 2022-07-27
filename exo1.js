/*
  Description:
	 - Cree une fonction nommer reverseArray qui prend 1 parametre de type array (tableau)
	 - Cette fonction doit retourner le tableau a l'envers
	   exemple:
		[1, 2, 3, 4] -> [4, 3, 2, 1]
	- Si le tableau n'est pas un array la fonction renvoi false

	Boucle for obligatoire !
*/

const array = [1, 2, 3, 4];

const reverseArray = (t) => {

	let newArray = [];

	if (!Array.isArray(t)) {
		return false;
	}

	for(let i = t.length -1; i >= 0; i--){
		newArray.push(t[i]);
	}
	return newArray;
};



const fu = (nb) => {
	if (nb >= 18) {
		return true
	}
	return false
}

let fuResult = fu(18)

console.log(fuResult)

//OK
