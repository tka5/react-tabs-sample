import React, { createContext, useState } from "react";

export const IconContext = createContext();

function IconContextProvider({ children }) {
  const [icon, setIcon] = useState(null);
  const [iconImage, setIconImage] = useState("");
  const onChangeIcon = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setIcon(files[0]);
      setIconImage(window.URL.createObjectURL(files[0]));
    }
  };

  return (
    <IconContext.Provider
      value={{
        onChangeIcon,
        iconImage,
      }}
    >
      {children}
    </IconContext.Provider>
  );
}

export default IconContextProvider;
