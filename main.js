
//Listens for the page to load

window.addEventListener('load', () => {

    //Assigning variables for page elements

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');


    form.addEventListener('submit', e => {
    
    //Stops from refereshing page after submitting form

    e.preventDefault();
    
    //Get the input value from the form

    const task = input.value;

    if (!task) {
        alert('Please fill out the task');
        return;
    } 
    
    //Here we are remaking the commented out HTML but in JS

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    //Create input and store task data into task_input_el.
    const task_input_el = document.createElement('input');
    task_input_el.type = 'text';
    task_input_el.classList.add('text');
    task_input_el.value = task;

    //Set task to read only when not editing

    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);


    //Creates Edit and Delete options

    const task_actions_el = document.createElement('div')
    task_actions_el.classList.add('actions')

    const task_edit_el = document.createElement('button')
    task_edit_el.classList.add('edit')
    task_edit_el.innerHTML = 'Edit'

    const task_delete_el = document.createElement('button')
    task_delete_el.classList.add('delete')
    task_delete_el.innerHTML = 'Delete'

    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)
    task_el.appendChild(task_actions_el)
    list_el.appendChild(task_el)

    list_el.appendChild(task_el);

    input.value =''

    // Adding events to the edit and delete buttons

    task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLowerCase() == 'edit'){
            task_input_el.removeAttribute('readonly');
            task_input_el.focus();
            task_edit_el.innerText = 'Save'
        }else {
            task_input_el.setAttribute('readonly', 'readonly')
            task_edit_el.innerText = 'Edit'
        }

    })
    
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})