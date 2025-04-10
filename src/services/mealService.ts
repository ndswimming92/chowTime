import { readMealsJson } from '../utils/fileHandler';
import type { Meal } from '../types/meal';

export async function getFormattedMeals(): Promise<string> {
  const meals = await readMealsJson();
  return meals
    .map(
      (Meal) =>
        `${Meal.name} (${Meal.category})
      - Prep Time: ${Meal.prepTime} mins
      - Cook Time: ${Meal.cookTime} mins
      - Ingredients: ${Meal.ingredients.join(', ')}
      - Servings: ${Meal.servings}
      `,
    )
    .join('\n--------------------------------------------\n');
}
