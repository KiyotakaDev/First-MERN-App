import { createContext, useState, useContext } from "react";
import { registerRequest } from "../apis/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth mu;st be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signUp = async (user) => {
    const res = await registerRequest(user);
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
