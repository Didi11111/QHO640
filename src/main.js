// TODO complete...


import "./main.css";
import img1 from "../assets/top-left-elips.png";
import img2 from "../assets/bottom-right-elips.png";
import Todo from "./todo";
import todos from "./todolist";


function render(todolist) {
    console.log('ready');
    document.getElementById('app').innerHTML = view;

    const tds = [...todos];

    const handleCloseClick = (e) => {
        render(tds.filter((item) => e.target.id.substr(5) != item.id));
    };

    document.querySelector(".list").innerHTML = tds.map((item) => Todo(item.text, item.id)).join(" ");

    document.querySelectorAll(".close").forEach((e) => addEventListener("click", handleCloseClick));

    const form = document.getElementById('todoForm');
    const input = document.getElementById('todoInput');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = {
            id: (tds.length + 1).toString(),
            text: input.value,
            created: new Date().toString(),
            completed: false
        };
        tds.push(newTodo);
        render(tds);

    });
}


window.addEventListener("DOMContentLoaded", render.bind(this, todos));
const view = ` 
<img src="${img1}" id="background-left" alt="background" />
<img src="${img2}" id="background-right" alt="background" />

<div class="wrapper">
    <div class="todolist">
        <h1>STUDENT TO DO LIST</h1>
        <form id="todoForm"> 
            <input type="text" id="todoInput" placeholder="What do you need to do today...." /> 
            <button type="submit">Add Todo</button>
        </form>
        <div class="list">
        </div>
        <!-- /.list -->
    </div>
<!-- /.todolist -->
</div>
<!-- /.wrapper -->`;

