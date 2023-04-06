import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const [notifyEmail, setNotifyEmail] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        userName,
        setUserName,
        nickName,
        setNickName,
        message,
        setMessage,
        notifyEmail,
        setNotifyEmail,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
