import { createContext, useState, useEffect } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [tList, setTList] = useState([]);

  function getdata(endPoint) {
    myAxios
      .get(endPoint)
      .then(function (response) {
        console.log(response.data);
        setTList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
  function postdata(endpoint, data) {
    myAxios
      .post(endpoint, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
  useEffect(() => {
    getdata(`/products`);
  }, []);

  return (
    <ApiContext.Provider value={{tList, postdata}}>
      {children}
    </ApiContext.Provider>
  );
};
