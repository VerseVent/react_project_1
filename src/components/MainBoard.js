import { useState, useEffect } from "react";
import fetchActivities from "../service/fetchActivities";
import { ActivityItem } from "./ActivityItem";
import ReactLoading from "react-loading";

export function MainBoard() {
  const [activities, setActivities] = useState({
    positive: [],
    negative: [],
  });
  const [currentActivity, setCurrentActivity] = useState();

  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchActivities()
        .then((res) => setCurrentActivity(res.activity))
        .finally(() => setIsLoading(false));
    }, 300);
  }, [isClicked]);

  const guessAnswer = true;

  function handleActivitySelect(guessAnswer) {
    if (guessAnswer) {
      setActivities({
        positive: [...activities.positive, currentActivity],
        negative: [...activities.negative],
      });
      setIsClicked(!isClicked);
    } else {
      setActivities({
        positive: [...activities.positive],
        negative: [...activities.negative, currentActivity],
      });

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
          <p>{currentActivity}</p>
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
          <ActivityItem activityList={activities.positive} />
        </ul>
        <ul className="activity-list">
          <h2>Rejected activities</h2>
          <ActivityItem activityList={activities.negative} />
        </ul>
      </div>
    </div>
  );
}
