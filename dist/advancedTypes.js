"use strict";
let puntaje = 98;
puntaje = "Chanchito feliz";
let animal = {
    id: 1,
    state: "",
};
function addTwo(n) {
    if (typeof n === "string")
        return parseInt(n) + 2;
    return n + 2;
}
console.log(addTwo("3"));
const product = {
    createdAt: "",
    modifiedAt: "",
    name: "",
};
const deFibo = 1;
function setSize(size) {
    return size;
}
setSize("xl");
function toNumber(n) {
    if (!n)
        return 0;
    return parseInt(n);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0)
        return null;
    return {
        id: 1,
        createdAt: new Date(),
    };
}
const user = getUser(-1);
console.log("usuario: ", user === null || user === void 0 ? void 0 : user.createdAt);
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
const difficulty = null;
const player = {
    username: "Chanchito feliz",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 2,
};
console.log(player);
const element = null;
const element2 = element;
function lala(x) {
    if (typeof x === "string") {
        x.length;
    }
    if (typeof x === "number") {
        x.toFixed(2);
    }
}
function procesa(algo) {
    algo.haceCosas();
    algo.haceOtrasCosas();
}
function procesa2(algo) {
    if (typeof algo === "number")
        return algo.toFixed(2);
    if (typeof algo === "string")
        return algo.toUpperCase();
    if (algo instanceof String)
        return algo.charAt(2);
    return {};
}
//# sourceMappingURL=advancedTypes.js.map