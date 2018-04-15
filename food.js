const Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
}

Food.prototype.poisonFood = function (){
  this.poisoned = true;
};

module.exports = Food;
