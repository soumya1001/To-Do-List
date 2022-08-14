function add(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("data").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
      alert("Empty!! Write something ")
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("data").value='';
    // inputValue = '';
  }