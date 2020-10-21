// 栈与队列互相实现
// 栈：先进后出（push pop),队列：先进先出

// 思路：用数组来模拟

// 初始化数据结构
let MyStack = function(){
  this.queue = []
}
// 实现栈的push
MyStack.prototype.push = function(value){
  this.queue.push(value)
}

// 实现栈的pop
MyStack.prototype.pop = function(){
  let res = []
  for(let i = 0 ;i < this.queue.length - 1; i++){
    res.push(this.queue[i])
  }
  
  let popValue = this.queue[this.queue.length - 1]
  this.queue = res
  return popValue

}

// 栈的top
MyStack.prototype.top = function(value){
  return this.queue.length ? this.queue[this.queue.length - 1] : null
}

MyStack.prototype.empty = function() {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


