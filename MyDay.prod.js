"use strict";var habits=["gitHub contribution","read","exercise"],tasks=[{category:"programming",name:"programmar el boton de X proytecto"},{category:"sell",name:"ofrecer x producto a x cliente"},{category:"english",name:"prender vocanulario de X"},{category:"personal",name:"pedir cita para X y revisar X"}],habitsUl=document.getElementById("habits"),tasksUl=document.getElementById("tasks"),input=document.querySelector("input"),addButton=document.querySelector("button"),empty=document.getElementById("empty");function deleteButton(){var e=document.createElement("button");return e.textContent="x",e.addEventListener("click",function(e){e.target.parentElement.remove()}),e}habits.map(function(e){var t=document.createElement("li"),n=document.createElement("p");n.textContent=e,t.append(n),habitsUl.append(t)}),tasks.map(function(e){var t=document.createElement("li"),n=document.createElement("p");n.textContent=e.name,t.append(n),t.append(deleteButton()),tasksUl.append(t)}),addButton.addEventListener("click",function(e){var t,n;e.preventDefault(),""!==input.value&&(t=document.createElement("li"),(n=document.createElement("p")).textContent=input.value,t.append(n),t.append(deleteButton()),tasksUl.append(t),input.value="")});