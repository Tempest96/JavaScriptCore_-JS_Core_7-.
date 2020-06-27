        /* Function style */

function Robot(name,text){
    this.name = 'Robot'
    this.text = 'Я просто працюю.'
    this.work = function(){
        console.log(`Я ${this.name} -  ${this.text}`);
    }
}
function CoffeRobot(name,text){
    Robot.apply(this,arguments)
    this.name = 'CoffeRobot'
    this.text = 'Я варю каву.'
}
function RobotDancer(name,text){
    Robot.apply(this,arguments)
    this.name = 'RobotDancer'
    this.text = 'Я просто танцюю.'
}
function RobotCoocker(name,arguments){
    Robot.apply(this,arguments)
    this.name = 'RobotCoocker'
    this.text = 'Я просто готую.'
}
let objRobot = new Robot;
let objCoffeRobot = new CoffeRobot;
let objRobotDancer = new RobotDancer;
let objRobotCoocker = new RobotCoocker;

console.log(objRobot.work())
console.log(objCoffeRobot.work())
console.log(objRobotDancer.work())
console.log(objRobotCoocker.work())



