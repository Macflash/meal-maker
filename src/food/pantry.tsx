import React from "react";
import { Eatable } from "./eatable";
import { POWDERS } from "./eatables/powders";
import { FREEZER } from "./eatables/freezer";

export function Pantry({ onAdd }: { onAdd?: (added: Eatable) => void }) {
  return (
    <div>
      <PantrySection title="Powders" eatables={POWDERS} onAdd={onAdd} />
      <PantrySection title="Freezer" eatables={FREEZER} onAdd={onAdd} />
    </div>
  );
}

function PantrySection({
  onAdd,
  eatables,
  title,
}: {
  title: string;
  eatables: ReadonlyArray<Eatable>;
  onAdd?: (added: Eatable) => void;
}) {
  return (
    <Collapsable title={title} startExpanded>
      {eatables.map((p) => (
        <div style={{ backgroundColor: "#EEE", margin: "5px 0" }}>
          {onAdd ? (
            <button style={{ marginRight: 5 }} onClick={() => onAdd?.(p)}>
              +
            </button>
          ) : undefined}
          <span style={{ fontWeight: 600 }}>{p.brand}</span>
          {(p.brand ? " " : "") + p.name}
        </div>
      ))}
    </Collapsable>
  );
}

function Collapsable({
  title,
  children,
  startExpanded = false,
}: {
  title: string;
  children?: React.ReactNode;
  startExpanded?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(startExpanded);
  return (
    <div style={{ border: "1px solid black", margin: 5 }}>
      <div
        style={{
          display: "flex",
          padding: 5,
          backgroundColor: "#EEE",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div>{expanded ? "▲" : "▼"}</div>
        <div style={{ fontWeight: 700, marginLeft: 5 }}>{title}</div>
      </div>
      {expanded ? (
        <div style={{ borderTop: "1px solid black", padding: 5 }}>
          {children}
        </div>
      ) : undefined}
    </div>
  );
}
