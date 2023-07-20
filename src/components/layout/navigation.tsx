import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-center items-center border-b-2">
      <nav className="py-4">
        <ul className="flex gap-6">
          <li className="hover:bg-slate-50 hover:text-black py-2 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-slate-50 hover:text-black py-2 px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-slate-50 hover:text-black py-2 px-4">
            <Link to="/products">All Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
