import { Eatable } from "../eatable";

export const POWDERS: ReadonlyArray<Eatable> = [
  {
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
    ...scoop(46, 2),
  },
  {
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
    ...scoop(70, 2),
  },
  {
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
    ...scoop(15, 1),
  },
];

// Adds data for a given number of scoops and the serving grams.
function scoop(totalGrams: number, quantity: number) {
  return {
    serving: {
      name: "scoop(s)",
      grams: totalGrams / quantity,
    },
    quantity,
  };
}
