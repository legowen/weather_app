// Time
export const today = new Date();
export const years = today.getFullYear();
export const months = today.getMonth() + 1;
export const dates = today.getDate();
export const hours = today.getHours();
export const minutes = today.getMinutes();
export const amPm = today.getHours() < 12 ? "AM" : "PM";

export const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const textMonth = monthList[months - 1];
export const textWeek = weekList[dates];