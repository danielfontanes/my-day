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


//----------------TASKS-----------------------------------------------
const tasksUl = document.getElementById("tasks");
const inputTasks = document.getElementById("inputTasks");
const addButton = document.getElementById("tasksButton");

//Add Tasks
tasks.map(n => {
  var newLiTasks = document.createElement("li");
  var newPTasks = document.createElement('p');
  newPTasks.textContent = n.name;
  newLiTasks.append(newPTasks);
  newLiTasks.append(deleteButton()); 
  tasksUl.append(newLiTasks);
})
  
//-----------HABITS--------------------------------------------------
const habitsUl = document.getElementById("habits");
const inputHabits = document.getElementById("inputHabits");
const addButtonHabits = document.getElementById("habitsButton");

//Add Habits
habits.map(n => {
  var newLiHabits = document.createElement("li");
  var newPHabits = document.createElement("p");
  newPHabits.textContent = n;
  newLiHabits.append(newPHabits);
  habitsUl.append(newLiHabits);
})

//Add New Habit
addButtonHabits.addEventListener('click',(e) =>{
  e.preventDefault();
  if(inputHabits.value !== ''){
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = inputHabits.value;
  li.append(p);
  habitsUl.append(li);
  inputHabits.value="";
  }
})
//Add New Task
addButton.addEventListener('click',(e) =>{
  e.preventDefault();
  if(inputTasks.value !== ''){
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = inputTasks.value;
  li.append(p);
  li.append(deleteButton());
  tasksUl.append(li);
  inputTasks.value="";
  }
})

//Delete Task
function deleteButton(){
  const deleteButton = document.createElement("button");

  deleteButton.textContent= "V";
  deleteButton.addEventListener("click", (e) =>{
    const item = e.target.parentElement;
    item.remove();
  })
  return deleteButton;
}