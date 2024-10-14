import { Nutrient } from "./nutrients";

export function round(number: number, scale = 1) {
  return Math.round(number * scale) / scale;
}

export function percent(number: number, scale = 1) {
  return round(number * 100, scale) + "%";
}

const units: Partial<Record<Nutrient, string>> = {
  calories: "",
  sodium: "mg",
  cholesterol: "mg",
};

export function unit(nutrient: Nutrient): string {
  return units[nutrient] ?? "g";
}

const names: Partial<Record<Nutrient, string>> = {
  calories: "Calories",

  fat: "Total Fat",
  saturated: "Saturated Fat",
  polyunsaturated: "Polyunsaturated Fat",
  monounsaturated: "Monounsaturated Fat",

  sodium: "Sodium",
  cholesterol: "Cholesterol",

  carbs: "Total Carbohydrates",
  fiber: "Dietary Fiber",
  sugar: "Sugars",
  addedSugar: "Includes Added Sugars",

  protein: "Protein",
};

export function name(nutrient: Nutrient): string {
  return names[nutrient] ?? nutrient;
}
