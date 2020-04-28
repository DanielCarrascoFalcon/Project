import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <center>
        <h1>Lista de tareas</h1>
      </center>
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <div className="card-body">
            <h5 className="card-title">{task.place}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{task.attendant}</h6>
            <p className="card-text">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
