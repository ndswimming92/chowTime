import { type Meal, MealCategory } from '../types/meal';
import { rl } from '../index';

// Function to ask a question and return a promise
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

export async function getMealDetails() {
  const name = await askQuestion('What is the name of your meal?: ');

  let category: MealCategory | undefined;
  while (!category) {
    const categoryInput = await askQuestion(
      `When do you eat this meal?: 
    1. Breakfast 
    2. Lunch 
    3. Dinner 
    4. Snack 
    5. Dessert`,
    );

    const categoryMap: Record<string, MealCategory> = {
      '1': MealCategory.Breakfast,
      '2': MealCategory.Lunch,
      '3': MealCategory.Dinner,
      '4': MealCategory.Snack,
      '5': MealCategory.Dessert,
    };
    category = categoryMap[categoryInput];
    if (!category) {
      console.error(
        '❌ Invalid category selected. Please select a valid number: (1 - 5)',
      );
    }
  }

  const ingredients = await askQuestion(
    'Please enter ingredients (comma-separated): ',
  );
  const prepTime = await askQuestion('Enter prep time (in minutes): ');
  const cookTime = await askQuestion('Enter cook time (in minutes): ');
  const servings = await askQuestion('How many people will this feed?: ');
  const prepInstructions = await askQuestion('Enter prep instructions: ');
  const cookingInstructions = await askQuestion('Enter cooking instructions: ');
  const notes = await askQuestion('Any notes for this meal?: ');

  return {
    id: Number(Math.floor(Math.random() * 10000)),
    name,
    mealNumber: Number(Math.floor(Math.random() * 1000)),
    category: category || MealCategory.Breakfast,
    ingredients: ingredients.split(',').map((i) => i.trim()),
    prepTime: Number(prepTime),
    cookTime: Number(cookTime),
    servings: Number(servings),
    prepInstructions,
    cookingInstructions,
    notes: notes || 'No notes available',
    dateAdded: new Date(),
  };
}
