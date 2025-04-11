import { readMealsJson } from '../utils/fileHandler';

export async function getFormattedMeals(): Promise<string> {
  const meals = await readMealsJson();
  return meals
    .map(
      (Meal) =>
        `${Meal.name} | (${Meal.mealNumber})
      - Category: ${Meal.category}
      - Servings: ${Meal.servings}
      - Prep Time: ${Meal.prepTime} mins
      - Cook Time: ${Meal.cookTime} mins
      - Ingredients: ${Meal.ingredients.join(', ')}
      - Prep Instructions: ${Meal.prepInstructions}
      - Cooking Instructions: ${Meal.cookingInstructions}
      - Notes: ${Meal.Notes || 'No notes available'}
      - Added: ${new Date(Meal.dateAdded).toLocaleDateString()}
      `,
    )
    .join('\n--------------------------------------------\n\n');
}
