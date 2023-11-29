import { FC, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface PostLoginAdminProps {
  email: string;
  password: string;
  token: string;
}

const PostLoginAdmin: FC<PostLoginAdminProps> = ({
  email,
  password,
  token,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/", {
        body: email,
        password,
        token,
      })
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

export default PostLoginAdmin;
