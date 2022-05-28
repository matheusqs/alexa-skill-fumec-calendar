module.exports = (app) => {
  const controller = app.controllers.calendar;

  app.route("/api/v1/calendar").get(controller.listDay);
};
