import React from "react";
import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import "./Profil.css";

function Profil() {
  const { userList } = useContext(ApiContext);

  if (!userList || userList.length === 0) {
    return <p>Loading...</p>; 
  }

  const user = userList[0]; 

  return (
    <div className="profile">
      <img className="profilepic" src={`${process.env.PUBLIC_URL}/img/chucky.jpg`} alt="User Profile" />
      <h3 className="name">Name: {`${user.name.firstname} ${user.name.lastname}`}</h3>
      <p className="address">
        Address: {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p className="address">E-mail address: {user.email}</p>
      <p className="address">Username: {user.username}</p>
      <p className="address">Password: {user.password}</p>
    </div>
  );
}

export default Profil;
