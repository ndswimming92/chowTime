import { readMealsJson } from '../utils/fileHandler';

export async function getFormattedMeals(): Promise<string> {
  const meals = await readMealsJson();
  return meals
    .map(
      (Meal) =>
        `${Meal.name}  (Meal #${Meal.mealNumber})\n
      📅 Added: ${new Date(Meal.dateAdded).toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
      📂 Category: ${Meal.category}
      👥 Servings: ${Meal.servings}
      🕒 Prep Time: ${Meal.prepTime} mins
      🔥 Cook Time: ${Meal.cookTime} mins \n
      Ingredients: 
      ${Meal.ingredients.join(', ')} \n
      Prep Instructions: 
      ${Meal.prepInstructions} \n
      Cooking Instructions: 
      ${Meal.cookingInstructions} \n
      Notes: 
      ${Meal.Notes || 'No notes available'} \n
      `,
    )
    .join('\n--------------------------------------------\n\n');
}
