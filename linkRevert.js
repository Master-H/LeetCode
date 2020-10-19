function linkRevert(head) {
  let arr = []
  let node = head
  while(node){
    arr.unshift(node)
    let node = node.next()
  }
  arr.map(node => console.log(node))

}