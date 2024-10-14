import { Nutrients, ScaleNutrients } from "./nutrients";

export interface Eatable {
  name: string;
  brand?: string;
  picture?: string;
  nutrients: Nutrients;
  quantity?: number; // multiple of serving size.
  serving?: {
    name: string; // e.g. scoop or count, etc.
    grams: number; // in grams
  };
}

export function PortionEatable(eatable: Eatable): Nutrients {
  const { nutrients, quantity, serving } = eatable;
  const { grams } = nutrients;

  let scale = 1;
  if (grams && serving && quantity) {
    scale = (serving.grams * quantity) / grams;
  } else {
    console.warn("unsupported scaling in nutrients", eatable);
  }

  return ScaleNutrients(nutrients, scale);
}

export const OrgainVanillaProtein: Eatable = {
  brand: "Orgain",
  name: "Vanilla Protein",
  nutrients: {
    grams: 46,
    calories: 150,
    fat: 3.5,
    saturated: 0.05,
    sodium: 390,
    carbs: 15,
    fiber: 4,
    protein: 21,
  },
  serving: {
    name: "scoop(s)",
    grams: 23,
  },
  quantity: 2,
};

export const OrgainPerfectMealChocolate: Eatable = {
  brand: "Orgain",
  name: "Perfect Meal Chocolate",
  nutrients: {
    grams: 70,
    calories: 250,
    fat: 8,
    saturated: 1.5,
    polyunsaturated: 1.5,
    monounsaturated: 4,
    carbs: 30,
    fiber: 10,
    sugar: 6,
    addedSugar: 5,
    protein: 25,
  },
  serving: {
    name: "scoop(s)",
    grams: 35,
  },
  quantity: 2,
};

export const NakedPB: Eatable = {
  brand: "Naked",
  name: "Peanut butter powder",
  nutrients: {
    grams: 15,
    calories: 60,
    fat: 2,
    carbs: 4,
    fiber: 2,
    protein: 9,
  },
  serving: {
    name: "scoop(s)",
    grams: 15,
  },
  quantity: 1,
};

export const POWDERS = [
  OrgainPerfectMealChocolate,
  OrgainVanillaProtein,
  NakedPB,
];

export const FrozenBlueberries: Eatable = {
  name: "Frozen Blueberries",
  nutrients: {
    grams: 140,
    calories: 70,
    fat: 1,
    carbs: 17,
    fiber: 4,
    sugar: 12,
  },
  serving: {
    name: "cup(s)",
    grams: 140,
  },
  quantity: 0.25,
};
