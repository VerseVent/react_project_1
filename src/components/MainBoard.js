import React, { Component } from "react";
import { useState, useEffect } from "react";
import fetchActivities from "../service/fetchActivities";
import { ActivityItem } from "./ActivityItem";
import ReactLoading from "react-loading";
import { ActivityList } from "./ActivityList";

export function MainBoard() {
  const [currentActivity, setCurrentActivity] = useState();

  const [isClicked, setIsClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [positiveItems, setPositiveItems] = useState({});
  const [negativeItems, setNegativeItems] = useState({});

  useEffect(() => {
    fetchActivities()
      .then((res) => {
        setCurrentActivity(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isClicked]);
  const guessAnswer = true;

  function handleSetItem(res, setItem, items) {
    const { activity, type } = res;
    if (!items[type]) {
      setItem((prevState) => ({ ...prevState, [type]: [activity] }));
    } else {
      setItem((prevState) => ({
        ...prevState,
        [type]: [...prevState[type], activity],
      }));
    }
  }

  function handleActivitySelect(guessAnswer) {
    if (guessAnswer) {
      handleSetItem(currentActivity, setPositiveItems, positiveItems);

      setIsClicked(!isClicked);
    } else {
      handleSetItem(currentActivity, setNegativeItems, negativeItems);

      setIsClicked(!isClicked);
    }
  }
  return (
    <div className="content-container container">
      <h1>Choose what to do with it?</h1>
      <div className="current-activity">
        {isLoading ? (
          <ReactLoading
            className="disable-margins"
            type="spin"
            color={"black"}
            height={40}
            width={40}
          />
        ) : (
          <p>{currentActivity.activity}</p>
        )}
      </div>

      <div className="controls">
        <button
          disabled={isLoading}
          className="button-3"
          onClick={() => handleActivitySelect(guessAnswer)}
        >
          Select
        </button>
        <button
          disabled={isLoading}
          className="button-3 button-3--negative"
          onClick={() => handleActivitySelect(!guessAnswer)}
        >
          Reject
        </button>
      </div>

      <div className="lists-container">
        <ul className="activity-list">
          <h2>Selected activities</h2>
          <ActivityList typeLists={positiveItems} />
        </ul>
        <ul className="activity-list">
          <h2>Rejected activities</h2>
          <ActivityList typeLists={negativeItems} />
        </ul>
      </div>
    </div>
  );
}
