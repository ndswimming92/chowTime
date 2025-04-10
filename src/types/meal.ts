// This file defines the Meal interface used in the application.

export enum MealCategory {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
  Dessert = 'Dessert',
}
export type Meal = {
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
};

export type MealInput = Omit<Meal, 'id' | 'mealNumber'>;
export type MealOutput = Omit<Meal, 'prepInstructions' | 'cookingInstructions'>;
