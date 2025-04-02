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
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder={placeholder || 'Enter a plant here!'} 
          onChange={handleChange}/>
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  );
}