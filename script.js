const input = document.getElementById("data");
const list = document.getElementById("list");
const btn = document.getElementById("btn");
const time = document.getElementById("time");
const date = document.getElementById("date");

//time
function mytime(){
    const d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}
setInterval(mytime,1000);
//date
function myDate(){
    const dt = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
    date.innerHTML = dt;
}
myDate();

const tasks = localStorage.getItem("tasks")? 
JSON.parse(localStorage.getItem("tasks"))
    :[];

showTasks();

//show all task
function showTasks(){
    tasks.forEach((e,index)=>{
    const li = document.createElement("li");
    li.className = "taskrow";

    // const checkbox = document.createElement("input");
    // checkbox.type="checkbox";
    // checkbox.id="checkbox";
    // li.appendChild(checkbox); 

    const task = document.createElement("input");
    task.type ="text";
    task.className ="task";
    task.setAttribute("readonly","readonly");
    task.value = (index+1)+". "+ e;
    li.append(task);

    // const editspan = document.createElement("span");
    // editspan.className = "edit";
    // editspan.innerText="Edit";
    // li.append(editspan);

    const delspan = document.createElement("span");
    delspan.className = "del";
    li.append(delspan);

    //del icon
    const i = document.createElement("i");
    i.className="bi bi-trash"; 
    delspan.appendChild(i);
    //edit button
    // editspan.addEventListener("click",()=>{
    //     if(editspan.innerText.toLowerCase() == "edit"){
    //         task.removeAttribute("readonly");
    //         task.focus();
    //         editspan.innerText="Save";
    //     }else{
    //         tasks.splice(index,1,"boy");
    //         task.setAttribute("readonly","readonly");
    //         editspan.innerText="Edit";
    //         console.log(tasks);
    //         swal("Saved.","Your task is updated","success");
    //     }
    // })
    //delete button
    delspan.addEventListener("click",()=>{
        swal("Deleted !","","success");
        removeTasks();
        tasks.splice(index,1);
        console.log(index);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showTasks();
        console.log(tasks);
    })

    list.appendChild(li);
    })
}
const removeTasks=()=>{
    tasks.forEach((e)=>{
        const div = document.querySelector(".taskrow");
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
        swal("Empty !!","Write something","warning");
    } else {
        removeTasks();
        tasks.push(input.value);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showTasks();
        input.value='';
    }
})
//rating
const emoji=document.getElementById("emoji");
const ratebtn=document.getElementsByClassName("ratebtn");
Array.from(ratebtn).forEach((e,index)=>{
    e.addEventListener("click",()=>{
        for(var i=0; i<ratebtn.length; ++i){
            ratebtn[i].style.color="white";
        }
        for(var j=0; j<=index; ++j){
            ratebtn[j].style.color="#ffbf00";
        }
    })
})