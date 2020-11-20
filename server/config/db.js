const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect(
      "mongodb+srv://khan123456:khan123456@cluster.mqwut.mongodb.net/task2?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    )
    .then((res) => console.log("conneceted"))
    .catch((err) => console.log(err));
  mongoose.Promise = global.Promise;

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);

  if (app) {
    app.set("mongoose", mongoose);
  }
};

function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
