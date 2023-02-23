/**
 * Generics: Permite cambiar los tipos de datos en tiempo de ejecución
 */

type LogMessage = {
  id: number;
  message: string;
};

type Customer = {
  id: number;
  name: string;
};
function log<T>(a: string, b: T): void {
  console.log(a, b);
}

log<string>("dato", "Chanchito feliz");
log<boolean>("dato", true);
log<number>("dato", 42);
log<LogMessage>("dato", {
  id: 1,
  message: "Todo Ok",
});

async function fetchData<T>(resource: string): Promise<T> {
  const response = await fetch(`${resource}`);
  return response.json();
}

async function main() {
  const customer = await fetchData<Customer>("/usuario");
  customer.name;
}
