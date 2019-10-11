function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.getFullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person("Nick", "Dickerson");
console.log(person1.getFullName());