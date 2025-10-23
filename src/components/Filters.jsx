import React from "react";

export default function Filters({ filters, setFilters }) {
  return (
    <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
      <select value={filters.diet} onChange={(e) => setFilters({ ...filters, diet: e.target.value })}>
        <option value="any">Any diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-free</option>
      </select>

      <select value={filters.difficulty} onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}>
        <option value="any">Any difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <input
        type="number"
        placeholder="Max time (min)"
        value={filters.maxTime || ""}
        onChange={(e) => setFilters({ ...filters, maxTime: e.target.value })}
        style={{ width: 140 }}
      />

      <button onClick={() => setFilters({ diet: "any", difficulty: "any", maxTime: "" })}>Clear Filters</button>
    </div>
  );
}
