import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const CreateSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
      "Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
    ),

  confirmPassword: Yup.string()
    // .min(6, "Password must be at least 6 characters")
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
    //   "Confirm Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
    // )
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {

  const navigate = useNavigate();
   
  const handleSubmit = (values, action) => {
    console.log(values);

    try {
      axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", values)
    } catch(error) {
      console.error(error)
      return
    }
    
    // 1. Call axios untuk register
    // 2. Redirect ke halaman verify
    navigate('/verify')
  };

  return (
    <div className="auth">
      <h1>Register</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={CreateSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={props.handleChange}
              value={props.values.username}
            />

            <input
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={props.handleChange}
              value={props.values.email}
            />
            <input
              required
              type="phone number"
              placeholder="phone number"
              name="phone"
              onChange={props.handleChange}
              value={props.values.phone}
            />
            <input
              required
              type="password"
              placeholder="password"
              name="password"
              onChange={props.handleChange}
              value={props.values.password}
            />
            <ErrorMessage name="password" component="div" />
            <input
              required
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              onChange={props.handleChange}
              value={props.values.confirmPassword}
            />
            <ErrorMessage name="confirmPassword" component="div" />
            <button type="submit">Register</button>
            {/* <p>This is an error!</p> */}
            <span>
              Do you have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        )}
      </Formik>

      {/* <Formik
        initialValues={{ name: "jared" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik> */}
    </div>
  );
};

export default Register;
