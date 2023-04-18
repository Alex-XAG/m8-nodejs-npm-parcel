import Joi from "joi";

const validationSchema = Joi.string().min(3).max(10);

export default function validatePassword(password) {
  return validationSchema.validate(password);
}
