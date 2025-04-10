import readline from 'readline';

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
});

// Function to ask a question and return a promise
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

export async function getMealDetails() {
  const name = await askQuestion('What is the name of your meal?: ');
  const category = await askQuestion(
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
    category,
    ingredients: ingredients.split(',').map((i) => i.trim()),
    prepTime: Number(prepTime),
    cookTime: Number(cookTime),
    servings: Number(servings),
    prepInstructions,
    cookingInstructions,
  };
}
