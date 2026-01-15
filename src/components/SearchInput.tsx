import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) return;

    onSearch(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 font-body max-w-2xl md:flex-row"
    >
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a place..."
        className="py-3 px-14 md:w-md rounded-lg bg-Neutral800 bg-[url(/images/icon-search.svg)] bg-no-repeat bg-position-[20px] text-Neutral300 placeholder:text-Neutral300 outline-0"
      />

      <button
        type="submit"
        className="p-3 md:px-8 transition-colors duration-300 rounded-lg cursor-pointer bg-Blue500 hover:bg-Blue700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
