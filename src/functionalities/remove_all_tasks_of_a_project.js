export default function removeAllTasksOfAProject(projectName) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    let project;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name == projectName) {
            project = projects[i];
      }
    }

    let allTasks = JSON.parse(localStorage.getItem('tasks')); 
    const projectTasks = project["project_tasks"];
 
        for(let i = 0 ; i < projectTasks.length; i++){
            for(let j = 0 ; j <  allTasks.length ; j++){
                if (projectTasks[i]['name'] === allTasks[j]['name']){
                   allTasks.splice(j,1);
                    
                }
            }
        }
        
            if(allTasks.length === 0){
                localStorage.removeItem('tasks')
            } else {

        localStorage.setItem('tasks', JSON.stringify(allTasks));
            }
}