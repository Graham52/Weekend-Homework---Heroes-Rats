const Rat = function() {
    this.poison = -5;
}

Rat.prototype.touchFood = function (food) {
  food.poisonFood();
};

module.exports = Rat;
