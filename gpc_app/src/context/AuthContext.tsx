import React, { createContext, useState } from "react";

interface AuthContextState {
  auth: boolean;
  setAuth: any;
  resposta: any;
  setResposta: any;
  setToken: any;
  token: string;
  admin: boolean;
  setAdmin: any;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

function AuthProvider({ children }: any) {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [resposta, setResposta] = useState<any>();
  const [token, setToken] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        resposta,
        setResposta,
        setToken,
        token,
        admin,
        setAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
