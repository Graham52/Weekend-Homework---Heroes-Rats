const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function() {

  let hero1;

  beforeEach(function() {
    hero1 = new Hero(
      'John Doe',
      'Health is good',
      'Brownie',
      'Hi my name is John Doe',
      ['Clean the car'])
  });

  it('should have an name', function() {
    assert.strictEqual(hero1.name, 'John Doe');
  });

  it('should have an health', function() {
    assert.strictEqual(hero1.health, 'Health is good');
  });

  it('should have food', function() {
    assert.strictEqual(hero1.food, 'Brownie');
  });

  it('should be able to talk', function() {
    assert.strictEqual(hero1.talk, 'Hi my name is John Doe');
  });

  it('should have a task', function() {
    assert.strictEqual(hero1.tasks.length, 1);
  });

});
