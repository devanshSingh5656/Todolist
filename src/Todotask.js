import React from "react";

function TodoTask({ task, handelCheckBox }) {
  return (
    <div className="main__tasklist">
      {task.map((res) => (
        <div key={res.id} className=" form-check main__tasklist__head">
          <input
            id={res.id}
            type="checkbox"
            className="form-check-input ms-1 me-3 "
            onClick={(e) => handelCheckBox(e, res.id)}
          />
          <label class="form-check-label " for={res.id}>
            {res.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TodoTask;
