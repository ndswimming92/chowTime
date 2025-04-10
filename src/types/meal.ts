// This file defines the Meal interface used in the application.

enum MealCategory {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
}
  interface Meal {
    id: number;
    name: string;
    mealNumber: number;
    category: MealCategory;
    ingredients: string[];
    prepTime: number;
    cookTime: number;
    servings: number;
    prepInstructions: string;
    cookingInstructions: string;
  }