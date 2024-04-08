import { Outlet } from "react-router-dom"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Rights } from "./components/Rights";

// style={{ backgroundImage: `url("./img/tennis.jpeg")` }}

function App() {
  return (
    <section className="w" >
      <div className="w-full grid grid-rows-2 "
         >
        <div className="w" >
          <Header />
        </div>
        <div className="datil">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
        <Rights />
      </div>
    </section>
  );
}

export default App;
