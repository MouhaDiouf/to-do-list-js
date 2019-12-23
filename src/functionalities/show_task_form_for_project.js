import storeTaskToProject from './add_task_to_project';
import createTask from './create_task'
export default function taskFormForProject(){
    const createTask = document.querySelector('.add-task');
    createTask.addEventListener('click', showForm);
}

function showForm() {
const form = document.createElement('form');
form.innerHTML = `
<div class="form-group">
  <label for="taskTitle">Task Name</label>
  <input type="text" class="form-control" id="taskTitle" placeholder="Enter Task Name" required/>
</div>

<div class="form-group">
  <label for="taskDescription">Description</label>
  <textarea class="form-control rounded-0" id="taskDescription" rows="5" required></textarea>
</div>

<div class="form-group">
  <!-- Date input -->
  <label class="control-label" for="date">Date</label>
  <input class="form-control" id="taskDue" name="date"  type="date" require />
</div>

<div class="form-group">
  <p><b>Priority</b></p>
  <input type="radio" id="lowPriorty" name="priority" value="low" checked />
  <label for="lowPriorty">Low</label>

  <input type="radio" id="mediumPriority" name="priority" value="medium" />
  <label for="mediumPriority">Medium</label>

  <input type="radio" id="highPriority" name="priority" value="high" />
  <label for="highPriority">High</label>

</div>


<button type="submit" class="btn btn-primary">Create Task</button>

`
const addContainer = document.querySelector('.app');
addContainer.appendChild(form);
document.querySelector('.add-task').style.display = "none";

document.querySelector('form').addEventListener('submit', createTask );
document.querySelector('form').addEventListener('submit', storeTaskToProject);


}