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
  if (food.poisoned) {
    this.health -= 5;
    }
  else if(food.name === this.favFood){
    this.health += (1.5 * food.replenishmentValue);
    }
  else {
    this.health += food.replenishmentValue;
   }
}

Hero.prototype.completeTask = function (task) {
  task.setComplete();
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

Hero.prototype.sortTasksBy = function (property) {
  const tasksArray = this.tasks;
  const sortedTasksArray = tasksArray.sort(function(task1, task2) {
    return task1[property] - task2[property];
  })
  return sortedTasksArray;
};

module.exports = Hero;
