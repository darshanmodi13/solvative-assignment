import express from "express";

const router = express.Router();

//controller
import {
  createNewReview,
  deleteReview,
  listAllReview,
  listSingleReview,
  updateReview,
} from "../controllers/review.controller.js";

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", createNewReview);

router.get("/", listAllReview);

router.get("/:id", listSingleReview);

router.delete("/:id", deleteReview);

router.put("/:id", updateReview);

export default router;
