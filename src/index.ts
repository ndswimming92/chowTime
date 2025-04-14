import readline from 'readline';
import { getFormattedMeals } from './services/mealService';
import { getMealDetails } from './utils/getMealDetails';
import { addMeal } from './utils/fileHandler';

// Create an interface for input/output
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display the menu
export function showMenu() {
  console.clear();
  console.log('\x1b[1m\x1b[94m    Welcome to ChowTime!\x1b[0m');
  console.log('\n===== Meal App Menu =====');
  console.log('1. View All Meals');
  console.log('\x1b[92m2. Add a Meal');
  console.log('3. Generate Random Meal\x1b[0m');
  console.log('\x1b[91m4. Delete a meal');
  console.log('5. Exit\x1b[0m');
  console.log('=========================');
  askForChoice();
}

function askForChoice() {
  rl.question('\nEnter your choice (1-5): ', (choice) => {
    handleMenuChoice(choice);
    // askForChoice();
  });
}

// Function to handle user choices
async function handleMenuChoice(choice: string) {
  switch (choice) {
    case '1':
      console.log('\n\x1b[32mDisplaying all meals...\x1b[0m\n');
      try {
        const formattedMeals = await getFormattedMeals();
        console.log(formattedMeals || 'No meals found.');
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
      break;
    case '2':
      console.log('Adding a new meal...\n');
      try {
        const newMeal = await getMealDetails();
        await addMeal(newMeal);
      } catch (error) {
        console.error('❌ Failed to add meal:', error);
      }
      break;
    case '3':
      console.log('Generating a random meal...');
      break;
    case '4':
      console.log('Deleting a meal...');
      break;
    case '5':
      console.log('Goodbye!');
      rl.close();
      return;
    default:
      console.error(
        '❌ Invalid number selected. Please select a valid number: (1 - 5)',
      );
      break;
  }

  // If not exit, show menu again
  if (choice !== '5') {
    askForChoice();
  }
}

// Start the menu
showMenu();
