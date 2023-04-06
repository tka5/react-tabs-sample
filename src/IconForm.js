import React, { useContext } from "react";
import { IconContext } from "./IconContextProvider";

function IconForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // do somthing... such as api call etc
  };
  const { onChangeIcon, iconImage } = useContext(IconContext);

  return (
    <fonm
      style={{
        display: "flex",
        "flex-direction": "column",
        padding: "0 50px 0 50px",
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor="icon">アイコン画像</label>
        <input id="icon" type="file" onChange={(e) => onChangeIcon(e)} />
        <div>
          <img src={iconImage} width="400px" height="400px" />
        </div>
      </div>
      <input
        type="submit"
        style={{ margin: "10px 300px 0 300px" }}
        value="更新する"
      />
    </fonm>
  );
}

export default IconForm;
