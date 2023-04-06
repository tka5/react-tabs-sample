import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContextProvider";

function ProfileForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // do somthing... such as api call etc
  };
  const {
    userName,
    setUserName,
    nickName,
    setNickName,
    message,
    setMessage,
    notifyEmail,
    setNotifyEmail,
  } = useContext(ProfileContext);

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
        <label htmlFor="userName">ユーザー名</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nickName">ニックネーム</label>
        <input
          id="nickName"
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">メッセージ</label>
        <input
          id="message"
          type="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="notifyEmail">お知らせメールを受け取るか</label>
        <input
          id="notifyEmail"
          type="checkbox"
          checked={notifyEmail}
          onChange={() => setNotifyEmail(!notifyEmail)}
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

export default ProfileForm;
