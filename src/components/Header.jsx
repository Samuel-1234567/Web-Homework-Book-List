import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <ul className="flex gap-[0] border-b border-gray-300 pb-[20px]">
        <li className="px-3 py-1 bg-transparent text-blue-600 hover:bg-gray-100 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 py-1 bg-transparent hover:bg-gray-100 rounded-md">
          <Link to="/book-list">Book List</Link>
        </li>
        <li className="px-3 py-1 bg-transparent hover:bg-gray-100 rounded-md">
          <Link to="/test-page">Test Page</Link>
        </li>
        <li className="px-3 py-1 bg-transparent hover:bg-gray-100 rounded-md ml-auto font-bold">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
