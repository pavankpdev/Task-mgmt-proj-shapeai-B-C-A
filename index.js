const taskContainer = document.querySelector(".task__container");

const addNewCard = () => {
  // get task data
  const taskData = {
    id: `${Date.now()}`,
    title: document.getElementById("taskTitle").value,
    image: document.getElementById("imageURL").value,
    type: document.getElementById("taskType").value,
    description: document.getElementById("taskDescription").value,
  };

  // generate HTML code

  const newCard = ` <div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
  <div class="card">
    <div class="card-header gap-2 d-flex justify-content-end">
      <button class="btn btn-outline-info">
        <i class="fal fa-pencil"></i>
      </button>
      <button class="btn btn-outline-danger">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div class="card-body">
      <img
        src=${taskData.image}
        alt="image"
        class="card-img"
      />
      <h5 class="card-title mt-4">${taskData.title}</h5>
      <p class="card-text">
        ${taskData.description}
      </p>
      <span class="badge bg-primary">${taskData.type}</span>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-primary">Open Task</button>
    </div>
  </div>
</div>`;

  // Inject it to DOM
  taskContainer.insertAdjacentHTML("beforeend", newCard);

  // clear the form
  document.getElementById("taskTitle").value = "";
  document.getElementById("imageURL").value = "";
  document.getElementById("taskType").value = "";
  document.getElementById("taskDescription").value = "";

  return;
};
