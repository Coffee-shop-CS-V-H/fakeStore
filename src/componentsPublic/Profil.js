import React from "react";
import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Profil() {
  const { userList } = useContext(ApiContext);

  if (!userList || userList.length === 0) {
    return <p>Loading...</p>; 
  }

  const user = userList[0]; 

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="User Profile" />
      <h3>Name: {`${user.name.firstname} ${user.name.lastname}`}</h3>
      <p>
        Address: {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p>E-mail address: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profil;
