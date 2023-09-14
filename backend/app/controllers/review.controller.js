import {
  successResponse,
  successfullyCreatedResponse,
  badRequestResponse,
  notFoundResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from "../utils/responses.js";

// Validation
import { CreateNewValidationSchema } from "../validations/create-review.validation.js";

// Model
import { ReviewModel } from "../models/review.model.js";

export const createNewReview = async (req, res) => {
  try {
    const { value, error } = CreateNewValidationSchema.validate(req.body);
    if (error) {
      return badRequestResponse(res, error?.details[0]?.message);
    }

    const newReview = await ReviewModel.create({
      ...req.body,
      Date: new Date().toString(),
    });

    return successfullyCreatedResponse(
      res,
      newReview,
      "Review Created Successfully."
    );
  } catch (error) {
    console.log(error);
    return serverErrorResponse(res, "Server Error");
  }
};

export const listAllReview = async (req, res) => {
  try {
    const allReview = await ReviewModel.find().lean();
    return successResponse(res, allReview, "Review Created Successfully.");
  } catch (error) {
    return serverErrorResponse(res, "Server Error");
  }
};

export const listSingleReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return badRequestResponse(res, "Specify review ID");
    }
    const allReview = await ReviewModel.findById(id).lean();
    return successResponse(res, allReview, "Review Created Successfully.");
  } catch (error) {
    return serverErrorResponse(res, "Server Error");
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return badRequestResponse(res, "Specify Review To be Deleted");
    }
    const deletedReview = await ReviewModel.findByIdAndDelete(id);
    if (!deletedReview) {
      return badRequestResponse(res, "Review does not exist");
    }
    return successResponse(res, deletedReview, "Review Deleted Successfully.");
  } catch (error) {
    return serverErrorResponse(res, "Server Error");
  }
};

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return badRequestResponse(res, "Specify Review To be Deleted");
    }

    const { value, error } = CreateNewValidationSchema.validate(req.body);
    if (error) {
      return badRequestResponse(res, error?.details[0]?.message);
    }

    const updatedReview = await ReviewModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedReview) {
      return badRequestResponse(res, "Review does not exist");
    }
    return successResponse(res, updatedReview, "Review Updated Successfully.");
  } catch (error) {
    return serverErrorResponse(res, "Server Error");
  }
};
