import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
    } catch (error) {
      console.error(error);
      return;
    }

    // Use navigate disini

    navigate("/login");
  }, []);

  return (
    <div>
      We are currently verifying your registration, please wait for awhile!
    </div>
  );
};

export default Verification;
