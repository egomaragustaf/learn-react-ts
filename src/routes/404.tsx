import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Layout } from "../components";

export default function ErrorPageRoute() {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center text-4xl gap-8">
        <h1>This page isn't available or 😢</h1>
        <p>{error.data}</p>
      </div>
    </Layout>
  );
}
