var unchecked_task=0;
//Selectors
const task      = document.querySelector('.task')
const todo_list = document.querySelector('.todo-list')
const items_left= document.querySelector('.items-left')
const all       = document.querySelector('.all')
const active    = document.querySelector('.active')
const completed = document.querySelector('.complete')

//Eventlisteners
task.addEventListener('keypress',add)
all.addEventListener('click',all_task)
active.addEventListener('click',active_task)
completed.addEventListener('click',completed_task)

//Function
function all_task()
{
    const ToBeDone= document.querySelectorAll('.todo_div');
    ToBeDone.forEach(element => {
        
            
        element.style.display='flex';
        
    });
}
function active_task()
{
    const ToBeDone= document.querySelectorAll('.todo_div');
    ToBeDone.forEach(element => {
        console.log(element)
        if (!element.children[1].classList.contains('completed'))
        {
            
            element.style.display='flex';
        }
        else
        {
            element.style.display='none';
        }
    });
}
function completed_task()
{
    const ToBeDone= document.querySelectorAll('.todo_div');
    ToBeDone.forEach(element => {
        if (element.children[1].classList.contains('completed'))
        {
            element.style.display='flex';
        }
        else
        {
            element.style.display='none';
        }
    });
    
}
function edit()
    {
            
        this.contentEditable="true";
            
    }
function delete_todo(event)
{
   
   const mark = event.target.parentElement.children;

   if (!mark[0].checked)
    {
        unchecked_task--;
    }
    event.target.parentElement.remove()
   items_left.innerText="Items Left : " + Math.max(0,unchecked_task.toString()); 
}
function check_task(event)
{
    if (this.checked)
    {
        unchecked_task--;
        
    }
    else
    {
        unchecked_task++;
    }
    const marked = event.target.parentElement.children;
    
    marked[1].classList.toggle('completed');
   
    items_left.innerText="Items Left : " + Math.max(0,unchecked_task.toString()); 
}
function add(event)
{
    
    if (event.key==='Enter')
    {
        event.preventDefault();
        
        
        
        const todo_div = document.createElement('div');
        todo_div.classList.add("todo_div")

        // Checkbox element 
        const checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkbox.classList.add("checkbox");
        todo_div.appendChild(checkbox);
        checkbox.addEventListener('click',check_task);
        
        unchecked_task++;
        

        // li new todo
        const todo_item= document.createElement('li');
        todo_item.innerText=task.value
        task.value=''
        todo_item.classList.add("new_todo")
        todo_div.appendChild(todo_item)

        
        // Cross Button
        const cross= document.createElement('i');
        
        todo_div.appendChild(cross)
        cross.classList.add('cross')
        cross.classList.add('fas')
        cross.classList.add('fa-times')
        todo_list.appendChild(todo_div)
        cross.addEventListener('click',delete_todo)

        items_left.innerText="Items Left : " + Math.max(0,unchecked_task.toString()); 

        todo_item.addEventListener('dblclick',edit)
        

        
    

    }
    
}




// document.createElement()
// document.innertext
// classlist.add
// Class.appendChild()
// 