import { Outlet } from "react-router-dom"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Rights } from "./components/Rights";

function App() {
  return (
    <section className="w" >
        <div className="datil">
          <Outlet />
        </div>
      <div>
        <Footer />
        <Rights />
      </div>
    </section>
  );
}

export default App;
