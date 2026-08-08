import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">NETFLIX</h2>

      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
        <li>My List</li>
      </ul>

      <FaUserCircle size={35} color="white" />
    </nav>
  );
}

export default Navbar;