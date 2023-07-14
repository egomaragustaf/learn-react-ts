import { Link } from "react-router-dom";
import Button from "./Button";

export default function About() {
  return (
    <div>
      <h1>History</h1>
      <p>This is history of this e-commerce</p>
      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
    </div>
  );
}
