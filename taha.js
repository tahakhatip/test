const allBoxes = document.querySelectorAll('.box')
const allTasks = document.querySelectorAll('.task')


allTasks.forEach(task => {
    task.addEventListener('dragstart', ()=>{
        task.classList.add('is-draging')
    })
    task.addEventListener('dragend', ()=>{
    task.classList.remove('is-draging')
    })
})


allBoxes.forEach(box => {
    box.addEventListener('dragover',(e) => {
      e.preventDefault();
      const curTask =document.querySelector('.is-draging')
      box.appendChild(curTask)

     })


})



const form = document.querySelector('#add-form')
const input = document.querySelector('#todo-input')
const todoBox = document.querySelector('#to-do')

form.addEventListener('submit', e => {
    e.preventDefault();

    const newTaskText = input.value.trim(); // Trim whitespaces from the input
    if (!newTaskText === '') return; // Check for empty input

    const newTask = document.createElement('p');
    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true');
    newTask.textContent = newTaskText; // Use textContent instead of innerHTML

    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('is-dragging');
    });
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('is-dragging');
    });

    todoBox.appendChild(newTask);
    input.value = ''; // Clear the input field after adding the task
});