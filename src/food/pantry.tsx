import React from "react";

import { Eatable } from "./eatable";
import { POWDERS } from "./eatables/powders";
import { FREEZER } from "./eatables/freezer";
import { Collapsable } from "./collapsable";

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
