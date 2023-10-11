import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import { loginApi } from "../api/loginApi";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ message: "", status: "" });

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await loginApi.post("/token/authenticate-user", {
        email,
        password,
      });

      const { token, user } = response.data.token;

      navigate("/home");

      setUser(user.id);

      localStorage.setItem("token", token);
      localStorage.setItem("user_id", JSON.stringify(user.id));
      localStorage.setItem("user_name", JSON.stringify(user.name));
      localStorage.setItem("user_email", JSON.stringify(user.email));

      return response.data;
    } catch (err: AxiosError) {
      setError({
        message: err.response.data.message,
        status: err.response.status,
      });
      return err;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");

    setUser(null);

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        signIn,
        signOut,
        setError,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
