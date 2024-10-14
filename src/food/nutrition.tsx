import { Nutrient, Nutrients } from "./nutrients";
import { percent, round, unit, name } from "./util";

export const DAILY_TARGET: Nutrients = {
  calories: 2000,
  protein: 100,
  fiber: 40,
  fat: 80,
  saturated: 20,
  addedSugar: 25,
  sugar: 40,
};

export function NutritionFacts({
  nutrients,
  percents,
}: {
  nutrients: Nutrients;
  percents?: Nutrients;
}) {
  function row(nutrient: Nutrient, indent = false) {
    return (
      <NutritionRow
        nutrient={nutrient}
        nutrients={nutrients}
        percents={percents}
        indent={indent}
      />
    );
  }

  return (
    <div
      style={{
        width: 300,
        border: "1px solid black",
        padding: 5,
        margin: 5,
        textAlign: "left",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid black",
          fontWeight: 750,
          fontSize: 24,
        }}
      >
        Daily Nutrition Facts
      </div>
      <div
        style={{
          borderBottom: "10px solid black",
          fontStyle: "italic",
          padding: 2,
        }}
      >
        Based on a 2000 calorie diet
      </div>
      <CalorieRow calories={nutrients.calories} />
      <div
        style={{
          textAlign: "right",
          fontSize: 12,
          fontWeight: 800,
          padding: 2,
        }}
      >
        % Daily Value
      </div>

      {row(Nutrient.fat)}
      {row(Nutrient.saturated, true)}
      {row(Nutrient.polyunsaturated, true)}
      {row(Nutrient.monounsaturated, true)}

      {row(Nutrient.cholesterol)}
      {row(Nutrient.sodium)}

      {row(Nutrient.carbs)}
      {row(Nutrient.fiber, true)}
      {row(Nutrient.sugar, true)}
      {row(Nutrient.addedSugar, true)}

      {row(Nutrient.protein)}
    </div>
  );
}

function CalorieRow({ calories = 0 }: { calories?: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: 24,
        fontWeight: 700,
        borderBottom: "5px solid black",
      }}
    >
      <div>Calories</div>
      <div>{calories}</div>
    </div>
  );
}

function NutritionRow({
  nutrient,
  nutrients,
  percents,
  indent,
}: {
  nutrient: Nutrient;
  nutrients?: Nutrients;
  percents?: Nutrients;
  indent?: boolean;
}) {
  const value = nutrients?.[nutrient];
  if (!value) return <div></div>;

  const percentage = percents?.[nutrient];
  return (
    <div style={{ display: "flex", borderTop: "1px solid black", padding: 3 }}>
      <div
        style={{
          fontWeight: indent ? undefined : 700,
          marginRight: 5,
          marginLeft: indent ? 16 : 0,
        }}
      >
        {name(nutrient)}
      </div>
      <div>
        {round(value, 1)}
        {unit(nutrient)}
      </div>
      {percentage !== undefined ? (
        <div style={{ marginLeft: "auto", fontWeight: 700 }}>
          {percent(percentage)}
        </div>
      ) : null}
    </div>
  );
}
