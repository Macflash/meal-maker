import React from "react";

export type withChildren<T extends object> = T & { children?: React.ReactNode };

export function Collapsable({
  title,
  children,
  startExpanded = false,
}: withChildren<{
  title: string;
  startExpanded?: boolean;
}>) {
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
