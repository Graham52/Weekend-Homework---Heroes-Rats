const Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
};

Hero.prototype.talk = function(){
  return `Hello my name is ${this.name} !`;
}

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
}

Hero.prototype.eatFood = function(food){
   if(food.name === this.favFood){
     this.health += (1.5 * food.replenishmentValue);
   } else {
     this.health += food.replenishmentValue;
   }
}


Hero.prototype.completeTask = function (task) {
  task.setComplete();
  // this.addMoney(quest.reward);
};

Hero.prototype.completedTasks = function () {
  return this.tasks.filter(function (task) {
    return task.complete === true;
  });
}

Hero.prototype.incompletedTasks = function () {
  return this.tasks.filter(function (task) {
    return task.complete === false;
  });
}


// Hero.prototype.filterByComplete = function () {
//   const completedQuests = this.questList.filter(quest => {return quest.status});
//   return completedQuests;
// };
//
// Hero.prototype.filterByUncomplete = function () {
//   const uncompletedQuests = this.questList.filter(quest => {return !quest.status});
//   return uncompletedQuests;
// };

module.exports = Hero;
