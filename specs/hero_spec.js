const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');


describe('Hero tests', function() {

  let hero1;
  let crisps;
  let shopping;
  let payBill;
  let cleanCar;

  beforeEach(function() {
    hero1 = new Hero(
      'John Doe',
      100,
      'Brownie')

      crisps = new Food('Crisps', 10)
      brownie = new Food('Brownie', 20)

      shopping = new Task(2, 10, 5);
      payBill = new Task(1, 20, 10);
      cleanCar = new Task(3, 30, 8)
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
    assert.deepStrictEqual(hero1.tasks, []);
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

  })

    describe('Task tests', function (){

      it('should be able to view tasks that are marked as complete', function(){
        hero1.addTask(shopping);
        hero1.addTask(payBill);
        hero1.completeTask(payBill);
        assert.deepStrictEqual(hero1.completedTasks(), [payBill]);
      });

      it('should be able to view tasks that are marked as incomplete', function(){
        hero1.addTask(shopping);
        hero1.addTask(payBill);
        hero1.completeTask(payBill);
        assert.deepStrictEqual(hero1.incompletedTasks(), [shopping]);
      });

      it('should be able to sort tasks by difficulty', function() {
        hero1.addTask(shopping);
        hero1.addTask(payBill);
        hero1.addTask(cleanCar);
        hero1.sortTasksBy('difficulty');
        assert.deepStrictEqual(hero1.tasks, [payBill, shopping, cleanCar])
      });

      it('should be able to sort tasks by urgency', function() {
        hero1.addTask(payBill);
        hero1.addTask(cleanCar);
        hero1.addTask(shopping);
        hero1.sortTasksBy('urgency');
        assert.deepStrictEqual(hero1.tasks, [shopping, payBill, cleanCar])
      });

      it('should be able to sort tasks by reward', function() {
        hero1.addTask(cleanCar);
        hero1.addTask(payBill);
        hero1.addTask(shopping);
        hero1.sortTasksBy('reward');
        assert.deepStrictEqual(hero1.tasks, [shopping, cleanCar, payBill])
      });

  })

})
