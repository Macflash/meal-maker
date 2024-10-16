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
