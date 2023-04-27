import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        SPA
      </Link>
      <div className="link">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/try">Try for free</Link>
      </div>
    </nav>
  );
}
export default Navbar;
