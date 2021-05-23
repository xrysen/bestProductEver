import './App.css';
import TopNav from "./Components/TopNav";
import Announcement from "./Components/Announcement";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Announcement />
      <TopNav />
    </div>
  );
}

export default App;
