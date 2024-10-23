const menu = `
    Task Manager Menu: 
    1. Add Task 
    2. View Tasks 
    3. Toggle Task Completion 
    4. Edit Task 
    5. Delete Task 
    6. Exit `;
let tasks = [];

//add
const addTasks = (desc) => {
  const tasksDi = {
    id: tasks.length + 1,
    description: desc,
    completed: false,
  };
  tasks.push(tasksDi);
  console.log(`Task added : "${desc}"`);
  console.log(menu);
};

//view
function viewTasks() {
  if (tasks.length == 0) console.log("No tasks available.");
  else {
    console.log("Tasks : ");
    for (let i = 0; i < tasks.length; i++) {
      console.log(
        `${tasks[i].id}. ${tasks[i].description} ${
          tasks[i].completed ? "[Completed]" : "[Not completed]"
        }`
      );
    }
  }
  console.log(menu);
}

// toggleTaskCompletion
function toggleTaskCompletion(id) {
  const tas = tasks.find(function obj(t) {
    return t.id == id;
  });
  if (tas) {
    tas.completed = !tas.completed;
    console.log(
      `Task "${tas.description}" marked as ${
        tas.completed ? "completed" : "not completed"
      }`
    );
  } else {
    console.log(`Task with ID ${id} not found`);
  }
  console.log(menu);
}

//edit
const edit = (id, newDesc) => {
  const tas = tasks.find(function obj(t) {
    return t.id == id;
  });
  if (tas) {
    tas.description = newDesc;
    console.log(`Task "${tas.id}" updated to: "${newDesc}"`);
  } else {
    console.log(`Task with ID ${id} not found`);
  }
  console.log(menu);
};

//delete
const deletee = (id) => {
  const tas = tasks.filter(function obj(t) {
    return t.id != id;
  });
  tasks = [... tas];
  console.log(`Task deleted : "${tasks[id].description}" `);
  console.log(menu);
};

function showMenu() {
  let msg = prompt("Enter your choice (1-6) :");
  switch (parseInt(msg)) {
    case 1:
      // console.log('Enter the task description : :>> ');
      const taskDes = prompt("Enter the task description : ");
      addTasks(taskDes);
      break;
    case 2:
      viewTasks();
      break;
    case 3:
      const taskTog = parseInt(prompt("Enter task ID to toggle completion : "));
      toggleTaskCompletion(taskTog);
      break;
    case 4:
      const taskEdi = parseInt(prompt("Enter task ID to edit : "));
      const newDescription = prompt("Enter new task description : ");
      edit(taskEdi, newDescription);
      break;
    case 5:
      const taskDel = parseInt(prompt("Enter task ID to delete : "));
      deletee(taskDel);
      break;
    case 6:
      console.log("Exiting task manager...");
      return;
    default:
      console.log("Invalid choice , please enter a number between 1 and 6 .");
      break;
  }
  showMenu();
}
console.log(menu);

showMenu();
