import "./styles.css";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./utilities/context";
import Nav from "./Components/Nav";
export default function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Nav/>
        <Pages />
      </StateContext>
    </BrowserRouter>
  );
}
