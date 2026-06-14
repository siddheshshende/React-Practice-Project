import { createContext } from "react";

const userContext = createContext({
  name: "siddhesh",
  loggedInUser: "default user ",
});

export default userContext;
