import React, { useContext } from "react";
import { PasswordContext } from "./PasswordContextProvider";

function PasswordForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // do somthing... such as api call etc
  };
  const { password, setPassword } = useContext(PasswordContext);

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
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input
        type="submit"
        style={{ margin: "10px 300px 0 300px" }}
        value="更新する"
      />
    </fonm>
  );
}

export default PasswordForm;
