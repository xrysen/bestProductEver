import './App.css';
import TopNav from "./Components/TopNav";
import Announcement from "./Components/Announcement";
import Hero from "./Components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Announcement />
      <TopNav />
      <Hero />
    </div>
  );
}

export default App;
