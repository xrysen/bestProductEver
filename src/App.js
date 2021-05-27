import "./App.css";
import TopNav from "./Components/TopNav";
import Announcement from "./Components/Announcement";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Perks from "./Components/Perks";
import Reviews from "./Components/Reviews";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import Order from "./Components/Order";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [view, setView] = useState("Landing");

  const changeView = (newView) => {
    setView(newView);
  }

  return (
    <div className="App">
      <Announcement />
      <TopNav setView = {() => changeView("Landing")} />
      {view === "Landing" && (
        <>
          <Hero />
          <About />
          <Perks />
          <Reviews />
          <Pricing view = {()=> changeView("orderForm")} />
        </>
      )}
      {view === "orderForm" && (
        <Order />
      )}
      <Footer />
    </div>
  );
}

export default App;
