class User {
    constructor(firstName, lastName, dni, isAdmin = false, telephone = []) {
        this._firstName = firstName
        this._lastName = lastName
        this._dni = dni
        this._isAdmin = isAdmin
        this._telephone = telephone
    }
    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get dni() {
        return this._dni
    }

    get isAdmin() {
        return this._isAdmin
    }

    get telephone() {
        return this._telephone
    }

    set firstName(firstName) {
        this._firstName = firstName
    }

    set lastName(lastName) {
        this._lastName = lastName
    }

    set dni(dni) {
        this._dni = dni
    }

    set isAdmin(isAdmin) {
        this._isAdmin = isAdmin
    }

    set telephone(telephone) {
        this._telephone.push({
            number: telephone,
            isMobile: telephone.number.startsWith(+549)
        })
    }

    showall(){
        return `Mi nombre es ${this._firstName}, mi apellido es ${this._lastName}, DNI ${this._dni} y mis telefonos son ${this._telephone.join(' / ')} `
    }
// Mi nombre es Juan, tengo 178 años y mis telefonos son 1234 / 5678 / 9101`.
}

var studentsList = [
    {
      firstName: 'Mercedes',
      lastName: 'Baylac',
      dni: 54353353,
      telephones: [ { number: +54912345678, isMobile: true }, { number: +54987654321, isMobile: true } ]
    },
    {
      firstName: 'Julian',
      lastName: 'Bonpland',
      dni: 54533343,
      telephones: [ { number: +5478987865, isMobile: false }, { number: +54987654321, isMobile: true } ]
    },
    { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
    { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
    {
      firstName: 'Barbara',
      lastName: 'Pavan',
      dni: 54357512,
      telephones: [ { number: +54936473829, isMobile: true } ]
    }
  ]

const user = studentsList.map(student =>(new User(student.firstName, student.lastName, student.dni, student.isAdmin, student.telephone)))

const user1 = new User('Gustavo', 'Giannini', 37952220, false)
const user3 = new User('Adrian', 'Martinez', 34589785, false, +54911256589)
const user2 = new User('Luciano', 'Paci', 37589225, true, 1598789654)

console.log (user.map (usuarios => usuarios.showall()))

//console.log(user1)
//console.log(user2)
//console.log(user3)








