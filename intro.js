// Vivien Lee Charles Weng
// Team Konstantinovich
// SoftDev pd7
// HW 15-- Sequential Progress
// 2017-12-11

// the things you need from the orignal html
var list = document.getElementById("thelist");
const b = document.getElementById("b");
const h = document.getElementById("h");
var l = document.getElementsByTagName("li");
const head = h.innerHTML;


// functions that do the things (li functions)
const over = function(){
  h.innerHTML = this.innerHTML;
}
const out = function(){
  // console.log(this.innerHTML);
  h.innerHTML = head;
}
const click = function(){
  this.remove();
}

// add the events to an element
function addE(n){
  n.addEventListener("mouseover", over);
  n.addEventListener("mouseout", out);
  n.addEventListener("click", click);
}

// add the events to each list element
for(var i = 0; i < l.length; i++)
  addE(l[i]);

// adding an element to the list (button functions)
var counter = 8
const add = function(){
  // console.log(list.innerHTML);
  var el = document.createElement("li");
  el.innerHTML = "item " + counter;
  // new lists also need the events
  addE(el);
  list.appendChild(el);
  counter++;
  // console.log(l);
}
b.addEventListener("click", add);
