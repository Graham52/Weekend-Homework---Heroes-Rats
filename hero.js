const Hero = function(name, health, food, tasks = []) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = tasks;
};

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

module.exports = Hero;
