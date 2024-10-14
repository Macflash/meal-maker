export enum Nutrient {
  grams = "grams", // Used to scale the nutrition.

  calories = "calories",

  fat = "fat",
  saturated = "saturated",
  monounsaturated = "monounsaturated",
  polyunsaturated = "polyunsaturated",

  cholesterol = "cholesterol",
  sodium = "sodium",

  carbs = "carbs",
  sugar = "sugar",
  addedSugar = "addedSugar",
  fiber = "fiber",

  protein = "protein",
}

export type Nutrients = Partial<Record<Nutrient, number>>;

export interface NutrientValue {
  nutrient: Nutrient;
  value: number;
}

export function nutrientsToArray(nutrients: Nutrients): NutrientValue[] {
  const list: NutrientValue[] = [];
  for (const n in nutrients) {
    const nutrient = n as Nutrient;
    const value = nutrients[nutrient];
    if (value == undefined) continue;
    list.push({ nutrient, value });
  }

  return list;
}

export function DivideNutrients(a: Nutrients, b: Nutrients): Nutrients {
  const divided: Nutrients = {};
  for (const nutrient in b) {
    const n = nutrient as Nutrient;
    const value = a[n];
    const divisor = b[n];
    if (value == undefined) continue;
    if (divisor == undefined) continue;
    divided[n] = value / divisor;
  }

  return divided;
}

export function ScaleNutrients(nutrients: Nutrients, scale: number): Nutrients {
  const scaled = { ...nutrients };
  if (scale === 1) return scaled;
  for (const nutrient in scaled) {
    const n = nutrient as Nutrient;
    const value = scaled[n];
    if (value !== undefined) scaled[n] = value * scale;
  }

  return scaled;
}

export function SumNutrients(nutrientsList: Nutrients[]): Nutrients {
  const sumNutrients: Nutrients = {};
  for (const nutrients of nutrientsList) {
    for (const nutrient in nutrients) {
      const n = nutrient as Nutrient;
      const existingValue = sumNutrients[n] ?? 0;
      const value = nutrients[n];
      if (value !== undefined) sumNutrients[n] = existingValue + value;
    }
  }

  return sumNutrients;
}
