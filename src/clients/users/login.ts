import { User } from "../../types";
import { Login } from "../../types/request";

async function login(request: Login): Promise<User> {
  //todo: integrate with backend
  return {
    id: "1",
    username: "cosmin0123",
    firstName: "cosmin",
    lastName: "aftnase",
    email: "cosmin.aftanase@yahoo.com",
  };
}

export default login;
