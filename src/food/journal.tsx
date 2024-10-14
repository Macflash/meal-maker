import React from "react";
import { PortionEatable, Eatable } from "./eatable";
import { SumNutrients, DivideNutrients, Nutrient } from "./nutrients";
import { DAILY_TARGET, NutritionFacts } from "./nutrition";
import { Pantry } from "./pantry";
import { NutrientPercent, Time } from "./time";
import { Portion } from "./portion";

export function DailyJournal() {
  const [foodEaten, setFoodEaten] = React.useState<Eatable[]>([]);

  const summed = SumNutrients(foodEaten.map(PortionEatable));
  const percents = DivideNutrients(summed, DAILY_TARGET);

  return (
    <div>
      <Time />
      <NutrientPercent nutrient={Nutrient.calories} percents={percents} />
      <NutrientPercent nutrient={Nutrient.saturated} percents={percents} />
      <NutrientPercent nutrient={Nutrient.fiber} percents={percents} />
      <NutrientPercent nutrient={Nutrient.sugar} percents={percents} />
      <NutrientPercent nutrient={Nutrient.protein} percents={percents} />

      <div style={{ display: "flex" }}>
        <NutritionFacts nutrients={summed} percents={percents} />
        <div style={{ flex: "auto" }}>
          <div style={{ fontWeight: 600 }}>Food eaten today:</div>
          {foodEaten.map((eatable, i) => (
            <Portion
              key={i}
              eatable={eatable}
              onChange={(newEatable) => {
                const newFoods = [...foodEaten];
                newFoods[i] = newEatable;
                setFoodEaten(newFoods);
              }}
              onRemove={() => {
                const newFoods = [...foodEaten];
                newFoods.splice(i, 1);
                setFoodEaten(newFoods);
              }}
            />
          ))}
        </div>
      </div>
      <Pantry
        onAdd={(added: Eatable) => {
          setFoodEaten([...foodEaten, added]);
        }}
      />
    </div>
  );
}
