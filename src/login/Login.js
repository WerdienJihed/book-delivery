import { withFormik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

function Login({ isSubmitting, status }) {
  return (
    <Form noValidate>
      {status && <div>{status}</div>}
      <ErrorMessage name="email" />
      <Field type="email" name="email" placeholder="email"></Field>
      <ErrorMessage name="password" />
      <Field type="password" name="password" placeholder="*********"></Field>
      <button type="submit" disabled={isSubmitting}>
        log in
      </button>
    </Form>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().email().required("email is required ! "),
    password: yup.string().min(9).required("password is required ! "),
  }),
  handleSubmit(values, { setSubmitting, setErrors, setStatus }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  },
})(Login);

export default FormikLogin;
