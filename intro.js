// Vivien Lee Charles Weng
// Team Konstantinovich
// SoftDev pd7
// HW 15-- Sequential Progress
// 2017-12-11

// the things you need from the orignal html
const list = document.getElementById("thelist");
const b = document.getElementById("b");
const h = document.getElementById("h");
const l = list.getElementsByTagName("li");
const head = h.innerHTML;
const bodyy = document.getElementsByTagName("body")


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

// phase 2
const addf = function(){
  var el = document.createElement("li");
  // console.log(l2.length);
  if (l2.length < 2)
    el.innerHTML = "1";
  else
    el.innerHTML = parseInt(l2[l2.length - 2].innerHTML) + parseInt(l2[l2.length - 1].innerHTML);
  console.log(el.innerHTML);
  addE(el);
  list2.append(el);
}
const list2 = document.createElement("ol");
const l2 = list2.getElementsByTagName("li");
const b2 = document.createElement("button");
list2.setAttribute("id", "list2");
b2.setAttribute("id", "b2");
b2.innerHTML += "fibanachi generator";
b2.addEventListener("click", addf);
bodyy[0].appendChild(list2);
bodyy[0].appendChild(b2);

const addt = function(){
  var el = document.createElement("li");
  console.log(l3.length);
  if (l3.length < 2)
    el.innerHTML = "1";
  else if (l3.length == 2)
    el.innerHTML = "2";
  else
    el.innerHTML = parseInt(l3[l3.length - 3].innerHTML) + parseInt(l3[l3.length - 2].innerHTML) + parseInt(l3[l3.length - 1].innerHTML);
  // console.log(el.innerHTML);
  addE(el);
  list3.append(el);
}
const list3 = document.createElement("ol");
const l3 = list3.getElementsByTagName("li");
const b3 = document.createElement("button");
list3.setAttribute("id", "list3");
b3.setAttribute("id", "b3");
b3.innerHTML += "tribanachi generator";
b3.addEventListener("click", addt);
bodyy[0].appendChild(list3);
bodyy[0].appendChild(b3);
