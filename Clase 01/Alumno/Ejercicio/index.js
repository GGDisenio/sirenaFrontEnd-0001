
function User (firstName, age, isAdmin = false, telephones = []){
    this.age = age

    this.addTelephone = function (phone) {
        telephones.push(phone)
        
    }    
    this.changeAge = function (age){
        this.age = age   

    }

    this.showAll = function(){
        console.log(`Mi nombre es ${firstName}, mi edad es ${this.age}, mis telefonos son ${telephones.join(' / ')}.`)
    }

}

const user = new User('Gus',24, true, [1234])

user.addTelephone(8888)

user.changeAge(25)

user.showAll()