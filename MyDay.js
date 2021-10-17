const habits = [
'gitHub contribution',
'read',
'exercise'];

const tasks = [
  {
    category:"programming",
    name:"programmar el boton de X proytecto"
  },
  {
    category:"sell",
    name:"ofrecer x producto a x cliente"
  },
  {
    category:"english",
    name:"prender vocanulario de X"
  },
  {
    category:"personal",
    name:"pedir cita para X y revisar X"
  },
];

//Select elements
const habitsUl = document.getElementById("habits");
const tasksUl = document.getElementById("tasks");
const input = document.querySelector("input");
const addButton = document.querySelector("button");
const empty = document.getElementById("empty")

//Add Habits
habits.map(n => {
  var newLiHabits = document.createElement("li");
  var newPHabits = document.createElement("p");
  newPHabits.textContent = n;
  newLiHabits.append(newPHabits);
  habitsUl.append(newLiHabits);
})


//Add Tasks
tasks.map(n => {
  var newLiTasks = document.createElement("li");
  var newPTasks = document.createElement('p');
  newPTasks.textContent = n.name;
  newLiTasks.append(newPTasks);
  newLiTasks.append(deleteButton()); 
  tasksUl.append(newLiTasks);
})
  

//Add New Task
addButton.addEventListener('click',(e) =>{
  e.preventDefault();
  if(input.value !== ''){
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = input.value;
  li.append(p);
  li.append(deleteButton()); 
  tasksUl.append(li);
  input.value="";
  }
})

//Delete Task
function deleteButton(){
  const deleteButton = document.createElement("button");

  deleteButton.textContent= "x";
  
  deleteButton.addEventListener("click", (e) =>{
    const item = e.target.parentElement;
    item.remove();
  })
  return deleteButton;
}

