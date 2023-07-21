import { useSearchParams } from "react-router-dom";

interface Props {
  action?: string;
  placeholder?: string;
}

export function SearchFormProduct({
  action = "/search",
  placeholder = "Search products...",
}: Props) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <form action={action} className="w-full flex justify-center items-center">
      <fieldset className="relative flex justify-center items-center gap-4 w-full max-w-4xl ">
        <label htmlFor="productSearch">🔎</label>
        <input
          id="productSearch"
          name="q"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          defaultValue={query}
          className="block text-black w-full rounded-md px-2 py-1 text-lg border-slate-950 border-2"
        />
      </fieldset>
    </form>
  );
}
