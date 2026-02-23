import { Outlet } from "react-router";

const GamePage = () => {
  const [redScore, setRed] = setCount(0);
  const [blueScore, setBlue] = setCount(0);
  return (
    <div>
      <h1>Game Page</h1>
      <h1>Red Score: {redScore}</h1>
      <h1>Blue Score: {blueScore}</h1>
      <button
        onClick={() => {
          setRed(redScore + 1);
        }}
      >
        Add Red
      </button>
      <Outlet />
    </div>
  );
};

export default GamePage;
