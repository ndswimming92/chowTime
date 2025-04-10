import type { BunFile } from 'bun';
import { writeFile } from 'fs/promises';

const filePath = `${import.meta.dir}/../data/meals.json`;

export async function readMealsJson(): Promise<any[]> {
  const file: BunFile = Bun.file(filePath);

  if (!(await file.exists())) {
    return [];
  }

  return await file.json();
}

export async function addMeal(meal: any) {
  const meals = await readMealsJson(); // Read existing meals
  meals.push(meal); // Add new meal

  // Write back to the file
  await writeFile(filePath, JSON.stringify(meals, null, 2));
  console.log('✅ Meal added successfully!');
}
