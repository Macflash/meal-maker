import { Nutrients } from "./nutrients";

export interface ServingSizes {
  gram: 1;
  oz: 28;
  cup?: number;
  stick?: number;
  oneMedium?: number; // like one medium egg or apple
}

export const DEFAULT_SIZES: ServingSizes = {
  gram: 1,
  oz: 28,
};

export interface Food {
  name: string; // Ideally this is unique!

  /** nutrient name -> amount, in whatever unit makes sense for that nutrient. */
  nutrients: Nutrients;

  common_sizes?: ServingSizes;
}

const STRAWBERRIES: Food = {
  name: "Strawberries",
  nutrients: {
    grams: 180,
    calories: 58,
    fat: 0.5,
    carbs: 13.8,
    fiber: 3.6,
    sugar: 8.8,
    protein: 1.2,
  },
};

export const Foods: Food[] = [STRAWBERRIES];

export interface Ingredient {
  food: Food;
  grams: number;
}

export interface Recipe {
  name: string;

  /** 0 is same as 1. */
  servings?: number;

  /** Like 1lb of beef in a batch of tacos. */
  ingredients?: Ingredient[];

  /** Like toppings, e.g. 1 tortilla and 1oz of cheese per taco. */
  toppings?: Ingredient[];
}

export const RECIPES: Recipe[] = [
  {
    name: "Smoothie",
    servings: 1,
    ingredients: [{ food: STRAWBERRIES, grams: 2 * DEFAULT_SIZES.oz }],
  },
];
