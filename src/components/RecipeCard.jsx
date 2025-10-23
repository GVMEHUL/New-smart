import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [servingSize, setServingSize] = useState(recipe.servings || 1);

  const handleServingChange = (e) => {
    setServingSize(e.target.value);
  };

  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      
      <div className="recipe-info">
        <p><strong>Diet Type:</strong> {recipe.diet || "General"}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty || "Medium"}</p>
        <p><strong>Cooking Time:</strong> {recipe.time || "N/A"} mins</p>
      </div>

      <div className="nutrition">
        <h4>Nutrition Information (per serving)</h4>
        <ul>
          <li>Calories: {recipe.nutrition?.calories || "N/A"}</li>
          <li>Protein: {recipe.nutrition?.protein || "N/A"} g</li>
          <li>Carbs: {recipe.nutrition?.carbs || "N/A"} g</li>
          <li>Fat: {recipe.nutrition?.fat || "N/A"} g</li>
        </ul>
      </div>

      <div className="serving-control">
        <label>Serving Size: </label>
        <input
          type="number"
          min="1"
          value={servingSize}
          onChange={handleServingChange}
        />
      </div>

      <h4>Ingredients (adjusted for {servingSize} servings)</h4>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>
            {ing.quantity
              ? `${(ing.quantity * servingSize) / (recipe.servings || 1)} ${ing.unit} ${ing.name}`
              : ing.name}
          </li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
