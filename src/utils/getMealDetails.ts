import readline from 'readline';
import { type Meal, MealCategory } from '../types/meal';
import { rl } from '../index';

// Create a readline interface

// Function to ask a question and return a promise
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

export async function getMealDetails() {
  const name = await askQuestion('What is the name of your meal?: ');
  const categoryInput = await askQuestion(
    'When do you eat this meal? (Breakfast/Lunch/Dinner): ',
  );
  const ingredients = await askQuestion(
    'Please enter ingredients (comma-separated): ',
  );
  const prepTime = await askQuestion('Enter prep time (in minutes): ');
  const cookTime = await askQuestion('Enter cook time (in minutes): ');
  const servings = await askQuestion('How many people will this feed?: ');
  const prepInstructions = await askQuestion('Enter prep instructions: ');
  const cookingInstructions = await askQuestion('Enter cooking instructions: ');

  return {
    name,
    mealNumber: Number(Math.floor(Math.random() * 10000)),
    id: Number(Math.floor(Math.random() * 10000)),
    category: categoryInput as MealCategory,
    ingredients: ingredients.split(',').map((i) => i.trim()),
    prepTime: Number(prepTime),
    cookTime: Number(cookTime),
    servings: Number(servings),
    prepInstructions,
    cookingInstructions,
  };
}
