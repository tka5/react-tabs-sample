import React, { createContext, useState } from "react";

export const EmailContext = createContext();

function EmailContextProvider({ children }) {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider
      value={{
        email,
        setEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}

export default EmailContextProvider;
