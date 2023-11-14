// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface AuthContextProps {
//   isAuthenticated: boolean;
//   login: () => void;
//   logout: () => void;
//   key: number; 
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProviderComp: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     document.cookie.includes("_auth")
//   );

//   const [key, setKey] = useState(0); 

//   const login = () => {

//     setIsAuthenticated(true);
//     setKey((prevKey) => prevKey + 1); 
//   };

//   const logout = () => {

//     setIsAuthenticated(false);
//     setKey((prevKey) => prevKey + 1); 
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, key }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextProps => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
