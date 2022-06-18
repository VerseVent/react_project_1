export function ActivityItem({ activityList }) {
  if (!activityList) {
    return;
  }
  return activityList.map((e, i) => (
    <li className="activity-item" key={i}>
      {e}
    </li>
  ));
}
