export default class CategoryDTO{
    constructor({name, description}){
        this.name = name
        this.description = description
    }
}

export const categorysDto = (data) => {
    if(Array.isArray(data)){
        return data.map(category => new CategoryDTO(category)) 
    }else{
        return new CategoryDTO(data)
    }
}