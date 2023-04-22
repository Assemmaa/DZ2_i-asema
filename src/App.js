import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([
    {
      id: 1,
      task: "coding",
    },
    {
      id: 2,
      task: "eat",
    },
    {
      id: 3,
      task: "sleep",
    },
    {
      id: 4,
      task: "run",
    },
    {
      id: 5,
      task: "back",
    },
    {
      id: 6,
      task: "restart",
    },
  ]);

  const changeShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <Input
        placeholder={"Поиск"}
        name={"Input_first"}
        setValue={setinputValue}
      />
      <Button>
        <button onClick={changeShow}>Добавить</button>
      </Button>
      <div>
        {task.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </div>
      {isShow && <Modal changeShow={changeShow} />}
    </div>
  );
}

export default App;
