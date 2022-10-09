import "./styles.css";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./utilities/context";
export default function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Pages />
      </StateContext>
    </BrowserRouter>
  );
}
