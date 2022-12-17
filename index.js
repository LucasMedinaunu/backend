const { Bebida1, Bebida2, Bebida3} = require('./data')

class ProductManager{
  constructor(){
    this.products = [];
    this.product = this.product;
  }
  
  getProducts(){
    return this.products;
  }

  addProduct(product){
    if (this.getProducts().find((p) => p.code == product.code)) return console.log(`Product with code ${product.code} already exists!$`)
     else product.id = this.getProducts().length + 1; this.products.push(product)
  }

  // getProductById(product) {
    // if (this.getProducts().find((p) => p.id == product.id)) return console.log(`Product with id ${product.id} already exists!$`)
    //  else product.code = this.getProducts().length + 1; this.products.push(product)
  // } 
 
}

class Product extends ProductManager{
  constructor(title, description, price, thumbnail, code, stock) {
    super()
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

const newProductManager = new ProductManager()

//console.log(newProductManager.getProducts())

newProductManager.addProduct(Bebida1)
console.log(newProductManager.getProducts())