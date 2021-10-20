import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function SignUp({ isSubmitting, status }) {
  return (
    <Form noValidate>
      {status && <div>{status}</div>}
      <ErrorMessage name="firstName" />
      <Field type="text" name="firstName" placeholder="First name"></Field>
      <ErrorMessage name="lastName" />
      <Field type="text" name="lastName" placeholder="Last name"></Field>
      <ErrorMessage name="email" />
      <Field type="email" name="email" placeholder="email"></Field>
      <ErrorMessage name="phone" />
      <Field type="text" name="phone" placeholder="Phone number"></Field>
      <ErrorMessage name="password" />
      <Field type="password" name="password" placeholder="*********"></Field>
      <ErrorMessage name="confirmPassword" />
      <Field
        type="password"
        name="confirmPassword"
        placeholder="*********"
      ></Field>
      <button type="submit" disabled={isSubmitting}>
        sign up
      </button>
    </Form>
  );
}

const FormikSignUp = withFormik({
  mapPropsToValues: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  },

  validationSchema: yup.object().shape({
    firstName: yup.string().min(3).required("first name is required ! "),
    lastName: yup.string().min(3).required("lirst name is required ! "),
    email: yup.string().email().required("email is required ! "),
    phone: yup.string().required("phone number is required ! "),
    password: yup.string().min(9).required("password is required ! "),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("confirming password is required ! "),
  }),

  handleSubmit(values, { setSubmitting, setErrors, setStatus }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  },
})(SignUp);

export default FormikSignUp;
