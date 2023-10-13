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
  password: yup.string().required("Insert your password"),
});

export const passwordValidation = yup.object({
  newPassword: yup
    .string()
    .required("Insert your new password")
    .min(6, "Minimum 6 characters"),
  confirmNewPassword: yup
    .string()
    .required("Insert your new password")
    .min(6, "Minimum 6 characters"),
});
