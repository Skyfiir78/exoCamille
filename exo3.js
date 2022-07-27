/*
  Description:
    Cree une fonction qui prend en parametre 1 objet, 1 valeur et une 1 string

    Nomme la comme tu veut

    cette fonction va modifier la valeur contenu dans un objet, la string va te servire a cibler quelle est la propriete a modifier

    exemple d'utilisation:
      nomDelaFonction(product, "indisponible", "status")
*/

//L'objet a utiliser
const product = {
  id: 343,
  name: "ampoule",
  prix: 2.99,
  status: "disponible"
}

const modifyObjectValue = (a,b,c) => {

  let object = a;

  object[c] = b;

  return object;


}

let modifyProduct = modifyObjectValue(product,'coucou', 'name');

console.log(modifyProduct);

//OK
