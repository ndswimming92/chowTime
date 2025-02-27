import type { BunFile } from 'bun';

export async function readMealsJson(): Promise<any[]> {
  const filePath = `${import.meta.dir}/../data/meals.json`;
  const file: BunFile = Bun.file(filePath);
  return await file.json();
}
