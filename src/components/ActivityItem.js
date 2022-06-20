import React, { useState } from "react";

export function ActivityItem({ typeListItem }) {
  // console.log(typeListItem);
  const itemsTitle = typeListItem[0];
  const items = typeListItem[1];
  const [isVisible, setIsVisible] = useState(false);
  function renderList() {
    return (
      <div>
        <h3
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {itemsTitle}
          {"(" + items.length + ")"}
        </h3>
        <ul className={isVisible ? "type-list" : "type-list visually-hidden"}>
          {items.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    );
  }

  return <div>{renderList()}</div>;
}
