import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const StateContext = ({ children }) => {
  const [cards, setCards] = useState([]);

  return (
    <AppContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
