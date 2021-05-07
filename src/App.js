import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import TodoTask from "./Todotask";

function App() {
  const [task, settask] = useState([]);
  const [text, settext] = useState("");
  const handelCheckBox = (e, id) => {
    settask(
      task.map((res) =>
        res.id === id ? { ...res, completed: !res.completed } : res
      )
    );
  };

  const handelClear = () => {
    const filtered = task.filter((res) => !res.completed);
    settask(filtered);
  };
  const handelSubmission = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      if (task.length > 0) {
        task.map((res) =>
          res.name !== text
            ? settask([
                ...task,
                { id: Math.random(), name: text, completed: false },
              ])
            : settask([...task])
        );
      } else if (task.length === 0) {
        let val = { id: Math.random(), name: text, completed: false };
        task.push(val);
      }
    }

    settext("");
  };
  return (
    <div className="">
      <div className="container">
        <div className="row mainRow">
          <div className="col-lg-5 col-md-7 col-sm-8 mt-5 mx-auto main">
            <h2>ToDo List</h2>

            <TodoTask task={task} handelCheckBox={handelCheckBox} />
            <Button className="mt-4" onClick={handelClear}>
              clear all completed task
            </Button>
            <form
              onSubmit={handelSubmission}
              className="form-group d-flex my-4"
            >
              <input
                className="form-control"
                value={text}
                type="text"
                onChange={(e) => settext(e.target.value)}
              />
              <Button type="submit">submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
