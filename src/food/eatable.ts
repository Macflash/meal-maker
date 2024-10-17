import { Nutrients, ScaleNutrients } from "./nutrients";

export enum Meals {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
  dessert = "dessert",
  snack = "snack",
}

export interface Eatable {
  name: string;
  brand?: string;
  picture?: string;
  nutrients: Nutrients;
  quantity?: number; // multiple of serving size.
  serving?: {
    name: string; // e.g. scoop or count, etc.
    grams: number; // in grams
    increment?: number; // Used for how big a step should be?
  };

  // Optional tags for grouping foods in the pantry, or suggesting good foods to help balance your day.
  tags?: ReadonlySet<Meals>;
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
