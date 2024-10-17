import { Eatable } from "../eatable";

export const FREEZER: ReadonlyArray<Eatable> = [
  {
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
      increment: 0.25,
    },
    quantity: 0.25,
  },
];
