// dotenv
import { config } from "dotenv";
const env = process.env.NODE_ENV || "development";
if (env === "development") {
  config();
}
// dependencies
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connect } from "mongoose";
import morgan from "morgan";

// routes
import reviewRoutes from "./app/routes/review.routes.js";

const app = express();

const PORT = process.env.PORT || 8080;

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DataBase Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// //Configs
var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

//enable cors
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//parse cookies
app.use(cookieParser());

//Logger
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

//Routes
app.use("/api/review", reviewRoutes);

app.get("/", (req, res) => {
  res.end("Health Check");
});

app.listen(PORT, () => {
  console.log(`Port Started on ${PORT}`);
});
