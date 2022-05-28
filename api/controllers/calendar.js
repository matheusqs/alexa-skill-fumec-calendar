module.exports = (app) => {
  const calendarDB = app.data.calendar;
  const controller = {};

  const getSubjectsFromDay = (subjects, day) => {
    const weekDay = day.getDay();

    return subjects.filter((subject) => subject.weekDay == weekDay);
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

  return controller;
};
