import React from "react";
import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import "./Profil.css";

function Profil() {
  const { userList } = useContext(ApiContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!userList || userList.length === 0) {
    return <p>Loading...</p>;
  }

  const user = userList[1];

  const changePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="profile">
      <img
        className="profilepic"
        src={`${process.env.PUBLIC_URL}/img/chucky.png`}
        alt="User Profile"
      />
      <h3 className="name">
        Name: {`${user.name.firstname} ${user.name.lastname}`}
      </h3>
      <p className="address">
        <b>Address:</b>{" "}
        {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p className="address"><b>E-mail address:</b> {user.email}</p>
      <p className="address"><b>Username:</b> {user.username}</p>
      <p className="address">
        <b>Password:</b> <span>{passwordVisible ? user.password : "****"}</span>
        <button
          onClick={changePasswordVisibility}
          style={{
            marginLeft: "10px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {passwordVisible ? "🫣" : "👁️"}
        </button>
      </p>
    </div>
  );
}

export default Profil;
