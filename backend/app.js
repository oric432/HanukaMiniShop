// require packages
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// custom middleware

// invoke express app
const app = express();

// middlewares
// developer logging
app.use(morgan("dev"));

//security middlewares
app.use(cors());
app.use(helmet());
app.use(xss());

// parse requests (with JSON payloads) to JSON
app.use(express.json());

// apply rate-limiting middleware
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

// routers
const brandRouter = require("./routes/brand");
const categoryRouter = require("./routes/category");
const imageRouter = require("./routes/image");
const itemRouter = require("./routes/item");
const pool = require("./utils/db");

// routes
app.use("/api/v1/admin/brand", brandRouter);
app.use("/api/v1/admin/category", categoryRouter);
app.use("/api/v1/admin/image", imageRouter);
app.use("/api/v1/admin/item", itemRouter);

// custom middleware

// server setup
const port = process.env.PORT || 3001;

const startApplication = async () => {
  try {
    app.listen(port, () =>
      console.log(`server is listening to port ${port}...`)
    );

    console.log("r");
  } catch (error) {
    console.error("e", error);
  }
};

// initialize the application
startApplication();
