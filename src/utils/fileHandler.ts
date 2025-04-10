import type { BunFile } from 'bun';
import { writeFile } from 'fs/promises';
import type { Meal } from '../types/meal';

const filePath = `${import.meta.dir}/../data/meals.json`;

export async function readMealsJson(): Promise<any[]> {
  const file: BunFile = Bun.file(filePath);

  if (!(await file.exists())) {
    return [];
  }

  const data = await file.json();

  // Check if the data is an array, and return it, else return an empty array
  if (Array.isArray(data)) {
    return data;
  } else {
    console.error(
      'Data in meals.json is not an array, returning an empty array',
    );
    return [];
  }
}

export async function addMeal(meal: Meal) {
  const meals = await readMealsJson(); // Read existing meals

  // Ensure meals is an array before pushing
  if (!Array.isArray(meals)) {
    console.error('Meals data is not an array!');
    return;
  }

  meals.push(meal); // Add new meal

  // Write back to the file
  await writeFile(filePath, JSON.stringify(meals, null, 2));
  console.log('✅ Meal added successfully!');
}
