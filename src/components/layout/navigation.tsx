import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="py-4">
      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
      </ul>
    </nav>
  );
}
