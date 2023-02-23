"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
}
log("dato", "Chanchito feliz");
log("dato", true);
log("dato", 42);
log("dato", {
    id: 1,
    message: "Todo Ok",
});
function fetchData(resource) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${resource}`);
        return response.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield fetchData("/usuario");
        customer.name;
    });
}
//# sourceMappingURL=genericFunctions.js.map