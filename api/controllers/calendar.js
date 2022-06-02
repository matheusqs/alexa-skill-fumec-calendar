module.exports = (app) => {
  const calendarDB = app.data.calendar;
  const controller = {};

  const getSubjectsFromDay = (subjects, day) => {
    const weekDay = day.getDay();

    return subjects.filter((subject) => subject.weekDay == weekDay);
  };

  const getDateToLastWeekDay = (weekDay) => {
    var prevMonday = new Date();
    let weekDayNumber;

    switch (weekDay) {
      case "tuesday":
        weekDayNumber = 5;
        break;
      case "wednesday":
        weekDayNumber = 4;
        break;
      case "thursday":
        weekDayNumber = 3;
        break;
      case "friday":
        weekDayNumber = 2;
        break;
      case "saturday":
        weekDayNumber = 1;
        break;
      case "sunday":
        weekDayNumber = 0;
        break;
      default:
        weekDayNumber = 6;
        break;
    }

    prevMonday.setDate(
      prevMonday.getDate() - ((prevMonday.getDay() + weekDayNumber) % 7)
    );

    return prevMonday;
  };

  controller.listDay = (req, res) => {
    const { day } = req.query;

    let date;

    switch (day) {
      case "yesterday":
        date = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        break;
      case "tomorrow":
        date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        break;
      default:
        date = new Date();
        break;
    }

    result = getSubjectsFromDay(calendarDB.calendar.data, date);
    return res.status(200).json({ data: result });
  };

  controller.listWeekDay = (req, res) => {
    const { weekDay } = req.query;

    const date = getDateToLastWeekDay(weekDay);
    result = getSubjectsFromDay(calendarDB.calendar.data, date);
    return res.status(200).json({ data: result });
  };

  return controller;
};
