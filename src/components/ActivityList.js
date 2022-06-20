import React, { useState } from "react";
import { ActivityItem } from "./ActivityItem";

export function ActivityList({ typeLists }) {
  console.log(typeLists);
  console.log(Object.entries(typeLists));

  return (
    <>
      {Object.entries(typeLists).map((typeListItem) => {
        return <ActivityItem typeListItem={typeListItem} />;
      })}
    </>
  );
}
