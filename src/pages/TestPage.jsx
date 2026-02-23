import { useState } from "react";
import { Outlet } from "react-router";

const dummyNames = ["John", "Jane", "Jim"];
const dummyNamesWithGraduatedCheck = [
  { name: "John", graduated: true },
  { name: "Jane", graduated: false },
  { name: "Jim", graduated: true },
];

const TestPage = () => {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleName = (firstname) => {
    setName(firstname);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDisplayName = () => {
    setName(inputValue);
  };
  const [names, setNames] = useState([]);
  const handleAddName = () => {
    const newNames = [...names];
    newNames.push({ name: inputValue, graduated: false });
    console.log(newNames);
    setNames(newNames);
    setInputValue("");
  };
  const handleDeleteName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };
  const [editingName, setEditingName] = useState(-1);
  const handleToggleEdit = (index) => {
    setEditInputValue(names[index].name);
    setEditingName(index);
  };
  const [editInputValue, setEditInputValue] = useState("");
  const handleEditInputChange = (event) => {
    setEditInputValue(event.target.value);
  };
  const handleSaveEdit = (index) => {
    const newNames = [...names];
    newNames[index].name = editInputValue;
    setNames(newNames);
    setEditingName(-1);
    setEditInputValue("");
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Enter") {
      handleSaveEdit(index);
    }
  };
  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      handleAddName();
    }
  };
  //
  const handleToggleGraduated = (index) => {
    const newNames = [...names];
    newNames[index].graduated = !newNames[index].graduated;
    setNames(newNames);
  };
  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newNames = [...names];
    const temp = newNames[index];
    newNames[index] = newNames[index - 1];
    newNames[index - 1] = temp;
    setNames(newNames);
  };
  const handleMoveDown = (index) => {
    if (index === names.length - 1) return;
    const newNames = [...names];
    const temp2 = newNames[index];
    newNames[index] = newNames[index + 1];
    newNames[index + 1] = temp2;
    setNames(newNames);
  };
  return (
    <div>
      <h1 className="text-[30px] font-bold mb-4 mt-[20px]">Test Page</h1>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
      <button onClick={handleAddName}>Add Name</button>
      <ul>
        {names.map((student, index) => (
          <li key={index}>
            {editingName === index ? (
              // fragment tag
              <>
                <input
                  type="text"
                  value={editInputValue}
                  onChange={handleEditInputChange}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save Edit</button>
                <button onClick={() => handleToggleEdit(-1)}>
                  Cancel Edit
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={student.graduated}
                  onChange={() => handleToggleGraduated(index)}
                />
                <span
                  onClick={() => handleToggleEdit(index)}
                  style={{
                    textDecoration: student.graduated ? "line-through" : "none",
                  }}
                >
                  {student.name}
                </span>
                <button
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                >
                  up
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  disabled={index === names.length - 1}
                >
                  down
                </button>
              </>
            )}
            <button onClick={() => handleDeleteName(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
