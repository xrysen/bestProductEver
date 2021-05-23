import './App.css';
import TopNav from "./Components/TopNav";
import Announcement from "./Components/Announcement";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Perks from "./Components/Perks";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Announcement />
      <TopNav />
      <Hero />
      <About />
      <Perks />
    </div>
  );
}

export default App;
