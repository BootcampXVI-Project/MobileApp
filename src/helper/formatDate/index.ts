import moment from "moment";

interface TimeInfo {
  date: string;
  time: string;
}

export function convertTimeString(timeString: string): TimeInfo {
  // console.log(timeString);

  const date = new Date(timeString);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);

  // const outputString = `${day}-${month}, ${hour}:${minute}`;

  return { date: `${day}/${month}`, time: `${hour}:${minute}` };
}
