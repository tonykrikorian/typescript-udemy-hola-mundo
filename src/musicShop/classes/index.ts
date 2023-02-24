export class Product {
  public id: number = 0;

  constructor(
    public name: string,
    public sku: string,
    public brand: string,
    public price: number
  ) {}
}

export class Category {
  public id: number = 0;
  public products: Product[] = [];

  constructor(public name: string) {}

  addProduct(product: Product | Product[]): void {
    if (product instanceof Product) this.products.push(product);
    if (Array.isArray(product)) this.products = product;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((x) => x.id !== id);
  }

  getProducts(): Product[] {
    return this.products;
  }
}

const guitar = new Product("Guitarra electrica", "fd345", "Fender", 2000);
const synth = new Product(
  "Sintetizador mini Freak V",
  "yyttt",
  "Arturia",
  3000
);
const drums = new Product("Bateria Tama xs2000", "vvvccxxd", "Tama", 10000);

const musicalInstruments = new Category("musicalInstruments");
musicalInstruments.addProduct(guitar);
musicalInstruments.addProduct(synth);
musicalInstruments.addProduct(drums);

const smartPhones = new Category("smartPhones");

const iphone = new Product("iPhone", "fd345", "Apple", 2500);
const samsung = new Product("S8", "yyttt", "Samsung", 3000);
const xiaomi = new Product("POCO M3", "vvvccxxd", "Xiaomi", 10000);

const smartPhonesProducts = [iphone, samsung, xiaomi];

smartPhones.addProduct(smartPhonesProducts);

console.log({ musicalInstruments, smartPhones });
