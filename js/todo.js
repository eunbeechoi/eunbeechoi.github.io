const toDoForm = document.getElementById("todo-form");
//document에서도 찾을 수 있지만, 우리가 이미  toDoForm을 찾아놔서 그 안에서 input을 찾을 수 있음.
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";

let toDos = [];

function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo (event) {
    const li = event.target.parentElement;
    //target은 클릭된 html element 

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // span의 텍스트는  handletoDoSubmit에서 온 newToDo 텍스트가 됨.
    //span안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo 값
    const button = document.createElement("button");
    button.style.backgroundColor ="transparent";
    button.style.border = "none";
    button.innerText = "✅";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);  //span을 li의 자식으로 만들기 
    li.appendChild(button);

    toDoList.appendChild(li);

}


//JS가 방금 발생한 event를 handleToDoSubmit 함수의 첫번째 인자로 준다
function handleToDoSubmit(event) { 
    event.preventDefault();
    const newTodo = toDoInput.value;  // input의 value를 새로운 변수에 복사 
    toDoInput.value = ""; //엔터누르면 입력칸이 비워지도록
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);  // input에서 value를 얻어서(입력값) paintToDo에 넣어서 호출 
    saveToDos();


}

toDoForm.addEventListener("submit", handleToDoSubmit);





const savedToDos = localStorage.getItem(TODOS_KEY);


//만약 savedToDos가 localStorage에 존재한다면
if (savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 


