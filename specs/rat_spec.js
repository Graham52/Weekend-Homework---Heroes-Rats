const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');


describe('Rat', function(){

  let rat;
  let food;

  beforeEach(function() {
    rat =  new Rat();
    food = new Food("Bread", 5);
  });

  it('should have a a poison value', function() {
    assert.strictEqual(rat.poison, -5);
  })

  it('shoud be able to touch food and poison it', function() {
    rat.touchFood(food);
    assert.strictEqual(food.poisoned, true);
  })

})
