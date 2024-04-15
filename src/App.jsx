import { Outlet } from "react-router-dom"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Rights } from "./components/Rights";
import { Home } from "./root/Home";

function App() {
  return (
    <section className="w" >
        <div className="datil">
          <Home />
        </div>
      <div>
        <Footer />
        <Rights />
      </div>
    </section>
  );
}

export default App;
