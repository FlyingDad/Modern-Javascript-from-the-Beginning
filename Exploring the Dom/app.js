 /*jshint esversion: 6 */ 

//console.log(document.getElementById('task-title'));
//console.log(document.getElementById('task-title').id);

// Change Styling
document.getElementById('task-title').style.background = '#666';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';
//document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Task List';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task Now</span>';

//document query selector (single element selector)
console.log(document.querySelector('#task-title'));
document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(4)').textContent = 'Bite me';

//  multiple element selectors
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'pink';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//  multiple element by tag name - returns collection
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color = 'orange';

//convert collection into array
lis = Array.from(lis);
lis.forEach(function(li){
  console.log(li.className);
});

// query all - returns node list
const allItems = document.querySelectorAll('ul.collection li.collection-item');

console.log(allItems);
//can use array funcitons
allItems.forEach(function (item, index){
  item.textContent = `${index}: Hello`;
});

const allItemsOdd = document.querySelectorAll('li:nth-child(odd)');
allItemsOdd.forEach(function(item, index){
  item.style.background = '#ccc';
});
//  let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// // val = document.forms[0].id;
// // val = document.forms[0].method;
// // val = document.forms[0].action;

// val = document.links;
// // val = document.links[0];
// // val = document.links[0].id;
// // val = document.links[0].className;
// // val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);