export function matchRecipes(recipes, userIngredients, filters){
  const userSet = new Set(userIngredients.map(i => i.toLowerCase()));
  return recipes
    .filter(r => {
      if(filters.diet && filters.diet !== 'any'){
        if(!r.dietary || !r.dietary.includes(filters.diet)) return false;
      }
      if(filters.difficulty !== 'any' && r.difficulty !== filters.difficulty) return false;
      if(r.time_minutes > (filters.maxTime || Infinity)) return false;
      return true;
    })
    .map(r => {
      const recipeIngr = r.ingredients.map(i => i.name.toLowerCase());
      const matched = recipeIngr.filter(i => userSet.has(i)).length;
      const score = matched / recipeIngr.length;
      return {...r, score, matchedCount: matched};
    })
    .sort((a,b)=> b.score - a.score || b.matchedCount - a.matchedCount);
}
