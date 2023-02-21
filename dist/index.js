"use strict";
let mensaje = "Hola mundo";
mensaje = "Chanchito feliz";
console.log(mensaje);
function chanchitoFeliz(chanchitoName) {
    return chanchitoName;
}
const animales = [];
const animals = ["Caballo", "Gato"];
let tupla = [1, "Chanchito Feliz"];
let tuplas = [2, ["Chanchito", "Feliz"]];
tuplas[0].valueOf();
tuplas[1].filter(() => "Chanchito".toLocaleLowerCase());
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "S";
    Sizes["Medium"] = "M";
    Sizes["Large"] = "L";
    Sizes["ExtraLarge"] = "XL";
})(Sizes || (Sizes = {}));
let errorState = 3;
const obj = {
    id: 1,
    name: "Chanchito feliz",
    size: Sizes.Medium,
    address: {
        country: 3,
        street: "Siempre viva",
        number: 12,
    },
};
const persons = [];
const fn = (edad) => {
    if (edad > 17)
        return "Puees pasar";
    return "No puedes pasar";
};
function ageValidtion(age) {
    if (age > 17)
        return "Puedes pasar";
    return "No puedes pasar";
}
function validateUser(age) {
    if (age <= 17)
        throw new Error("Eres menor de edad");
}
//# sourceMappingURL=index.js.map