const assert = require('assert');
const Food = require('../food.js');

describe('Food tests', function (){

  let bread;

  beforeEach("setup", function(){
      bread = new Food("Tiger Loaf", 3);
  })

  it("should have a name", function(){
    assert.strictEqual(bread.name, "Tiger Loaf");
  });

  it("should have a replenishment value", function(){
    assert.strictEqual(bread.replenishmentValue, 3);
  });

  it('should not be poisoned to start', function() {
    assert.strictEqual(false, bread.poisoned);
  })

  it('should be able to get poisoned', function() {
    bread.poisonFood();
    assert.strictEqual(true, bread.poisoned);
  })

})
