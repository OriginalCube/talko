interface UserProps {
  username: string;
  password: string;
  confirmPassowrd: string;
  birthdate: Date;
  email: string;
}

interface LoginProps {
  username: string;
  password: string;
}

const api_url = "/api/v1/user";

import axios from "axios";

export const useUsers = () => {
  const create = async (user: UserProps) => {
    const createUser = await axios.post(`${api_url}/create`, user);
    if (createUser.status === 201) {
      return { status: 201, message: "Successfully created the account." };
    } else {
      return {
        status: createUser.status,
        message: "Error in creating account.",
      };
    }
  };

  const login = async (user: LoginProps) => {
    const loginUser = await axios.post(`${api_url}/login`, user);
    if (loginUser.status === 200) {
      localStorage.setItem("vc-token", JSON.stringify(loginUser.data._id));
      return { status: 200, message: "" };
    } else {
      return { status: loginUser.status, message: "Errors loggin user." };
    }
  };

  return { create, login };
};
