// Vivien Lee Charles Weng
// Team Konstantinovich
// SoftDev pd7
// HW 15-- Sequential Progress
// 2017-12-11

var list = document.getElementById("thelist");

// adding an element to the list
var counter = 8
const add = function(){
  console.log(list.innerHTML);
  var el = document.createElement("li");
  el.innerHTML = "item " + counter;
  counter++;
  list.appendChild(el);
}

const b = document.getElementById("b");
b.addEventListener("click", add);


const over = function(){

}
const out = function(){

}
const click = function(){

}

const h = document.getElementById("h");
var l = document.getElementsByTagName("li");

// l.addEventListener("mouseover", over);
// l.addEventListener("mouseout", out);
// l.addEventListener("click", click);
