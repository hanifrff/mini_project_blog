import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginContext } from "../App";

const CreateSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
      "Password must contain at least 1 uppercase letter, 1 symbol, and 1 lowercase letter"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Changepassword = () => {
  const [value, setValue] = useState("");
  const { token, setToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setValue(response.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  const handleSubmit = (values, action) => {
    console.log("asdasd", values);

    try {
      axios
        .patch(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        .then((response) => {
          console.log("ini sudha selesai ganti password");
        });
    } catch (error) {
      console.error(error);
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="auth">
      <h1>Change Password</h1>
      <Formik
        initialValues={{
          currentPassword: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={CreateSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              required
              type="password"
              placeholder="current password"
              name="currentPassword"
              onChange={props.handleChange}
              value={props.values.currentPassword}
            />
            <ErrorMessage name="currentpassword" component="div" />
            <input
              required
              type="password"
              placeholder="new password"
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
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Changepassword;
