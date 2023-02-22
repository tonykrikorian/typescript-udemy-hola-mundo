/**
 * El index signature permite agregar propiedades de forma dinamica a un objeto tipado
 */

class DiccionarioUsuarios {
  [id: string]: string;
}

const diccionario = new DiccionarioUsuarios();
diccionario["1a"] = "ususario1";
diccionario["2a"] = "ususario2";
diccionario["3a"] = "ususario3";
diccionario["name"] = "Tony";
diccionario["email"] = "tony.krikorian@anschile.cl";

console.log(diccionario);
