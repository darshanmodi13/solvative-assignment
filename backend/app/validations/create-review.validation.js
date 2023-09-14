import Joi from "joi";

export const CreateNewValidationSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `title cannot be an empty field`,
    "any.required": `title is a required field`,
  }),
  content: Joi.string().required().messages({
    "string.empty": `Content cannot be an empty field`,
    "any.required": `Content is a required field`,
  }),
});
