enum DayOfWeek {
  Monday = "Weekday",
  Tuesday = "Weekday",
  Wednesday = "Weekday",
  Thursday = "Weekday",
  Friday = "Weekday",
  Saturday = "Weekend",
  Sunday = "Weekend",
}

const isWeekend = (day: DayOfWeek): void => {
  console.log(day);
};

isWeekend(DayOfWeek.Wednesday);
