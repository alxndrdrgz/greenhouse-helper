import { useState } from "react";

export default function SearchInput({ onSearch, placeholder }){
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder={placeholder} 
          onChange={handleChange}
          className="border-2 p-2"
        />
        <button 
          type="submit" 
          className="font-bold bg-black text-white px-3 py-2 ml-2 rounded-md hover:bg-white hover:text-black border-2"
        >
          submit
        </button>
      </form>
    </div>
  );
}