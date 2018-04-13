const Hero = function(name, health, favFood, tasks = []) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
};

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

Hero.prototype.eatFood = function(food){
   if(food.name === this.favFood){
     this.health += (1.5 * food.replenishmentValue);
   } else {
     this.health += food.replenishmentValue;
   }
}

module.exports = Hero;
