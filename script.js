const input = document.getElementById("data");
const list = document.getElementById("list");
const btn = document.getElementById("btn");

const tasks = localStorage.getItem("tasks")? 
JSON.parse(localStorage.getItem("tasks"))
    :[];

showTasks();
//show all task
function showTasks(){
    tasks.forEach((e,index)=>{
    const li = document.createElement("li");
    li.className = "task";

    const p = document.createElement("p");
    li.append(p);
    p.innerText = (index+1)+". "+ e;

    const span = document.createElement("span");
    span.className = "del";
    li.append(span);

    // icon
    const i = document.createElement("i");
    i.className="bi bi-trash"; //del icon
    span.appendChild(i);

    span.addEventListener("click",()=>{
        removeTasks();
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showTasks();
    })

    list.appendChild(li);
    })
}
const removeTasks=()=>{
    tasks.forEach((e)=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}
//click enter to submit
input.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        btn.click();
    }
})
//add todos
btn.addEventListener("click",()=>{
    if(input.value === ''){
        alert("Empty!! Write something ");
    } else {
        removeTasks();
        tasks.push(input.value);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showTasks();
        input.value='';
    }
})