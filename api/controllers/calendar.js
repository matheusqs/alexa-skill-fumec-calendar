module.exports = (app) => {
  const calendarDB = app.data.calendar;
  const controller = {};

  controller.listWeek = (req, res) => res.status(200).json(calendarDB);

  return controller;
};
