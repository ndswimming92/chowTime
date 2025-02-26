const filePath = `${import.meta.dir}/data/meals.json`;
const meals = await Bun.file(filePath).json();

console.log("Meals:", meals);
