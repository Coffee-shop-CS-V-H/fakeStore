import React, { useContext } from "react";
import CarouselItem from "./CarouselItem";
import { ApiContext } from "../contexts/ApiContext";

function MainPage() {
  const { tList } = useContext(ApiContext);
  return <CarouselItem one={tList[0]} two={tList[1]} three={tList[3]} />;
}

export default MainPage;
