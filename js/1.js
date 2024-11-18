document.getElementById("agregarTarea").addEventListener("click", function () {
  const tareaTexto = document.getElementById("tareaInput").value;

  if (tareaTexto.trim() === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  const tareaElemento = document.createElement("li");
  tareaElemento.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  tareaElemento.textContent = tareaTexto;

  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
  botonEliminar.textContent = "Eliminar";

  tareaElemento.appendChild(botonEliminar);

  document.getElementById("listaTareas").appendChild(tareaElemento);

  document.getElementById("tareaInput").value = "";

  botonEliminar.addEventListener("click", function () {
    tareaElemento.remove();
  });
});
