import React from "react";
import { Eatable } from "./eatable";

export function Portion({
  eatable,
  onChange,
  onRemove,
}: {
  eatable: Eatable;
  onChange?: (newEatable: Eatable) => void;
  onRemove?: () => void;
}) {
  const { brand, name, quantity, serving } = eatable;
  return (
    <div style={{ border: "1px solid black", padding: 5, display: "flex" }}>
      {brand ? (
        <div style={{ fontWeight: 500, paddingRight: 5 }}>{brand}</div>
      ) : null}
      <div style={{ marginRight: 5 }}>{name}</div>
      <input
        min={0}
        style={{ width: 50, margin: "0 5px", marginLeft: "auto" }}
        type="number"
        value={quantity}
        onChange={(ev) => {
          onChange?.({ ...eatable, quantity: ev.target.valueAsNumber });
        }}
      />{" "}
      {serving?.name}
      {onRemove ? (
        <button style={{ marginLeft: 5 }} onClick={onRemove}>
          X
        </button>
      ) : undefined}
    </div>
  );
}
