import React, { useContext, useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import { ApiContext } from "../contexts/ApiContext";

function MainPage() {
  const { tList } = useContext(ApiContext);
  const [list, setlist] = useState([]);
  useEffect(() => {
    setlist([...tList]);
    console.log(list);
    console.log(tList);
    console.log(typeof list);
  }, []);

  return (
    <>
      {list ? (
        <CarouselItem one={list[0]} two={list[2]} three={list[1]} />
      ) : (
        "nincs adat"
      )}
      <div>
      
        <h2>Welcome! </h2>
        <p>
          At our online store, you'll find everything you need! Whether you're
          looking for electronics, fashion, home accessories, or the perfect
          gift, we've got you covered with the best selection and deals. Browse
          through categories easily, and shop the latest products at unbeatable
          prices. With continuous discounts, reliable quality, and fast
          shipping, shopping has never been more convenient! Join our community
          of happy customers and enjoy every moment of your shopping experience!
        </p>
      </div>
      
    </>
  );
}

export default MainPage;
