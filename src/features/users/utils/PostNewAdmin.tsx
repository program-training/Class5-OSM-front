import { FC } from "react";
import axios from "axios";

export interface postNewAdminProps {
  email: string;
  password: string;
  isAdmin: boolean;
}

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostNewAdmin: FC<postNewAdminProps> = ({ email, password, isAdmin }) => {
  axios
    .post(baseURL, { body: email, password, isAdmin })
    .then((Response) => {
      if (Response.status === 200)
        console.log("Success:", "Successfully added to the site");
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });
};

export default PostNewAdmin;
