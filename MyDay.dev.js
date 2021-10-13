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
}]; //Add Habits

var currentH3 = document.getElementById("habits");

for (var step = 0; step < habits.length; step++) {
  var newH3 = document.createElement("h3");
  newH3.textContent = habits[step];
  currentH3.appendChild(newH3);
} //Add Tasks


var currentH3 = document.getElementById("tasks");

for (var _step = 0; _step < tasks.length; _step++) {
  var newH3 = document.createElement("h3");
  newH3.textContent = tasks[_step].name;
  currentH3.appendChild(newH3);
}