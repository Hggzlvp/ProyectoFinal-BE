export default class UserDTO{
    constructor({username,password,email,number,admin}){
       this.username = username
       this.password = password
       this.email = email
       this.number = number
       this.admin = admin
    }
}

export const usersDto = (data) => {
    if(Array.isArray(data)){
        return data.map(user => new UserDTO(user))
    }else{
        return new UserDTO(data)
    }
}