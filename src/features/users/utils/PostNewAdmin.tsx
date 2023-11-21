import { FC, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface postNewAdminProps {
  email: string;
  password: string;
  isAdmin: boolean;
}

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostNewAdmin: FC<postNewAdminProps> = ({ email, password, isAdmin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(baseURL, { body: email, password, isAdmin })
      .then((Response) => {
        if (Response.status === 200) {
          navigate("/");
        }
        console.log("Success:", "Successfully added to the site");
      })
      .catch((err) => {
        console.error("Error:", err.message);
        navigate("*");
      });
  }, []);

  return null;
};

export default PostNewAdmin;
