module.exports = (app) => {
  const controller = app.controllers.calendar;

  app.route("/api/v1/calendar").get(controller.listDay);

  app.route("/api/v1/calendar/weekDay").get(controller.listWeekDay);
};
