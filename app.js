var createError = require("http-errors");
var express = require("express");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var user = require("./routes/user");
var project = require("./routes/project");
var userModel = require("./model/user");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// user routes goes here
// app.get("/user", user.index);
app.get("/user/new", user.create);
app.post("/user/new", user.doCreate);
// app.get("/user/edit", user.edit);
// app.post("/user/edit", user.doEdit);
// app.get("/user/delete", user.confirmDelete);
// app.post("/user/delete", user.doDelete);
// app.get("/login", user.login);
// app.post("/login", user.doLogin);
// app.get("/logout", user.doLogout);

// PROJECT ROUTES
// app.get("/project/new", project.create);
// app.post("/project/new", project.doCreate);
// app.get("/project/:id", project.displayInfo);
// app.get("/project/edit/:id", project.edit);
// app.post("/project/edit/:id", project.doEdit);
// app.get("/project/delete/:id", project.confirmDelete);
// app.post("/project/delete/:id", project.doDelete);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
var db = require("./model/db");
app.listen(3000, () => {
  console.log("server connected");
  console.log(user);
});
