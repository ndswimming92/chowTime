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
      `\nWhen do you usually eat this meal?

  1. Breakfast  
  2. Lunch  
  3. Dinner  
  4. Snack  
  5. Dessert

👉 Please enter the number that matches the category (1-5): `,
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
    '\nPlease enter ingredients (comma-separated): ',
  );
  const prepTime = await askQuestion('\nEnter prep time (in minutes): ');
  const cookTime = await askQuestion('\nEnter cook time (in minutes): ');
  const servings = await askQuestion('\nHow many people will this feed?: ');
  const prepInstructions = await askQuestion('\nEnter prep instructions: ');
  const cookingInstructions = await askQuestion(
    '\nEnter cooking instructions: ',
  );
  const notes = await askQuestion('\nAny notes for this meal?: ');

  return {
    id: Number(Math.floor(Math.random() * 10000)),
    name,
    mealNumber: Number(Math.floor(Math.random() * 1000)),
    category: category as MealCategory,
    ingredients: ingredients.split(',').map((i) => i.trim()),
    prepTime: Number(prepTime),
    cookTime: Number(cookTime),
    servings: Number(servings),
    prepInstructions,
    cookingInstructions,
    notes: notes,
    dateAdded: new Date(),
  };
}
