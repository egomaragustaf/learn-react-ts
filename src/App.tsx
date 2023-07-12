import Button from "./components/Button";

export default function App() {
  return (
    <main>
      <h1 className="dark:text-slate-200 text-black text-lg">
        Hello! I am Ego Maragustaf
      </h1>
      <p>This is Epic Shoes</p>
      <Button>
        <a href="/products">Products</a>
      </Button>
      <Button>
        <a href="/about">About</a>
      </Button>
    </main>
  );
}
