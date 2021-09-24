function CreateHTML() {
  const header = document.querySelector("#text");
  const title = document.createElement("h1");
  header.appendChild(title);
  title.innerText = "Minha Lista de Tarefas";

  const main = document.querySelector("#main");
  const par = document.createElement("p");
  par.id = "funcionamento";
  par.innerText = "Clique duas vezes em um item para marcá-lo como completo";
  main.appendChild(par);
}
CreateHTML();

function CreateInputs() {
  const section = document.querySelector("#section");
  const input = document.createElement("input");
  input.id = "texto-tarefa";
  section.appendChild(input);

  const bt = document.createElement("button");
  bt.id = "criar-tarefa";
  bt.innerHTML = "Add Task";
  section.appendChild(bt);
}

CreateInputs();

function CreateTask() {
  const button = document.querySelector("#criar-tarefa");
  const list = document.getElementById("lista-tarefas");
  const textTasks = document.querySelector("#texto-tarefa");

  button.addEventListener("click", () => {
    const makeLi = document.createElement("li");
    makeLi.className = "tasks";
    makeLi.textContent = textTasks.value;
    list.appendChild(makeLi);
    textTasks.value = "";
  });
}

CreateTask();

const ordenedList = document.querySelectorAll("#lista-tarefas");

for (let index = 0; index < ordenedList.length; index += 1) {
  ordenedList[index].addEventListener("click", (event) => {
    if (event.target.className === "tasks") {
      if (document.querySelector("#changeColor") !== null) {
        document.querySelector("#changeColor").removeAttribute("id");
      }
      event.target.id = "changeColor";
    }
  });
}

const listOrdened = document.querySelectorAll("#lista-tarefas");

for (let index = 0; index < listOrdened.length; index += 1) {
  listOrdened[index].addEventListener("dblclick", (event) => {
    if (event.target.className === "tasks") {
      event.target.className = "completed";
    } else {
      event.target.className = "tasks";
    }
  });
}

function ClearTasks() {
  const apagar = document.querySelector("#apaga-tudo");
  const apagarList = document.querySelector("#lista-tarefas");

  apagar.addEventListener("click", () => {
    apagarList.innerHTML = "";
  });
}

ClearTasks();

function ClearCompletedTasks() {
  const apagarFinalizados = document.querySelector("#remover-finalizados");

  apagarFinalizados.addEventListener("click", () => {
    const tasksCompletas = document.getElementsByClassName("completed");
    for (let i = tasksCompletas.length - 1; i >= 0; i -= 1) {
      tasksCompletas[i].remove();
    }
  });
}

ClearCompletedTasks();
