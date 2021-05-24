import './App.css';
import TopNav from "./Components/TopNav";
import Announcement from "./Components/Announcement";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Perks from "./Components/Perks";
import Reviews from "./Components/Reviews";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import LoginButton from "./Components/LoginButton";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Announcement />
      <TopNav />
      <Hero />
      <About />
      <Perks />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
