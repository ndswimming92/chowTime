import type { BunFile } from 'bun'

export async function readMealsJson(): Promise<any[]> {
  const filePath = `${import.meta.dir}/../data/meals.json`
  const file: BunFile = Bun.file(filePath)
  console.log('File', file)
  return await file.json()
}
