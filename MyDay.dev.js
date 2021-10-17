"use strict";

var habits = ['gitHub contribution', 'read', 'exercise'];
var tasks = [{
  category: "programming",
  name: "programmar el boton de X proytecto"
}, {
  category: "sell",
  name: "ofrecer x producto a x cliente"
}, {
  category: "english",
  name: "prender vocanulario de X"
}, {
  category: "personal",
  name: "pedir cita para X y revisar X"
}]; //Select elements

var habitsUl = document.getElementById("habits");
var tasksUl = document.getElementById("tasks");
var input = document.querySelector("input");
var addButton = document.querySelector("button");
var empty = document.getElementById("empty"); //Add Habits

habits.map(function (n) {
  var newLiHabits = document.createElement("li");
  var newPHabits = document.createElement("p");
  newPHabits.textContent = n;
  newLiHabits.append(newPHabits);
  habitsUl.append(newLiHabits);
}); //Add Tasks

tasks.map(function (n) {
  var newLiTasks = document.createElement("li");
  var newPTasks = document.createElement('p');
  newPTasks.textContent = n.name;
  newLiTasks.append(newPTasks);
  newLiTasks.append(deleteButton());
  tasksUl.append(newLiTasks);
}); //Add New Task

addButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (input.value !== '') {
    var li = document.createElement('li');
    var p = document.createElement('p');
    p.textContent = input.value;
    li.append(p);
    li.append(deleteButton());
    tasksUl.append(li);
    input.value = "";
  }
}); //Delete Task

function deleteButton() {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", function (e) {
    var item = e.target.parentElement;
    item.remove();
  });
  return deleteButton;
}