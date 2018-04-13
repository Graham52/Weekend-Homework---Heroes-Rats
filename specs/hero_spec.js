const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');


describe('Hero tests', function() {

  let hero1;
  let crisps;

  beforeEach(function() {
    hero1 = new Hero(
      'John Doe',
      100,
      'Brownie',
      ['Clean the car'])

      crisps = new Food('Crisps', 10)
      brownie = new Food('Brownie', 20)
  });

  it('should have an name', function() {
    assert.strictEqual(hero1.name, 'John Doe');
  });

  it('should have a health value', function() {
    assert.strictEqual(hero1.health, 100);
  });

  it('should have food', function() {
    assert.strictEqual(hero1.favFood, 'Brownie');
  });

  it('should be able to talk', function() {
    assert.strictEqual(hero1.talk(), 'Hello my name is John Doe !');
  });

  it('should have a task', function() {
    assert.strictEqual(hero1.tasks.length, 1);
  });

  describe('Eat tests', function (){
    it('should be able to eat food, and health should go up by the replenishment value', function(){

      hero1.eatFood(crisps);
      assert.strictEqual(hero1.health, 110);

    });

    it('should be able to eat favourite food, and health should go up by the 1.5 * replenishment value', function(){

      hero1.eatFood(brownie);
      assert.strictEqual(hero1.health, 130);

    });
});







})
