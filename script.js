const input_Box = document.getElementById('input-box');
const list_Container = document.getElementById("list-container");
function addTask(){
    if(input_Box.value === ''){
        alert("You must write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_Box.value ;
        list_Container.appendChild(li);
        let span = document.createElement ("span")
        span.innerHTML = "&#10005";
        li.appendChild(span)
    }
    input_Box.value = '';
    savedata();
}
list_Container.addEventListener("click", function(e){
         if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savedata();
         }
         else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savedata();
         }
},false);
function savedata(){
    localStorage.setItem('data', list_Container.innerHTML );
}
function listTask(){
    list_Container.innerHTML = localStorage.getItem('data');
}
listTask();