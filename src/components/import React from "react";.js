import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const handleSubmit = (values, action) => {
  console.log(values);
  // e.preventDefault();
  // const obj = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  // };
};

const Register = () => {
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
        onSubmit={(values, action) => {
          console.log("babi", values, action);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input
              // required
              type="phone number"
              placeholder="phone number"
              name="phone"
            />
            <input
              // required
              type="password"
              placeholder="password"
              name="password"
            />
            <input
              // required
              type="confirm password"
              placeholder="confirm password"
            />
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
