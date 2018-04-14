const Task = function(difficulty, urgency, reward, complete = false){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = complete;
}

Task.prototype.setComplete = function(){
  this.complete = true;
}

module.exports = Task;
