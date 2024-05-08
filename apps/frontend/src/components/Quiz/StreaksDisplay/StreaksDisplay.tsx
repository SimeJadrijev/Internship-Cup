import { useState } from "react";
import classes from "./index.module.css";
import DailyStreak from "../../Other/DailyStreak";

const StreaksDisplay = ({ dateRegistered }: { dateRegistered: Date }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateArray: Date[] = [];

  // Dodaj 3 dana pre trenutnog datuma
  const threeDaysAgo = new Date(dateRegistered.getTime());
  threeDaysAgo.setDate(dateRegistered.getDate() - 4);

  // Dodaj 3 dana posle trenutnog datuma
  const threeDaysLater = new Date(new Date().getTime());
  threeDaysLater.setDate(new Date().getDate() + 3);

  // Petlja za iteriranje kroz datume i dodavanje u niz
  for (
    let currentDate = new Date(threeDaysAgo);
    currentDate <= threeDaysLater;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dateArray.push(new Date(currentDate));
  }

  const dayOfTheWeek = (date: Date) => {
    return days[date.getDay()][0];
  };
  const dateOfTheMonth = (date: Date) => {
    return date.getDate().toString();
  };
  const checkForAStreak = (date: Date) => {
    //dohvatit postoji  li streak za taj dan
  };

  return (
    <div className={classes.container}>
      <div className={classes.streaks}>
        {dateArray.map((date, index) => (
          <DailyStreak
            key={index}
            type="streak"
            date={dateOfTheMonth(date)}
            day={dayOfTheWeek(date)}
          />
        ))}
      </div>
    </div>
  );
};

export default StreaksDisplay;
