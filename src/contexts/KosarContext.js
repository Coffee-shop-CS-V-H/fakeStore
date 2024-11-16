import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {

  const [kosar, setKosar] = useState([]); 
  const [total, setTotal] = useState(0);

 
  function kosarba(product) {
    const segedKosar = [...kosar];
    const vanIlyenTermek = segedKosar.find((elem) => elem.id === product.id);

    if (vanIlyenTermek === undefined) {

      product.db = 1; 
      segedKosar.push(product);
    } else {
    
      vanIlyenTermek.db++;
    }

    setKosar([...segedKosar]); 
    
  }

  // A termék darabszámának módosítása
  function dbModosit(id, db) {
    const segedKosar = [...kosar];
    const vanIlyenTermek = segedKosar.find((elem) => elem.id === id);

    if (vanIlyenTermek) {
      vanIlyenTermek.db = db;


      if (db === 0) {
        const termekIndex = segedKosar.indexOf(vanIlyenTermek);
        segedKosar.splice(termekIndex, 1);
      }

      setKosar([...segedKosar]); 
      osszeg()
    }
  }

  function osszeg(){
    //fizetendő összár számítása
    let szum=kosar.reduce((sv,product)=>{return sv+product.price*product.db;},0)
    setTotal(szum)
  }

  return (
    <KosarContext.Provider value={{ kosar, kosarba, dbModosit, total }}>
      {children}
    </KosarContext.Provider>
  );
};