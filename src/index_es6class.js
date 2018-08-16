/* 
class MComponent {
    renderM(){
       return;
    }
    componentDidMountM(){

    }
}
class Profile extends MComponent {
    renderM(){
        return <h1>test</h1>
    }
} */
class Animal {

    static saveAnimal='SaveAnimal from hunters'
    constructor() {
        this.food = 'animal food'
    }
    //instance method
    eat() {
        return 'Animal eat'
    }
}
class Dog extends Animal {

    constructor() {
        super();
        this.food = 'meat'
    }
    //redefining
    eat() {
        return 'dog eats ' + this.food
    }
}
let dog = new Dog();
Dog.saveAnimal = 'Save dogs from Animal flue'
console.log(Dog.saveAnimal)
console.log(dog.eat());