import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginContext } from "../App";

const CreateSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
      "Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
    ),
});

const Login = () => {
  const { setToken } = useContext(LoginContext);
  // useEffect(() => {
  //   localStorage.getItem()
  // })

  const navigate = useNavigate();

  const handleSubmit = (values, action) => {
    console.log(values);

    try {
      axios
        .post(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
          values
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
        });
    } catch (error) {
      console.error(error);
      return;
    }

    // 2. Redirect ke halaman HOME
    navigate("/");
  };
  return (
    <div className="auth">
      <h1>Login</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          password: "",
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

            <button type="submit">Login</button>
            {/* <p>This is an error!</p> */}
            <span>
              Do you have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
