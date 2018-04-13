const Hero = function(name, health, food, talk, tasks = []) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.talk = talk;
  this.tasks = tasks;
};

module.exports = Hero;
