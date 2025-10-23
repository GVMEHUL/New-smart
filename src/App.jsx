import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import recipesData from "./data/recipes.json"; 

const App = () => {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    if (!ingredients.trim()) {
      setError("Please enter at least one ingredient!");
      setFilteredRecipes([]);
      return;
    }
    setError("");

    const ingredientList = ingredients.toLowerCase().split(",").map(i => i.trim());
    const filtered = recipesData.filter(recipe => {
      const hasIngredient = recipe.ingredients.some(ing =>
        ingredientList.includes(ing.name.toLowerCase())
      );
      const matchesDiet = !diet || recipe.diet?.toLowerCase() === diet.toLowerCase();
      return hasIngredient && matchesDiet;
    });

    if (filtered.length === 0) {
      setError("No recipes found. Try different ingredients or diet type.");
    }

    setFilteredRecipes(filtered);
  };

  return (
    <div className="App">
      <h1>Smart Recipe Generator</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="">Select Diet Type</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <button onClick={handleGenerate}>Generate Recipes</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="recipe-results">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
