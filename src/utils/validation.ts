import * as yup from "yup";

export const createUserValidation = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Insert a valid e-mail")
    .required("E-mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("Insert a valid e-mail")
    .required("E-mail is required"),
  password: yup.string().required("Please insert your password"),
});
