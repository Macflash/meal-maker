import React from "react";
import { Nutrient, Nutrients } from "./nutrients";
import { name } from "./util";

export function Time() {
  const now = new Date().getTime();

  const morning = new Date();
  morning.setHours(0);
  morning.setMinutes(0);
  morning.setSeconds(0);
  morning.setMilliseconds(0);

  const night = new Date();
  night.setHours(23);
  night.setMinutes(59);
  night.setSeconds(59);
  night.setMilliseconds(999);

  const length = night.getTime() - morning.getTime();
  const percent = (100 * (now - morning.getTime())) / length;
  console.log(percent);

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      <div style={{ width: 100 }}>Day: </div>
      <div style={{ flex: "auto", alignContent: "center" }}>
        <ProgressBar percent={percent} color="grey" />
      </div>
    </div>
  );
}

export function NutrientPercent({
  nutrient,
  percents,
}: {
  nutrient: Nutrient;
  percents: Nutrients;
}) {
  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      <div style={{ width: 100 }}>{name(nutrient)}: </div>
      <div style={{ flex: "auto", alignContent: "center" }}>
        <ProgressBar percent={(percents[nutrient] ?? 0) * 100} color="grey" />
      </div>
    </div>
  );
}

export function ProgressBar({
  percent,
  color,
}: {
  percent: number;
  color: string;
}) {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <div
        style={{ width: `${percent}%`, minHeight: 10, backgroundColor: color }}
      ></div>
    </div>
  );
}
