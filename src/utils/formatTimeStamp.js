export default function formatTime(IsoTime) {
  let timestamp = IsoTime;
  let date = new Date(timestamp);
  let currentDate = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let strTime = hours + ":" + minutes + " " + ampm;

  // check if the date is the same as the current date
  if (date.toDateString() === currentDate.toDateString()) {
    // check if the time difference is less than a minute
    let diff = currentDate.getTime() - date.getTime();
    if (diff < 60000) {
      return "recently";
    } else {
      return strTime;
    }
  } else {
    // check if the date is yesterday
    let yesterday = new Date(currentDate.getTime() - 86400000);
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday " + strTime;
    } else {
      // format the date as day/fullMonth/year
      let day = date.getDate();
      let month = date.toLocaleString("default", { month: "long" });
      let year = date.getFullYear();
      let strDate = day + "/" + month + "/" + year;
      return strTime + " " + strDate;
    }
  }
}
