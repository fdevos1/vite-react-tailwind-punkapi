import { createContext, useState, useEffect } from "react";
import { getUser } from "../services/getUser";

export const UserContext = createContext({});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState([]);

  const id = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  const requestUser = async () => {
    if (id) {
      const user = await getUser(id, token);

      setUser(user);
    }
  };

  useEffect(() => {
    requestUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, token }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
