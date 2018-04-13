const assert = require('assert');
const Task = require('../task.js');

describe('Task tests', function (){
  let task1;

  beforeEach("setup", function(){
      task1 = new Task(3, 100, 10);
  })

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, 3);
  });

  it("should have a urgency level", function(){
    assert.strictEqual(task1.urgency, 100);
  });

  it("should have a reward level", function(){
    assert.deepStrictEqual(task1.reward, 10);
  });

  it("should start as not complete", function(){
    assert.strictEqual(task1.complete, false);
  });

  it("should be able to mark task as complete", function(){
    task1.setComplete();
    assert.strictEqual(task1.complete, true);
  });

})
