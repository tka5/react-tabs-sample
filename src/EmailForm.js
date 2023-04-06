import React, { useContext } from "react";
import { EmailContext } from "./EmailContextProvider";

function EmailForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // do somthing... such as api call etc
  };
  const { email, setEmail } = useContext(EmailContext);

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
        <label htmlFor="email">Eメール</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default EmailForm;
