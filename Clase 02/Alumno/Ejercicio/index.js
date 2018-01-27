class Movie {
    constructor (title, year, director, actors = []) { 
        this._title = title
        this._year = year
        this._director = director
        this._actors = actors 
        }

    get title () {
       return this._title
    }

    get year () {
        return this._year
     }

     get director () {
        return this._director
     }

     get actors () {
        return this._actors
     }

    set years(years){
        this._years = years  
    }

    set director(director){
        this._director = director
    }

    set actors(actors){
        this._actors.push(actors)
    }

    set title(title){
        this._title = title
    }

     searchActor (name) {
            return !!this._actors.find((item) => item.firstName === name)
     }

     
}

const actors = [
  {
    firstName: 'Luciano',
    lastName: 'Paci'
  },
  {
    firstName: 'Gus',
    lastName: 'Giannini'
  }
]
const movie = new Movie('matrix', 1999, 'Gus', actors)



console.log(movie.searchActor('Gus'))

