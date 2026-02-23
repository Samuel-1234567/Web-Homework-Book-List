import { useState } from "react";

const BookPage = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.key === "Enter") {
      handleAddName();
    }
  };
  const [names, setNames] = useState([]);
  const handleAddName = () => {
    const newNames = [...names];
    newNames.push({ name: inputValue, read: false });
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
    if (index === -1) {
      setEditingName(-1);
      setEditInputValue("");
    } else {
      setEditInputValue(names[index].name);
      setEditingName(index);
    }
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
  const handleToggleRead = (index) => {
    const newNames = [...names];
    newNames[index].read = !newNames[index].read;
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
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddName();
    }
  };
  return (
    <div>
      <h1 className="text-[30px] font-bold mb-4 mt-[20px]">My Book Tracker</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="border border-gray-300 rounded px-3 py-2 flex-grow "
        />
        <button
          onClick={handleAddName}
          className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add Book
        </button>
      </div>
      <ul>
        {names.map((student, index) => (
          <li
            key={index}
            className="flex items-center gap-2 py-3 border-b border-gray-200"
          >
            {editingName === index ? (
              // fragment tag
              <>
                <input
                  type="text"
                  value={editInputValue}
                  onChange={handleEditInputChange}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="border border-gray-300 rounded px-3 py-2 flex-grow "
                />
                <button
                  onClick={() => handleSaveEdit(index)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                >
                  Save Edit
                </button>
                <button
                  onClick={() => handleToggleEdit(-1)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded text-sm cursor-pointer"
                >
                  Cancel Edit
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleToggleEdit(index)}
                  style={{
                    textDecoration: student.read ? "line-through" : "none",
                  }}
                  className="mr-auto cursor-pointer hover:text-blue-500"
                >
                  {student.name} --
                  {student.read ? "Read" : "Not Read"}
                </span>
                <button
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded text-sm cursor-pointer"
                >
                  ↑ Up
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  disabled={index === names.length - 1}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded text-sm cursor-pointer"
                >
                  ↓ Down
                </button>
                <button onClick={() => handleToggleRead(index)}>
                  {names[index].read ? (
                    <p className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm cursor-pointer">
                      Mark as Unread
                    </p>
                  ) : (
                    <p className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm cursor-pointer">
                      Mark as Read
                    </p>
                  )}
                </button>
              </>
            )}
            <button
              onClick={() => handleDeleteName(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookPage;
