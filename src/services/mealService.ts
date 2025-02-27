import { readMealsJson } from '../utils/fileHandler';

export async function getFormattedMeals(): Promise<string> {
  const meals = await readMealsJson();
  return meals
    .map(
      (meal) =>
        `${meal.name} (${meal.category})
      - Prep Time: ${meal.prepTime} mins
      - Cook Time: ${meal.cookTime} mins
      - Ingredients: ${meal.ingredients.join(', ')}
      - Servings: ${meal.servings}
      `,
    )
    .join('\n--------------------------------------------\n');
}
