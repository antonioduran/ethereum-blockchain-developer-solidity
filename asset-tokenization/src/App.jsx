//import { EthProvider } from "./contexts/EthContext";
//import Intro from "./components/Intro/";
//import Setup from "./components/Setup";
//import Demo from "./components/Demo";
//import Footer from "./components/Footer";

import ItemManager from "./components/ItemManager/index.jsx"

import "./App.css";

function App() {
  return (
    // <EthProvider>
      <div id="App" >
        <div className="container">
          <ItemManager />
          <hr />
        
          {/* <Footer /> */}
        </div>
      </div>
    // </EthProvider>
  );
}

export default App;
