import Foods from "./food_data.json";

interface FoodsJson {
  FoundationFoods: FoundationFood[];
}

interface FoundationFood {
  description: string; // main name

  //   dataType: string; // Foundation?
  //   foodClass: string; // FinalFood

  foodNutrients: FoodNutrient[];

  foodPortions: {}[];
}

interface FoodNutrient {
  amount: number;
  nutrient: Nutrient;
}

interface Nutrient {
  name: string;
  unitName: string;
}

interface Food {
  name: string;
  portion?: number; // gram
  // serving descriptions? e.g. tbsp, whole, etc?

  calories: number;

  protein: number;

  fat: number;

  saturated: number;
  monounsaturated: number;
  polyunsaturated: number;

  sugar: number;

  fiber: number;
}

function getNutrient(
  food: FoundationFood,
  cb: (nutrient: Nutrient) => boolean
) {
  return food.foodNutrients.find((n) => cb(n.nutrient))?.amount ?? 0;
}

function withName(name: string) {
  return (n: Nutrient) => n.name == name;
}

function processFood(food: FoundationFood): Food {
  const result: Food = {
    name: food.description,

    calories: getNutrient(food, (n) => n.unitName == "kcal"),
    protein: getNutrient(food, withName("Protein")),

    fat: getNutrient(food, withName("Total lipid (fat)")),
    saturated: getNutrient(food, withName("Fatty acids, total saturated")),
    monounsaturated: getNutrient(
      food,
      withName("Fatty acids, total monounsaturated")
    ),
    polyunsaturated: getNutrient(
      food,
      withName("Fatty acids, total polyunsaturated")
    ),

    sugar: getNutrient(food, withName("Sugars, Total")),
    fiber: getNutrient(food, withName("Fiber, total dietary")),
  };

  // if(!result.calories){
  //   result.calories =
  // }

  return result;
}

export function processFoodJson() {
  const { FoundationFoods } = Foods as FoodsJson;
  console.log(FoundationFoods.filter((f) => f.foodPortions?.length > 1));

  console.log(
    FoundationFoods[0].foodNutrients
      .filter((f) => f.amount)
      .map((f) => `${f.nutrient.name}: ${f.amount}`)
  );

  const foods = FoundationFoods.map(processFood);
  console.log("Foods", foods);

  console.log(
    "issues:",
    foods
      .filter((f) => !f.calories)
      .map((f) => FoundationFoods.find((ff) => f.name == ff.description))
  );

  // It's all of them!
  //   console.log(
  //     "Foundation",
  //     FoundationFoods.filter((f) => f.dataType == "Foundation")
  //   );
  //   console.log(
  //     "FinalFood",
  //     FoundationFoods.filter((f) => f.foodClass == "FinalFood")
  //   );
}
