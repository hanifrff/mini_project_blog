import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Save token ke local storage
    localStorage.setItem("token", token);

    // Verify linking
    try {
      axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set success screen
      setIsVisible(true);
    } catch (error) {
      console.error(error);
      return;
    }

    // Use navigate disini
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);

  return <div>"Verification successful!"</div>;
};

export default Verification;
