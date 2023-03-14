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
    if (!xxxxxx.title || !xxxxxx.description || !xxxxxx.price ||

      !xxxxxx.thumbnail || !xxxxxx.code || !xxxxxx.stock) {

    throw new Error('Todos los campos son obligatorios');

  }
     else product.id = this.getProducts().length + 1; this.products.push(product)
  }

  getProductById(id) {

    const xxxxx = this.getProducts().find((p) => p.id == id)



    if (!xxxxx) return console.log(`Product with id ${id} already exists!$`)

     else return xxxxx 
 
}

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