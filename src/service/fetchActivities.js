export default async function fetchActivities() {
  const activity = await fetch("https://www.boredapi.com/api/activity");
  return activity.json();
}
