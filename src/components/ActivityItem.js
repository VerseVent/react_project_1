import React, { useState } from "react";

export function ActivityItem({ typeListItem, selectedClick, id, selected }) {
  console.log(typeListItem);
  const itemsTitle = typeListItem[0];
  const items = Array.from(typeListItem[1]);

  function renderList() {
    return (
      <div>
        <h3
          className="activity-item__title"
          onClick={() => {
            selectedClick(id);
          }}
        >
          {itemsTitle}
          {"(" + items.length + ")"}
        </h3>
        <ul className={selected ? "type-list" : "type-list visually-hidden"}>
          {items.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    );
  }

  return <div>{renderList()}</div>;
}
