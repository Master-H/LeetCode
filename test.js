let data1 = {
  name:'小明',
  age:18
}

Object.defineProperty(data1,'age',{
  set:function(newAge){
      console.log(this.name+'现在'+newAge+'岁')
  },
  get:function(){
    return 18;
  },
  // value:2
}) 
console.log(data1);