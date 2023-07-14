import { Link } from "react-router-dom";
import Button from "./components/Button";

export default function App() {
  return (
    <main>
      <h1>Hello! I am Ego Maragustaf</h1>
      <p>This is Epic Shoes</p>
      <div className="flex gap-6">
        <Button>
          <Link to="/products">Add Products</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/showproducts">All Products</Link>
        </Button>
      </div>
    </main>
  );
}
