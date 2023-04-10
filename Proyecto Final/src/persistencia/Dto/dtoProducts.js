export default class ProductsDTO{
    constructor({name,description,price,stock,categoryId}){
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.categoryId = categoryId
    }
}

export const productsDto = (data) => {
    if(Array.isArray(data)){
        return data.map(product => new ProductsDTO(product))
    }else{
        return new ProductsDTO(data)
    }
}