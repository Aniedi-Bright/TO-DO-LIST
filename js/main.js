function todoList(){
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    var t = document.getElementById("todoList")
    t.appendChild(newItem);
    newItem.appendChild(removeTask);
}

var b = document.getElementById("removeButton");
b.addEventListener('click',function(){
    var t = document.getElementById("todoList")
    t.style.display="none"
    
})