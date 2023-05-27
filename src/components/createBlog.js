import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const createBlog = () => {
  const [dataUser, setDataUser] = useState({});
  const { token, setToken } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setDataUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        country: "",
        CategoryId: "",
        keywords: "",
      }}
      validationSchema={CreateSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={props.handleChange}
            value={props.values.username}
          />

          <input
            required
            type="text"
            placeholder="content"
            name="content"
            onChange={props.handleChange}
            value={props.values.email}
          />
          <input
            required
            type="text"
            placeholder="country"
            name="country"
            onChange={props.handleChange}
            value={props.values.phone}
          />
          <select
            required
            placeholder="CategoryId"
            name="CategoryId"
            onChange={props.handleChange}
            value={props.values.password}
          >
            <option value="1">Bisnis</option>
            <option value="2">Ekonomi</option>
            <option value="3">Teknologi</option>
            <option value="4">Olahraga</option>
            <option value="5">Kuliner</option>
            <option value="6">Internasional</option>
            <option value="7">Fiksi</option>
          </select>

          <input
            required
            type="text"
            placeholder="keywords"
            name="keywords"
            onChange={props.handleChange}
            value={props.values.password}
          />
        </form>
      )}
    </Formik>
  );
};

export default createBlog;
