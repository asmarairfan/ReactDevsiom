import './App.css'
import Navbar from "./navbar";
// import Background from "./Background";
import ProcessWeFollow from "./ProcessWeFollow";
import WorkandPresence from "./WorkandPresence";
import IndustriesServed from './IndustriesServed';
import WhoWeWorkWith from './WhoWeWorkWith';

function App() {
  return (
    <div id="root">
      <Navbar />
      {/* <Background /> */}
      <ProcessWeFollow />
      <IndustriesServed />
      <WorkandPresence />
      <WhoWeWorkWith />
    </div>
  );
}

export default App
