import "./styles.css";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}
