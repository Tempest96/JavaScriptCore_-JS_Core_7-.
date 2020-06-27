           /* Prototype style */

let Robot = {
    name: 'Robot',
    text : 'Я просто працюю.',
    work() {
    return   console.log(`Я ${this.name} - ${this.text}`)
    }
};
let CoffeRobot = {
    __proto__:Robot,
    name :'CoffeRobot',
    text :'Я варю каву',
};
let RobotDancer = {
    __proto__ : Robot,
    name: 'RobotDancer',
    text: 'Я просто танцюю',
}
let RobotCoocker = {
    __proto__ : Robot,
    name: 'RobotCoocker',
    text: 'Я просто готую',
}
console.log(Robot.work());
console.log(CoffeRobot.work())
console.log(RobotDancer.work());
console.log(RobotCoocker.work());
