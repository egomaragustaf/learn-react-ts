import { useSearchParams } from "react-router-dom";

interface Props {
  action?: string;
  placeholder?: string;
}

export function SearchFormProduct({
  action = "/search",
  placeholder = "Search",
}: Props) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <form action={action} className="w-full">
      <fieldset className="relative flex items-center gap-4">
        <label htmlFor="productSearch" className="dark:text-white text-black">
          Search
        </label>
        <input
          id="productSearch"
          name="q"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          defaultValue={query}
          className="block text-black max-w-2xl p-2 text-lg"
        />
      </fieldset>
    </form>
  );
}
