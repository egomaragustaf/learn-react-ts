import { Link } from "react-router-dom";

import { Button, Layout } from "../components";

export default function AboutRoute() {
  return (
    <Layout>
      <h1>History</h1>
      <p>This is history of this e-commerce</p>
      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
    </Layout>
  );
}
