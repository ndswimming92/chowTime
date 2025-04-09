// This file defines the Meal interface used in the application.

  interface Meal {
    id: number;
    name: string;
    mealNumber: number;
    category: "Breakfast" | "Lunch" | "Dinner";
    ingredients: string[];
    prepTime: number;
    cookTime: number;
    servings: number;
    prepInstructions: string;
    cookingInstructions: string;
  }