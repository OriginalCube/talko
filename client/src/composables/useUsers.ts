interface UserProps {
  username: string;
  password: string;
  confirmPassowrd: string;
  birthdate: Date;
  email: string;
}

const api_url = "/api/v1/user";

import axios from "axios";

export const useUsers = () => {
  const create = async (user: UserProps) => {
    const test = await axios.post(`${api_url}/create`, user);
    return test;
  };

  return { create };
};
