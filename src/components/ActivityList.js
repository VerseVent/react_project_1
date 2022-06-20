import React, { useState } from "react";
import { ActivityItem } from "./ActivityItem";

export function ActivityList({ typeLists }) {
  console.log(typeLists);
  console.log("Entries: ", Object.entries(typeLists));
  const [isListSelected, setIsListSelected] = useState([]);

  function handleClick(i) {
    console.log("In handle click: ", i);
    const prevSelectedValues = [...isListSelected];
    console.log("Arr:  ", prevSelectedValues);
    const updatedSelectedValues = [...prevSelectedValues].map(
      (e) => (e = false)
    );
    updatedSelectedValues[i] = !isListSelected[i];

    setIsListSelected([...updatedSelectedValues]);
  }
  return (
    <>
      {Object.entries(typeLists)
        .sort()
        .map((typeListItem, i) => {
          return (
            <ActivityItem
              key={i}
              id={i}
              selected={isListSelected[i]}
              typeListItem={typeListItem}
              selectedClick={handleClick}
            />
          );
        })}
    </>
  );
}
