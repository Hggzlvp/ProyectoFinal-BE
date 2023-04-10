export default class CartsDTO{
    constructor({_id,timestap,productos}){
        this.id = _id
        this.timestap = timestap
        this.productos = productos
    }
}

export const cartsDto = (data) => {
    if(Array.isArray(data)){
        return data.map(cart => new CartsDTO(cart))
    }else{
        return new CartsDTO(data)
    }
}
